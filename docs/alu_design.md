# ALU Design
The instruction set requires the ALU to perform certain operations directly:

### Arithmetic
- Addition
- Subtraction (using Twos-Complement)

### Logic
- Bitwise AND
- Bitwise OR
- Bitwise XOR
- Bitwise NOT
- Shift Left (single place)
- Shift Right (single place)

### Flags
- `alarger`: A larger B
- `equal`: A equals B
- `carry`: Carry Out from adder or shifter

Jump instructions require flags to be set properly:
- `JGEO`: `alarger OR equal`
- `JLEO`: `NOT alarger OR equal`
- `JCO`: `carry`
- `JEO`: `equal`
