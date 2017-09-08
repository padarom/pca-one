# Control Signals

- `HLT`: Halt; Stops the clock from running
- `Ms`: MAR Set
- `Rs`: RAM Set
- `Re`: RAM Enable (Output to Bus)
- `IRs`: Instruction Register Set
- `IRie`: Instruction Register Enable Immediate Value (Output 5-11 bit value to bus, depending on instruction)
- `IRe`: Instruction Register Enable (Output to Bus)
- `R0s`-`R7s`: General Purpose Register Set
- `R0e`-`R7e`: General Purpose Register Enable (Output to Bus)
- `PCA`: Program Counter Active
- `PCe`: Program Counter Enable (Output to Bus)
- `J`: Jump (Program Counter Set)
- `BUS1`: Set 1 on Bus
- `TMPs`: Temporary ALU Register Set
- `ACCs`: Accumulator Set
- `ACCe`: Accumulator Enable (Output to Bus)

*R7* is directly connected to a 7-segment output.

## Instruction Decoder
The instruction decoder concatenates the opcode and current step number to provide a 16-bit wide output. This is implemented by using two programmed EEPROMs.

#### Notes
- `R0s`-`R7s` and `R0e`-`R7e` are each single outputs (GPR set and GPR enable). This output, in addition to the register address is then multiplexed to create the correct control signal.
