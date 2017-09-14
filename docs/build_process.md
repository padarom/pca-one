# Build Process

I design all schematics and board layouts in Autodesk Eagle. Each component (listed underneath in the menu) belongs on its own board, which are later mounted on a plate and connected via ribbon cables. These carry the main bus between components, as well as power supply (Vcc and GND).

Other control signals are available via header pins and transferred directly via cables to where they are needed.

I currently intend to order my PCBs from pcbway once the design process is completely finished and the board layouts verified.

## Required PCBs
Each bullet point resembles one module on its own PCB.

- Clock
- Register _(likely multiple per board, 4 or 8 in total)_
- Instruction Register + Instruction Decoder
- Memory Address Register + RAM
- Arithmetic Logic Unit + Status Register
- Program Counter
- External interface _(used to allow for peripherals)_
