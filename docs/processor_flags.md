# Processor Flags

Processor flags are stored within an 8 bit status register.

```
  # of Bit   7 6 5 4 3 2 1 0
  Usage      C Z 0 0 0 0 0 0
```

- **`C` Carry**  
The carry flag can either be set manually or is automatically set upon finishing execution of either an addition/subtraction or bitwise shift.
- **`Z` Zero**  
The zero flag is set if all resulting bits of the last operation equal 0.
- **`0` Reserved**  
Reserved for potential later use, or intentionally left unassigned
