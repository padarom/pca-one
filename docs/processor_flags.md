# Processor Flags

Processor flags are stored within an 8 bit status register. Every time the accumulator is set, the status register is set as well.

```
  # of Bit   7 6 5 4 3 2 1 0
  Usage      C Z N O R R R R
```

- **`C` Carry**  
The carry flag can either be set manually or is automatically set upon finishing execution of either an addition/subtraction or bitwise shift.
- **`O` Overflow**  
Overflow occurs if the sign of the result of an ADD/SUB operation is different to the sign of the inputs. It is also set during logical operations but has no well-defined meaning in those cases.
- **`N` Negative**  
Is set to be the left-most bit of the result and indicates the sign.
- **`Z` Zero**  
The zero flag is set if all resulting bits of the last operation equal 0.
- **`R` Reserved**  
Either reserved for potential later use or intentionally left unassigned.
