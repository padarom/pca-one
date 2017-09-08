# Instruction Set

The instruction set used by PCA One was chosen from the paper *[A 16-bit MIPS Based Instruction Set Architecture for RISC Processor](http://www.ijsrp.org/research-paper-0413/ijsrp-p16126.pdf)* (Bhavsar et al. 2013).

!> Not all instructions listed in the paper are planned to be implemented as they are stated. The most notable difference between the architecture assumed by the researchers and the PCA is RAM addressing. While the paper assumes an architecture where each byte in the CPU can be addressed individually, PCA One uses woR<sub>d</sub>-addressing, where only a single 16-bit (2-byte) woR<sub>d</sub> can be addressed.

?> This table is a copy of _Table VIII_ of the aforementioned paper, supplemented with some personal remarks.

| Sr. No. | Op&#8209;Code&nbsp;(+&nbsp;Reserved) | Mnemonic | Instruction Format | Description |
|---|---|---|---|---|
| 1. |  `00001` (`00`) | ADD | ADD R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Adds R<sub>s1</sub> and R<sub>s2</sub> and stores the sum in R<sub>d</sub> ignoring carry. |
| 2. |  `00001` (`01`) | ADC | ADC R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Adds R<sub>s1</sub> and R<sub>s2</sub> and stores the sum in R<sub>d</sub> with previous carry. |
| 3. |  `00001` (`10`) | SUB | SUB R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Subtracts R<sub>s2</sub> from R<sub>s1</sub> and stores the difference in R<sub>d</sub> ignoring the previous borrow. |
| 4. |  `00001` (`11`) | SBB | SBB R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Subtracts R<sub>s2</sub> from R<sub>s1</sub>and stores the difference in R<sub>d</sub> with the previous borrow. |
| 5. |  `00100` | AND | AND R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Performs Bitwise AND of R<sub>s1</sub> and R<sub>s2</sub> and stores the result in R<sub>d</sub> |
| 6. |  `00101` | OR | OR R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Performs Bitwise OR of R<sub>s1</sub> and R<sub>s2</sub> and stores the result in R<sub>d</sub> |
| 7. |  `00110` | XOR | XOR R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Performs Bitwise XOR of R<sub>s1</sub> and R<sub>s2</sub> and stores the result in R<sub>d</sub> |
| 8. |  `00111` | NOT | NOT R<sub>s1</sub>, R<sub>d</sub> | Performs Complement of R<sub>s1</sub> and stores the result in R<sub>d</sub> |
| 9. |  `01000` | SHIFTL | SHIFTL R<sub>s1</sub>, R<sub>d</sub> | Shifts R<sub>s1</sub> by one place to the left and store it in R<sub>d</sub> |
| 10. | `01001` | SHIFTR | SHIFTR R<sub>s1</sub>, R<sub>d</sub> | Shifts R<sub>s1</sub> by one place to the right and store it in R<sub>d</sub> |
| 11. | `00010` | ADDI | ADDI R<sub>s1</sub>, R<sub>d</sub>, #5-bit | Adds a 5-bit unsigned value to R<sub>s1</sub> and stores the sum in R<sub>d</sub> |
| 12. | `00011` | SUBI | SUBI R<sub>s1</sub>, R<sub>d</sub>, #5-bit | Subtracts a 5-bit unsigned value from R<sub>s1</sub> and stores the difference in R<sub>d</sub> |
| 13. | `01010` | MOV | MOV R<sub>s1</sub>, R<sub>d</sub> | Copies R<sub>s1</sub> to R<sub>d</sub> |
| 14. | `01011` | MVIH | MVIH R<sub>d</sub>, #8-bit | Copies immediate value into higher byte of R<sub>d</sub> |
| 15. | `01100` | MVIL | MVIL R<sub>d</sub>, #8-bit | Copies immediate value into lower byte of R<sub>d</sub> |
| 16. | `10000` | LDIDR | LDIDR R<sub>s1</sub>, R<sub>d</sub>, #5-bit | Loads R<sub>d</sub> with a nibble at address given by [R<sub>s1</sub> +5 bit immediate value] |
| 17. | `10001` | STIDR | R<sub>s1</sub>, R<sub>d</sub>, #5-bit | Stores R<sub>d</sub> with a nibble at address given by [R<sub>s1</sub> +5 bit immediate value] |
| 18. | `10010` | LDIDX | LDIDX R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Loads R<sub>d</sub> with a nibble at address given by [R<sub>s1</sub> + R<sub>s2</sub>] |
| 19. | `10011` | STIDX | STIDX R<sub>s1</sub>, R<sub>s2</sub>, R<sub>d</sub> | Stores R<sub>d</sub> with a nibble at address given by [R<sub>s1</sub> + R<sub>s2</sub>] |
| 20. | `10100` | JMP | JMP #11-bit | Unconditional jump to address offset by 11 bit signed value from current PC value |
| 21. | `10101` | JMPI | JMPI R<sub>d</sub>, #5-bit | Unconditional jump to address offset by 5 bit signed value added to R<sub>d</sub> |
| 22. | `10110` | JGEO | JGEO R<sub>s1</sub>, R<sub>s2</sub>, #5-bit | Conditional Jump to PC + 5 bit signed offset if R<sub>s1</sub> is greater than or equal to R<sub>s2</sub> |
| 23. | `10111` | JLEO | JLEO R<sub>s1</sub>, R<sub>s2</sub>, #5-bit | Conditional Jump to PC + 5 bit signed offset if R<sub>s1</sub> is less than or equal to R<sub>s2</sub> |
| 24. | `11000` | JCO | JCO #5-bit | Conditional Jump to PC + 5 bit signed offset if carry is set |
| 25. | `11001` | JEO | JEO R<sub>s1</sub>, R<sub>s2</sub>, #5-bit | Conditional Jump to PC + 5 bit signed offset if R<sub>s1</sub> equals to R<sub>s2</sub> |
| 26. | `11010` | PUSH | PUSH R<sub>s1</sub> | Push R<sub>s1</sub> to the stack top and update stack top |
| 27. | `11011` | POP | POP R<sub>d</sub> | Pop from the stack top and store the value to R<sub>d</sub> and update stack top |
| 28. | `01101` | CALL | Call R<sub>s1</sub> | Calls a subroutine located at [R<sub>s1</sub>]. Return address is pushed onto stack |
| 29. | `01110` | JAL | JAL #11-bit | Calls a subroutine located at [PC + 11 bit signed offset]. Return address is pushed onto stack |
| 30. | `01111` | MOVSP | MOVSP R<sub>s1</sub> | Copies value at R<sub>s1</sub> to stack pointer SP|
| 31. | `11100` | RET | RET | Return from a function. Return address is popped from the stack |
| 32. | `11101` | STC | STC | Set the carry flag |
| 33. | `00000` | NOP | NOP | No operation. Idle machine cycle should be executed |
| 34. | `11111` | HLT | HLT | Halts the processor |
| 35. | `11110` | RST | RST | Resets the processor |
| 36. | `?????` | IE | IE | Enables the interrupt |
| 37. | `?????` | ID | ID | Disables the interrupt |
