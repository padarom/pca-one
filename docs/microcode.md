# Microcode

?> All operations are preceded by the following two steps to fetch the next instruction from RAM and store it in the instruction register.

1. `PCe Ms`
2. `Re IRs PCA`

***

## 1/2. `ADD`/`ADC` (5 steps)
*The reserved bits at the end of the instruction instruct the ALU to use the carry flag or ignore it*
1. `R(Rs1)e TMPe`
2. `R(Rs2)e OPadd ACCs`
3. `ACCe R(Rd)s`

## 13. `MOV` (3 steps)
1. `R(Rs1)e R(Rd)s`

## 16. `LDIDR` (6 steps)
*The paper by Sagar Bhavsar et.al. specifies this instruction as loading a nibble from RAM. Instead, we're loading a whole word.*
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
