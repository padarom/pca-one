export default {
    "add":   { "opcode": 1,  "format": "R", "mode": 0 },
    "adc":   { "opcode": 1,  "format": "R", "mode": 1 },
    "sub":   { "opcode": 1,  "format": "R", "mode": 2 },
    "sbb":   { "opcode": 1,  "format": "R", "mode": 3 },
    "and":   { "opcode": 4,  "format": "R" },
    "or":    { "opcode": 5,  "format": "R" },
    "xor":   { "opcode": 6,  "format": "R" },
    "not":   { "opcode": 7,  "format": "R" },
    "shl":   { "opcode": 8,  "format": "R" },
    "shr":   { "opcode": 9,  "format": "R" },
    "addi":  { "opcode": 2,  "format": "I" },
    "subi":  { "opcode": 3,  "format": "I" },
    "mov":   { "opcode": 10, "format": "R" },
    "mvih":  { "opcode": 11, "format": "S" },
    "mvil":  { "opcode": 12, "format": "S" },
    "ldidr": { "opcode": 16, "format": "I" },
    "stidr": { "opcode": 17, "format": "I" },
    "ldidx": { "opcode": 18, "format": "R" },
    "stidx": { "opcode": 19, "format": "R" },
    "jmp":   { "opcode": 20, "format": "J" },
    "jmpi":  { "opcode": 21, "format": "I" },
    "jgeo":  { "opcode": 22, "format": "I" },
    "jleo":  { "opcode": 23, "format": "I" },
    "jco":   { "opcode": 24, "format": "J" },
    "jeo":   { "opcode": 25, "format": "I" },
    "push":  { "opcode": 26, "format": "R" },
    "pop":   { "opcode": 27, "format": "R" },
    "call":  { "opcode": 13, "format": "R" },
    "jal":   { "opcode": 14, "format": "J" },
    "movsp": { "opcode": 15, "format": "R" },
    "ret":   { "opcode": 28, "format": "R" },
    "stc":   { "opcode": 29, "format": "R" },
    "nop":   { "opcode": 31, "format": "R" },
    "hlt":   { "opcode": 0,  "format": "R" },
    "rst":   { "opcode": 30, "format": "R" },
    "ie":    { "opcode": 1,  "format": "R" },
    "id":    { "opcode": 1,  "format": "R" }
}