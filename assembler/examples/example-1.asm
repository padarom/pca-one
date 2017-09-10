
JAL ONE
MOV 0,1
JAL TWO
ADD 0,1,7   ; Storing it in 7 enables output

ONE:    ; Store a 1 in R[0]
    XOR 0,0,0
    STC           ; Set the carry flag
    ADC 0,0,0     ; Add 0 + 0 + carry (which we just set to 1)
    RET

TWO:    ; Store a 2 in R[0]
    JAL ONE
    SHL 0,0
    RET
