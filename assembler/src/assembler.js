import opcodes from './opcodetable';
import isNumber from 'is-number';

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

        this._destructuredLines = [];
    }

    run() {
        let intermediate = this.sourcelines.map(this._firstPass.bind(this));

        console.log(intermediate);
        console.log(this._symbolTable);
    }

    _firstPass (line) {
        // Discard any comments
        line = line.split(';')[0];

        // Trim the lines and replace all tabs
        // and multiple spaces with a single space
        line = line.trim().replace(/\s\s+/, ' ');

        let parts = line.split(' ');

        var instruction = {
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
                    instruction.operation = element;
                    containsOperation = true;
                    break;

                case 'operand':
                    instruction.operands = this._parseOperands(element);
                    break;

                case 'directive':
                    break;
            }
        }

        if (containsOperation) {
            this._locationCounter[this._activeLocationCounter]++;

            return instruction;
        }
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

        if (element.toLowerCase() in opcodes) {
            return 'operation';
        }

        return 'operand';
    }
};
