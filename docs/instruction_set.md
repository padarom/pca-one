# Instruction Set

The instruction set used by PCA One is inspired by the MIPS-16 instruction set described in the paper *[A 16-bit MIPS Based Instruction Set Architecture for RISC Processor](http://www.ijsrp.org/research-paper-0413/ijsrp-p16126.pdf)* (Bhavsar et al. 2013).

| Mnemonic | Op&#8209;Code&nbsp;(Mode) | Type&nbsp;&amp;&nbsp;Usage | Description |
|---|---|---|---|
| add | `00001`&nbsp;(`00`) | **R**:&nbsp;add&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Adds R<sub>[s]</sub> and R<sub>[t]</sub> and stores the sum in R<sub>[s]</sub> ignoring carry. |
| adc | `00001`&nbsp;(`01`) | **R**:&nbsp;adc&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Adds R<sub>[s]</sub> and R<sub>[t]</sub> and stores the sum in R<sub>[s]</sub> with previous carry. |
| sub | `00001`&nbsp;(`10`) | **R**:&nbsp;sub&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Subtracts R<sub>[t]</sub> from R<sub>[s]</sub> and stores the difference in R<sub>[s]</sub> ignoring the previous borrow. |
| sbb | `00001`&nbsp;(`11`) | **R**:&nbsp;sbb&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Subtracts R<sub>[t]</sub> from R<sub>[s]</sub>and stores the difference in R<sub>[s]</sub> with the previous borrow. |
| addi | `00010` | **I**:&nbsp;addi&nbsp;R<sub>[s]</sub>&nbsp;#8 | Adds a 8-bit unsigned value to R<sub>[s]</sub> and stores the sum in R<sub>[s]</sub> |
| subi | `00011` | **I**:&nbsp;subi&nbsp;R<sub>[s]</sub>&nbsp;#8 | Subtracts a 8-bit unsigned value from R<sub>[s]</sub> and stores the difference in R<sub>[s]</sub> |
| and | `00100` | **R**:&nbsp;and&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Bitwise AND of R<sub>[s]</sub> and R<sub>[t]</sub> and stores the result in R<sub>[t]</sub> |
| or | `00101` | **R**:&nbsp;or&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Bitwise OR of R<sub>[s]</sub> and R<sub>[t]</sub> and stores the result in R<sub>[s]</sub> |
| xor | `00110` | **R**:&nbsp;xor&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Bitwise XOR of R<sub>[s]</sub> and R<sub>[t]</sub> and stores the result in R<sub>[s]</sub> |
| not | `00111` | **R**:&nbsp;not&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Performs Complement of R<sub>[s]</sub> and stores the result in R<sub>[s]</sub> |
| shl | `01000` | **R**:&nbsp;shl&nbsp;R<sub>[s]</sub> | Shifts R<sub>[s]</sub> by one place to the left and store it in R<sub>[s]</sub> |
| shr | `01001` | **R**:&nbsp;shr&nbsp;R<sub>[s]</sub> | Shifts R<sub>[s]</sub> by one place to the right and store it in R<sub>[s]</sub> |
| mvih | `01010` | **I**:&nbsp;mvih&nbsp;R<sub>[s]</sub>&nbsp;#8 | Copies immediate value into higher byte of R<sub>[s]</sub> |
| mvil | `01011` | **I**:&nbsp;mvil&nbsp;R<sub>[s]</sub>&nbsp;#8 | Copies immediate value into lower byte of R<sub>[s]</sub> |
| mov | `10000` | **R**:&nbsp;mov&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub> | Copies R<sub>[s]</sub> to R<sub>[t]</sub> |
| ldidr | `01100` | **I**:&nbsp;ldidr&nbsp;R<sub>[s]</sub>&nbsp;#8 | Loads R<sub>[s]</sub> with the word at address given by [R<sub>[6]</sub> + imm] |
| stidr | `01101` | **I**:&nbsp;stidr&nbsp;R<sub>[s]</sub>&nbsp;#8 | Stores R<sub>[s]</sub> at address given by [R<sub>[6]</sub> + imm] |
| ldidx | `01110` | **R**:&nbsp;ldidx&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp; | Loads R<sub>[t]</sub> with the word at address given by [R<sub>[6]</sub> + R<sub>[s]</sub>] |
| stidx | `01111` | **R**:&nbsp;stidx&nbsp;R<sub>[s]</sub>&nbsp;R<sub>[t]</sub>&nbsp; | Stores R<sub>[t]</sub> at address given by [R<sub>[6]</sub> + R<sub>[s]</sub>] |
| jmp | `10001` | **J**:&nbsp;jmp #11 | Unconditional jump to address offset by 11 bit signed value added to current PC |
| jmpi | `10010` | **I**:&nbsp;jmpi&nbsp;R<sub>[s]</sub>&nbsp;#8 | Unconditional jump to address offset by 8 bit signed value added to R<sub>[s]</sub> |
| jz | `10011` | **J**:&nbsp;jz&nbsp;#11 | Conditional Jump to [PC + 11 bit signed offset] if zero flag is set |
| jc | `10100` | **J**:&nbsp;jc&nbsp;#11 | Conditional Jump to [PC + 11 bit signed offset] if carry flag is set |
| js | `10101` | **J**:&nbsp;js&nbsp;#11 | Conditional Jump to [PC + 11 bit signed offset] if sign flag is set |
| push | `10110` | **R**:&nbsp;push&nbsp;R<sub>[s]</sub> | Push R<sub>[s]</sub> to the stack top and update stack top |
| pop | `10111` | **R**:&nbsp;pop&nbsp;R<sub>[s]</sub> | Pop from the stack top and store the value to R<sub>[s]</sub> and update stack top |
| jal | `11100` | **J**:&nbsp;jal #11 | Calls a subroutine located at [PC + 11 bit signed offset]. Return address is pushed onto stack |
| ret | `11101` | **R**:&nbsp;rel | Return from a function. Return address is popped from the stack |
| stc | `11110` | **R**:&nbsp;stc | Set the carry flag |
| hlt | `00000` | **R**:&nbsp;hlt | Halts the processor |
| rst | `11011` | **R**:&nbsp;rst | Resets the processor |
| nop | `11111` | **R**:&nbsp;nop | No operation. Performs an empty clock cycle. |
| outa | `11000` (`00`) | **R**:&nbsp;outa&nbsp;R<sub>[s]</sub> | Outputs R<sub>[s]</sub> and sets I/O to output address mode |
| outd | `11000` (`01`) | **R**:&nbsp;outd&nbsp;R<sub>[s]</sub> | Outputs R<sub>[s]</sub> and sets I/O to output data mode |
| ina | `11001` (`00`) | **R**:&nbsp;ina&nbsp;R<sub>[s]</sub> | Reads from I/O device and stores data in R<sub>[s]</sub> (I/O input address mode) |
| ind | `11001` (`01`) | **R**:&nbsp;ind&nbsp;R<sub>[s]</sub> | Reads from I/O device and stores data in R<sub>[s]</sub> (I/O input data mode) |
| sti | `11010` (`01`) | **R**:&nbsp;sti | Enables the interrupt flag |
| cli | `11010` (`00`) | **R**:&nbsp;cli | Disables the interrupt flag |

## Instruction Formats

### R-Type Instructions
These instructions transfer data from register to register.

There are also R-Type instructions that specify only one or no operands at all. In those cases the register addresses of the missing operands are simply left empty.

| B<sub>15-11</sub> | B<sub>10-8</sub> | B<sub>7-5</sub> | B<sub>4-0</sub> |
|---|---|---|---|---|
| Opcode | Register s | Register t | Mode |

### I-Type Instructions
I-Type Instructions define 8-bit immediate values to be used for the operation.

| B<sub>15-11</sub> | B<sub>10-8</sub> | B<sub>7-0</sub> |
|---|---|---|---|
| Opcode | Register s | Immediate (8-bit) |

### J-Type Instructions
These are jump instructions that define 11-bit immediate values.

| B<sub>15-11</sub> | B<sub>10-0</sub>
|---|---|
| Opcode | Immediate (11-bit) |
