# Padaroms Computer Architecture

PCA One is short for **Padarom Computer Architecture _Type 1_**. It's an open source 16-bit computer architecture I'm creating for fun and includes software I'm developing for it, such as an assembler and a loader.

View the complete documentation and description on [pca.padarom.io](https://pca.padarom.io)

### Specification
- RISC ISA
- 16 bit word length
- up to 64K words RAM _(implementation provides 32K words)_
- single 16 bit bus _(for address + data)_
- Registers _(all registers are 16 bit unless otherwise specified)_:
  - 8 general purpose registers _(register 7 is connected to a 7-segment output)_
  - accumulator
  - program counter
  - stack pointer (8 bit) - _preceeded by a constant 01<sub>16</sub> byte to allow for a 256 byte long stack from 0100<sub>16</sub> to 01FF<sub>16</sub>_
