# Instruction Set

The instruction set used by PCA One is inspired by the MIPS-16 instruction set described in the paper *[A 16-bit MIPS Based Instruction Set Architecture for RISC Processor](http://www.ijsrp.org/research-paper-0413/ijsrp-p16126.pdf)* (Bhavsar et al. 2013).

| Mnemonic | Op&#8209;Code&nbsp;(Function) | Type&nbsp;&amp;&nbsp;Usage | Description |
|---|---|---|---|
| ADD | `00001` (`00`) | **R**:&nbsp;ADD&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Adds R<sub>[s]</sub> and R<sub>[d]</sub> and stores the sum in R<sub>[t]</sub> ignoring carry. |
| ADC | `00001` (`01`) | **R**:&nbsp;ADC&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Adds R<sub>[s]</sub> and R<sub>[d]</sub> and stores the sum in R<sub>[t]</sub> with previous carry. |
| SUB | `00001` (`10`) | **R**:&nbsp;SUB&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Subtracts R<sub>[d]</sub> from R<sub>[s]</sub> and stores the difference in R<sub>[t]</sub> ignoring the previous borrow. |
| SBB | `00001` (`11`) | **R**:&nbsp;SUB&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Subtracts R<sub>[d]</sub> from R<sub>[s]</sub>and stores the difference in R<sub>[t]</sub> with the previous borrow. |
| AND | `00100` | **R**:&nbsp;AND&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Performs Bitwise AND of R<sub>[s]</sub> and R<sub>[d]</sub> and stores the result in R<sub>[t]</sub> |
| OR | `00101` | **R**:&nbsp;OR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Performs Bitwise OR of R<sub>[s]</sub> and R<sub>[d]</sub> and stores the result in R<sub>[t]</sub> |
| XOR | `00110` | **R**:&nbsp;XOR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Performs Bitwise XOR of R<sub>[s]</sub> and R<sub>[d]</sub> and stores the result in R<sub>[t]</sub> |
| NOT | `00111` | **R**:&nbsp;NOT&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Complement of R<sub>[s]</sub> and stores the result in R<sub>[t]</sub> |
| SHL | `01000` | **R**:&nbsp;SHL&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Shifts R<sub>[s]</sub> by one place to the left and store it in R<sub>[t]</sub> |
| SHR | `01001` | **R**:&nbsp;SHR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Shifts R<sub>[s]</sub> by one place to the right and store it in R<sub>[t]</sub> |
| ADDI | `00010` | **I**:&nbsp;ADDI&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Adds a 5-bit unsigned value to R<sub>[s]</sub> and stores the sum in R<sub>[t]</sub> |
| SUBI | `00011` | **I**:&nbsp;SUBI&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Subtracts a 5-bit unsigned value from R<sub>[s]</sub> and stores the difference in R<sub>[t]</sub> |
| MOV | `01010` | **R**:&nbsp;MOV&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Copies R<sub>[s]</sub> to R<sub>[t]</sub> |
| MVIH | `01011` | **S**:&nbsp;MVIH #8 | Copies immediate value into higher byte of R<sub>[t]</sub> |
| MVIL | `01100` | **S**:&nbsp;MVIL #8 | Copies immediate value into lower byte of R<sub>[t]</sub> |
| LDIDR | `10000` | **I**:&nbsp;LDIDR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Loads R<sub>[t]</sub> with the word at address given by [R<sub>[s]</sub> +5 bit immediate value] |
| STIDR | `10001` | **I**:&nbsp;STIDR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Stores R<sub>[t]</sub> at address given by [R<sub>[s]</sub> +5 bit immediate value] |
| LDIDX | `10010` | **R**:&nbsp;LDIDX&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Loads R<sub>[t]</sub> with the word at address given by [R<sub>[s]</sub> + R<sub>[d]</sub>] |
| STIDX | `10011` | **R**:&nbsp;STIDX&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;R<sub>[d]</sub> | Stores R<sub>[t]</sub> at address given by [R<sub>[s]</sub> + R<sub>[d]</sub>] |
| JMP | `10100` | **J**:&nbsp;JMP #11 | Unconditional jump to address offset by 11 bit signed value from current PC value |
| JMPI | `10101` | **S**:&nbsp;JMPI&nbsp;R<sub>[s]</sub>&nbsp;#8 | Unconditional jump to address offset by 8 bit signed value added to R<sub>[s]</sub> |
| JGEO | `10110` | **I**:&nbsp;JGEO&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Conditional Jump to [PC + 5 bit signed offset] if R<sub>[s]</sub> is greater than or equal to R<sub>[t]</sub> |
| JLEO | `10111` | **I**:&nbsp;JLEO&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Conditional Jump to [PC + 5 bit signed offset] if R<sub>[s]</sub> is less than or equal to R<sub>[t]</sub> |
| JCO | `11000` | **I**:&nbsp;JCO #5 | Conditional Jump to [PC + 5 bit signed offset] if carry is set |
| JEO | `11001` | **I**:&nbsp;JEO&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp;#5 | Conditional Jump to [PC + 5 bit signed offset] if R<sub>[s]</sub> equals R<sub>[t]</sub> |
| PUSH | `11010` | **R**:&nbsp;PUSH&nbsp;R<sub>[s]</sub> | Push R<sub>[s]</sub> to the stack top and update stack top |
| POP | `11011` | **R**:&nbsp;POP&nbsp;R<sub>[s]</sub> | Pop from the stack top and store the value to R<sub>[s]</sub> and update stack top |
| CALL | `01101` | **R**:&nbsp;CALL&nbsp;R<sub>[s]</sub> | Calls a subroutine located at [R<sub>[s]</sub>]. Return address is pushed onto stack |
| JAL | `01110` | **J**:&nbsp;JAL #11 | Calls a subroutine located at [PC + 11 bit signed offset]. Return address is pushed onto stack |
| MOVSP | `01111` | **R**:&nbsp;MOVSP&nbsp;R<sub>[s]</sub> | Copies value at R<sub>[s]</sub> to stack pointer SP |
| RET | `11100` | **R**:&nbsp;RET | Return from a function. Return address is popped from the stack |
| STC | `11101` | **R**:&nbsp;STC | Set the carry flag |
| NOP | `11111` | **R**:&nbsp;NOP | No operation. Idle machine cycle should be executed |
| HLT | `00000` | **R**:&nbsp;HLT | Halts the processor |
| RST | `11110` | **R**:&nbsp;RST | Resets the processor |
| IE | `?????` | **R**:&nbsp;IE | Enables the interrupt |
| ID | `?????` | **R**:&nbsp;ID | Disables the interrupt |

## Instruction Formats

### R-Type Instructions
These instructions transfer data from register to register.

There are also R-Type instructions that only specify two, one or no operands at all. In those cases the register addresses of the missing operands are simply left empty.

| B<sub>15-11</sub> | B<sub>10-8</sub> | B<sub>7-5</sub> | B<sub>4-2</sub> | B<sub>1-0</sub> |
|---|---|---|---|---|
| Opcode | Register s | Register t | Register d | Function |

### I-Type Instructions
I-Type Instructions define immediate values to be used for the operation.

| B<sub>15-11</sub> | B<sub>10-8</sub> | B<sub>7-5</sub> | B<sub>4-0</sub> |
|---|---|---|---|
| Opcode | Register s | Register t | Immediate (5-bit) |

### S-Type Instructions
These instructions are very similar to I-type instructions. They specify one register plus an 8-bit immediate value.

| B<sub>15-11</sub> | B<sub>10-8</sub> | B<sub>7-0</sub> |
|---|---|---|
| Opcode | Register s | Immediate (8-bit) |

### J-Type Instructions
These are jump instructions that define 11-bit immediate values.

| B<sub>15-11</sub> | B<sub>10-0</sub>
|---|---|
| Opcode | Immediate (11-bit) |
