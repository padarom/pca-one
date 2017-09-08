# Instruction Set

The instruction set used by PCA One was chosen from the paper *[A 16-bit MIPS Based Instruction Set Architecture for RISC Processor](http://www.ijsrp.org/research-paper-0413/ijsrp-p16126.pdf)* (Bhavsar et al. 2013).

!> Not all instructions listed in the paper are planned to be implemented as they are stated. The most notable difference between the architecture assumed by the researchers and the PCA is RAM addressing. While the paper assumes an architecture where each byte in the CPU can be addressed individually, PCA One uses word-addressing, where only a single 16-bit (2-byte) word can be addressed.

?> This table is a copy of _Table VIII_ of the aforementioned paper, supplemented with some personal remarks.

| Sr. No. | Op&#8209;Code&nbsp;(+&nbsp;Reserved) | Mnemonic | Instruction Format | Description |
|---|---|---|---|---|
| 1. |  `00001` (`01`) | ADD | ADD Rs1, Rs2, Rd | Adds Rs1 and Rs2 and stores the sum in Rd ignoring carry. |
| 2. |  `00001` (`10`) | ADC | ADC Rs1, Rs2, Rd | Adds Rs1 and Rs2 and stores the sum in Rd with previous carry. |
| 3. |  `00010` (`01`) | SUB | SUB Rs1, Rs2, Rd | Subtracts Rs2 from Rs1 and stores the difference in Rd ignoring the previous borrow. |
| 4. |  `00010` (`10`) | SBB | SBB Rs1, Rs2, Rd | Subtracts Rs2 from Rs1and stores the difference in Rd with the previous borrow. |
| 5. |  `00101` | AND | AND Rs1, Rs2, Rd | Performs Bitwise AND of Rs1 and Rs2 and stores the result in Rd |
| 6. |  `00110` | OR | OR Rs1, Rs2, Rd | Performs Bitwise OR of Rs1 and Rs2 and stores the result in Rd |
| 7. |  `00111` | XOR | XOR Rs1, Rs2, Rd | Performs Bitwise XOR of Rs1 and Rs2 and stores the result in Rd |
| 8. |  `01000` | NOT | NOT Rs1, Rd | Performs Complement of Rs1 and stores the result in Rd |
| 9. |  `01001` | SHIFTL | SHIFTL Rs1, Rd | Shifts Rs1 by one place to the left and store it in Rd |
| 10. | `01010` | SHIFTR | SHIFTR Rs1, Rd | Shifts Rs1 by one place to the right and store it in Rd |
| 11. | `00011` | ADDI | ADDI Rs1, Rd, #5-bit | Adds a 5-bit unsigned value to Rs1 and stores the sum in Rd |
| 12. | `00100` | SUBI | SUBI Rs1, Rd, #5-bit | Subtracts a 5-bit unsigned value from Rs1 and stores the difference in Rd |
| 13. | `01011` | MOV | MOV Rs1, Rd | Copies Rs1 to Rd |
| 14. | `01100` | MVIH | MVIH Rd, #8-bit | Copies immediate value into higher byte of Rd |
| 15. | `01101` | MVIL | MVIL Rd, #8-bit | Copies immediate value into lower byte of Rd |
| 16. | `10000` | LDIDR | LDIDR Rs1, Rd, #5-bit | Loads Rd with a nibble at address given by [Rs1 +5 bit immediate value] |
| 17. | `10001` | STIDR | Rs1, Rd, #5-bit | Stores Rd with a nibble at address given by [Rs1 +5 bit immediate value] |
| 18. | `10010` | LDIDX | LDIDX Rs1, Rs2, Rd | Loads Rd with a nibble at address given by [Rs1 + Rs2] |
| 19. | `10011` | STIDX | STIDX Rs1, Rs2, Rd | Stores Rd with a nibble at address given by [Rs1 + Rs2] |
| 20. | `10100` | JMP | JMP #11-bit | Unconditional jump to address offset by 11 bit signed value from current PC value |
| 21. | `10101` | JMPI | JMPI Rd, #5-bit | Unconditional jump to address offset by 5 bit signed value added to Rd |
| 22. | `10110` | JGEO | JGEO Rs1, Rs2, #5-bit | Conditional Jump to PC + 5 bit signed offset if Rs1 is greater than or equal to Rs2 |
| 23. | `10111` | JLEO | JLEO Rs1, Rs2, #5-bit | Conditional Jump to PC + 5 bit signed offset if Rs1 is less than or equal to Rs2 |
| 24. | `11000` | JCO | JCO #5-bit | Conditional Jump to PC + 5 bit signed offset if carry is set |
| 25. | `11001` | JEO | JEO Rs1, Rs2, #5-bit | Conditional Jump to PC + 5 bit signed offset if Rs1 equals to Rs2 |
| 26. | `11010` | PUSH | PUSH Rs1 | Push Rs1 to the stack top and update stack top |
| 27. | `11011` | POP | POP Rd | Pop from the stack top and store the value to Rd and update stack top |
| 28. | `01110` | CALL | Call Rs1 | Calls a subroutine located at [Rs1]. Return address is pushed onto stack |
| 29. | `01111` | JAL | JAL #11-bit | Calls a subroutine located at [PC + 11 bit signed offset]. Return address is pushed onto stack |
| 30. | `?????` | MOVSP | MOVSP Rs1 | Copies value at Rs1 to stack pointer SP|
| 31. | `?????` | RET | RET | Return from a function. Return address is popped from the stack |
| 32. | `?????` | STC | STC | Set the carry flag |
| 33. | `00000` | NOP | NOP | No operation. Idle machine cycle should be executed |
| 34. | `11111` | HLT | HLT | Halts the processor |
| 35. | `?????` | RST | RST | Resets the processor |
| 36. | `?????` | IE | IE | Enables the interrupt |
| 37. | `?????` | ID | ID | Disables the interrupt |
