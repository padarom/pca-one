# Instruction Set

Using a MIPS-16 Instruction Set: http://www.ijsrp.org/research-paper-0413/ijsrp-p16126.pdf

| Sr. No. | Op-Code (+ Reserved) | Mnemonic | Instruction Format | Description |
|---|---|---|---|---|
| 1. |  `00001` (`01`) | ADD | ADD Rs1, Rs2, Rd | |
| 2. |  `00001` (`10`) | ADC | ADC Rs1, Rs2, Rd | |
| 3. |  `00010` (`01`) | SUB | SUB Rs1, Rs2, Rd | |
| 4. |  `00010` (`10`) | SBB | SBB Rs1, Rs2, Rd | |
| 5. |  `00101` | AND | AND Rs1, Rs2, Rd | |
| 6. |  `00110` | OR | OR Rs1, Rs2, Rd | |
| 7. |  `00111` | XOR | XOR Rs1, Rs2, Rd | |
| 8. |  `01000` | NOT | NOT Rs1, Rd | |
| 9. |  `01001` | SHIFTL | SHIFTL Rs1, Rd | |
| 10. | `01010` | SHIFTR | SHIFTR Rs1, Rd | |
| 11. | `00011` | ADDI | ADDI Rs1, Rd, #5-bit | |
| 12. | `00100` | SUBI | SUBI Rs1, Rd, #5-bit | |
| 13. | `01011` | MOV | MOV Rs1, Rd | |
| 14. | `01100` | MVIH | MVIH Rd, #8-bit | |
| 15. | `01101` | MVIL | MVIL Rd, #8-bit | |
| 16. | `10000` | LDIDR | LDIDR Rs1, Rd, #5-bit | |
| 17. | `10001` | STIDR | Rs1, Rd, #5-bit | |
| 18. | `10010` | LDIDX | LDIDX Rs1, Rs2, Rd | |
| 19. | `10011` | STIDX | STIDX Rs1, Rs2, Rd | |
| 20. | `10100` | JMP | JMP #11-bit | |
| 21. | `10101` | JMPI | JMPI Rd, #5-bit | |
| 22. | `10110` | JGEO | JGEO Rs1, Rs2, #5-bit | |
| 23. | `10111` | JLEO | JLEO Rs1, Rs2, #5-bit | |
| 24. | `11000` | JCO | JCO #5-bit | |
| 25. | `11001` | JEO | JEO Rs1, Rs2, #5-bit | |
| 26. | `11010` | PUSH | PUSH Rs1 | |
| 27. | `11011` | POP | POP Rd | |
| 28. | `01110` | CALL | Call Rs1 | |
| 29. | `01111` | JAL | JAL #11-bit | |
| 30. | `?????` | MOVSP | MOVSP Rs1 | |
| 31. | `?????` | RET | RET | |
| 32. | `?????` | STC | STC | |
| 33. | `00000` | NOP | NOP | |
| 34. | `11111` | HLT | HLT | |
| 35. | `?????` | RST | RST | |
| 36. | `?????` | IE | IE | |
| 37. | `?????` | ID | ID | |
