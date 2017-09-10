import opcodes from './opcodetable';
import isNumber from 'is-number';

const INSTRUCTION_FIELDS = {
    R: [
        { name: 'rs', length: 3 },
        { name: 'rt', length: 3 },
        { name: 'rd', length: 3 },
    ],
    I: [
        { name: 'rs', length: 3 },
        { name: 'rt', length: 3 },
        { name: 'imm', length: 5 },
    ],
    S: [
        { name: 'rs', length: 3 },
        { name: 'imm', length: 8 },
    ],
    J: [
        { name: 'imm', length: 11 },
    ],
};

export default class Assembler {

    constructor (content) {
        this.sourcelines = content
            .split(/\r?\n/)
            .filter(line => {
                return line.length > 0;
            });

        this._locationCounter = { '': 0 };
        this._activeLocationCounter = '';
        this._symbolTable = [];
    }

    run() {
        let intermediate = this.sourcelines
            .map(this._firstPass.bind(this))
            .filter(n => typeof n !== 'undefined');

        let result = intermediate.map(this._secondPass.bind(this));

        for (var line of result) {
            let binary = line.toString(2);
            let buffer = "0000000000000000";
            let output = buffer.substr(0, buffer.length - binary.length) + binary;
            console.log(output);
        }

        return Buffer.from(result);
    }

    _firstPass (line) {
        // Discard any comments
        line = line.split(';')[0];

        // Trim the lines and replace all tabs
        // and multiple spaces with a single space
        line = line.trim().replace(/\s\s+/, ' ');

        let parts = line.split(' ');

        var operation = {
            locationCounter: this._activeLocationCounter,
            location: this._locationCounter[this._activeLocationCounter],
            operands : []
        };

        var containsOperation = false;

        while (parts.length) {
            let element = parts.shift();

            switch (this._getElementType(element)) {
                case 'label':
                    this._symbolTable.push({
                        name: element.replace(':',''),
                        value: this._locationCounter[this._activeLocationCounter],
                        type: 'REL'
                    });
                    break;

                case 'operation':
                    operation.instruction = element;
                    containsOperation = true;
                    break;

                case 'operand':
                    operation.operands = this._parseOperands(element);
                    break;

                case 'directive':
                    break;
            }
        }

        if (containsOperation) {
            this._locationCounter[this._activeLocationCounter]++;

            return operation;
        }
    }

    _secondPass (operation) {
        let instruction = opcodes[operation.instruction];
        let operands = operation.operands;

        var opcode = instruction.opcode;
        for (const [index, field] of INSTRUCTION_FIELDS[instruction.format].entries()) {
            opcode = opcode << field.length;

            if (operands.length < index + 1) {
                // Throw warning!
            } else {
                let value = this._getOperandValue(operands[index]);
                if (value > Math.pow(2, field.length)) {
                    // Throw exception!
                }

                opcode = opcode | value;
            }
        }

        if (instruction.format == 'R') {
            opcode = opcode << 2;

            if (instruction.hasOwnProperty('mode')) {
                opcode = opcode | instruction.mode;
            }
        }

        return opcode;
    }

    _getOperandValue (operand) {
        switch (operand.type) {
            case 'label':
                return this._findSymbolValue(operand.value);
            default:
                return operand.value;
        }
    }

    _findSymbolValue (symbol) {
        for (var label of this._symbolTable) {
            if (label.name == symbol) {
                return label.value;
            }
        }

        // TODO: Add exception if symbol isn't found
    }

    _parseOperands (operand) {
        let parts = operand.split(',');
        var operands = [];

        for (var part of parts) {
            if (isNumber(part)) {
                operands.push({
                    type: 'int',
                    value: parseInt(part)
                });
            }

            else {
                operands.push({
                    type: 'label',
                    value: part
                });
            }
        }

        return operands;
    }

    _getElementType (element) {
        if (element[element.length - 1] == ':') {
            return 'label';
        }

        if (element in opcodes) {
            return 'operation';
        }

        return 'operand';
    }
};
