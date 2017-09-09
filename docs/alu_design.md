# ALU Design

## ALU Opcode
To instruct the ALU which of the operations to perform the instruction decoder connects to the ALU via 3 bits. In addition, the last two bits of the instruction are connected to the adder of the ALU as those determine if carry should be used and if B needs to be inverted (for subtraction).

### Arithmetic
- `000`: Addition
- `000`: Subtraction (A-B = A+(-B); -B = &not;B+1)

### Logic
- `001`: Bitwise AND
- `010`: Bitwise OR
- `011`: Bitwise XOR
- `100`: Bitwise NOT
- `101`: Shift Left (single place)
- `110`: Shift Right (single place)
