# Microcode

All operations are preceded by the following two steps to fetch the next instruction from RAM and store it in the instruction register.

1. `PCe Ms`
2. `Re IRs PCA`

***

## 1-4. `ADD`/`ADC`/`SUB`/`SBB` (5 steps)
1. `R(Rs1)e TMPe`
2. `R(Rs2)e OPadd ACCs`
3. `ACCe R(Rd)s`

?> The reserved bits in this instruction are **S**ubtract and **C**arry. The `C` bit denotes whether or not to add the existing carry out (co) as carry in (ci), whereas the `S` bit inverts the second input, effectively subtracting.

!> Keep in mind that PCA One uses Subtract with borrow, not Subtract with carry. As such, the carry in can be calculated as follows:  
**ci = (&not;S &and; (C &and; co)) &or; (S &and; &not;(C &and; co))**

## 13. `MOV` (3 steps)
1. `R(Rs1)e R(Rd)s`

## 16. `LDIDR` (6 steps)
1. `R(Rs1)e TMPe`
2. `IRie OPadd ACCs`
3. `ACCe Ms`
4. `Re R(Rd)e`

## 17. `STIDR` (6 steps)
*See note in 16.*
1. `R(Rs1)e TMPe`
2. `IRie OPadd ACCs`
3. `ACCe Ms`
4. `R(Rd)e Rs`

## 20. `JMP` (5 steps)
1. `PCe TMPs`
2. `IRie OPadd ACCs`
3. `ACCe PCs J`

## 21. `JMPI` (5 steps)
1. `R(Rs1)e TMPs`
2. `IRie OPadd ACCs`
3. `ACCe PCs J`
