# Instruction Set

The instruction set used by PCA One is inspired by the MIPS-16 instruction set described in the paper *[A 16-bit MIPS Based Instruction Set Architecture for RISC Processor](http://www.ijsrp.org/research-paper-0413/ijsrp-p16126.pdf)* (Bhavsar et al. 2013).

| Mnemonic | Op&#8209;Code&nbsp;(Mode) | Type&nbsp;&amp;&nbsp;Usage | Description |
|---|---|---|---|
| ADD | `00001` (`00`) | **R**:&nbsp;ADD&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Adds R<sub>[s]</sub> and R<sub>[t]</sub> and stores the sum in R<sub>[s]</sub> ignoring carry. |
| ADC | `00001` (`01`) | **R**:&nbsp;ADC&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Adds R<sub>[s]</sub> and R<sub>[t]</sub> and stores the sum in R<sub>[s]</sub> with previous carry. |
| SUB | `00001` (`10`) | **R**:&nbsp;SUB&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Subtracts R<sub>[t]</sub> from R<sub>[s]</sub> and stores the difference in R<sub>[s]</sub> ignoring the previous borrow. |
| SBB | `00001` (`11`) | **R**:&nbsp;SUB&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Subtracts R<sub>[t]</sub> from R<sub>[s]</sub>and stores the difference in R<sub>[s]</sub> with the previous borrow. |
| AND | `00100` | **R**:&nbsp;AND&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Bitwise AND of R<sub>[s]</sub> and R<sub>[t]</sub> and stores the result in R<sub>[t]</sub> |
| OR | `00101` | **R**:&nbsp;OR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Bitwise OR of R<sub>[s]</sub> and R<sub>[t]</sub> and stores the result in R<sub>[s]</sub> |
| XOR | `00110` | **R**:&nbsp;XOR&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Bitwise XOR of R<sub>[s]</sub> and R<sub>[t]</sub> and stores the result in R<sub>[s]</sub> |
| NOT | `00111` | **R**:&nbsp;NOT&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Complement of R<sub>[s]</sub> and stores the result in R<sub>[s]</sub> |
| SHL | `01000` | **R**:&nbsp;SHL&nbsp;R<sub>[s]</sub> | Shifts R<sub>[s]</sub> by one place to the left and store it in R<sub>[s]</sub> |
| SHR | `01001` | **R**:&nbsp;SHR&nbsp;R<sub>[s]</sub> | Shifts R<sub>[s]</sub> by one place to the right and store it in R<sub>[s]</sub> |
| ADDI | `00010` | **I**:&nbsp;ADDI&nbsp;R<sub>[s]</sub>&nbsp;#8 | Adds a 8-bit unsigned value to R<sub>[s]</sub> and stores the sum in R<sub>[s]</sub> |
| SUBI | `00011` | **I**:&nbsp;SUBI&nbsp;R<sub>[s]</sub>&nbsp;#8 | Subtracts a 5-bit unsigned value from R<sub>[s]</sub> and stores the difference in R<sub>[s]</sub> |
| MOV | `01010` | **R**:&nbsp;MOV&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Copies R<sub>[s]</sub> to R<sub>[t]</sub> |
| MVIH | `01011` | **I**:&nbsp;MVIH&nbsp;R<sub>[s]</sub>&nbsp;#8 | Copies immediate value into higher byte of R<sub>[s]</sub> |
| MVIL | `01100` | **I**:&nbsp;MVIL&nbsp;R<sub>[s]</sub>&nbsp;#8 | Copies immediate value into lower byte of R<sub>[s]</sub> |
| LDIDR | `10000` | **I**:&nbsp;LDIDR&nbsp;R<sub>[s]</sub>&nbsp;#8 | Loads R<sub>[s]</sub> with the word at address given by [R<sub>[6]</sub> + imm] |
| STIDR | `10001` | **I**:&nbsp;STIDR&nbsp;R<sub>[s]</sub>&nbsp;#8 | Stores R<sub>[s]</sub> at address given by [R<sub>[6]</sub> + imm] |
| LDIDX | `10010` | **R**:&nbsp;LDIDX&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp; | Loads R<sub>[t]</sub> with the word at address given by [R<sub>[6]</sub> + R<sub>[s]</sub>] |
| STIDX | `10011` | **R**:&nbsp;STIDX&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp; | Stores R<sub>[t]</sub> at address given by [R<sub>[6]</sub> + R<sub>[s]</sub>] |
| JMP | `10100` | **J**:&nbsp;JMP #11 | Unconditional jump to address offset by 11 bit signed value added to current PC |
| JMPI | `10101` | **I**:&nbsp;JMPI&nbsp;R<sub>[s]</sub>&nbsp;#8 | Unconditional jump to address offset by 8 bit signed value added to R<sub>[s]</sub> |
| CMP | `10110` | **R**:&nbsp;CMP&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Compares R<sub>[s]</sub> and R<sub>[t]</sub> and updated the status register
| JA* | `10111` (`010`) | **I**:&nbsp;JGEO&nbsp;#8 | Conditional Jump to [PC + 8 bit signed offset] if sign offset is not set |
| JAE | `11000` (`110`) | **I**:&nbsp; | |
| JB | `11000` (`110`) | **I**:&nbsp; | |
| JAE | `11000` (`110`) | **I**:&nbsp; | |
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
| OUTA | `?????` (`00000`) | **R**:&nbsp;OUTA&nbsp;R<sub>[s]</sub> | Outputs R<sub>[s]</sub> and sets I/O to output address mode |
| OUTD | `?????` (`00001`) | **R**:&nbsp;OUTD&nbsp;R<sub>[s]</sub> | Outputs R<sub>[s]</sub> and sets I/O to output data mode |
| INA | `?????` (`00010`) | **R**:&nbsp;INA&nbsp;R<sub>[s]</sub> | Reads from I/O device and stores data in R<sub>[s]</sub> (I/O input address mode) |
| IND | `?????` (`00011`) | **R**:&nbsp;IND&nbsp;R<sub>[s]</sub> | Reads from I/O device and stores data in R<sub>[s]</sub> (I/O input data mode) |
| STI | `?????` | **R**:&nbsp;STI | Enables the interrupt flag |
| CLI | `?????` | **R**:&nbsp;CLI | Disables the interrupt flag |

_* Needs to be revisited after instruction set change_

## Instruction Formats

### R-Type Instructions
These instructions transfer data from register to register.

There are also R-Type instructions that specify only one or no operands at all. In those cases the register addresses of the missing operands are simply left empty.

| B<sub>15-10</sub> | B<sub>9-7</sub> | B<sub>6-4</sub> | B<sub>3-0</sub> |
|---|---|---|---|---|
| Opcode | Register s | Register t | Mode |

### I-Type Instructions
I-Type Instructions define 7-bit immediate values to be used for the operation.

| B<sub>15-10</sub> | B<sub>9-7</sub> | B<sub>6-0</sub> |
|---|---|---|---|
| Opcode | Register s | Immediate (7-bit) |

### J-Type Instructions
These are jump instructions that define 10-bit immediate values.

| B<sub>15-10</sub> | B<sub>9-0</sub>
|---|---|
| Opcode | Immediate (10-bit) |
