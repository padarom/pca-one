# PCA One

PCA One is short for **Padarom Computer Architecture _Type 1_**.

### Specification
- 16 bit word length
- up to 64K words RAM _(implementation provides 32K words)_
- single 16 bit bus _(for address + data)_
- Registers _(all registers are 16 bit unless otherwise specified)_:
  - 8 general purpose registers _(register 7 is connected to a 7-segment output)_
  - accumulator
  - program counter
  - stack pointer (8 bit) - _preceeded by a constant 01<sub>16</sub> byte to allow for a 256 byte long stack from 0100<sub>16</sub> to 01FF<sub>16</sub>_

### Programming
Programming a 16-bit computer by hand (as in manually entering every single bit into every single address of the RAM) is going to be quite tedious. As such the PCA One is going to include a programming interface built with a WiFi-enabled Arduino to allow me to write assembly code on my computer and direct the arduino to write the compiled program directly to RAM.

At the same time it is possible to manually put data into the RAM and step through the execution manually.

### How this project came to be
I've been fascinated with digital electronics and computers forever, but besides a couple of smaller arduino based projects I haven't done a lot of electronics in my spare time. Instead I've been a programmer for almost a decade, telling already built computers what they're supposed to do.

Intrigued by how those machines actually work on a hardware level I found the book "But How Do It Know" by J Clark Scott, which provides an excellent introduction into the way computers work. It has been two years after reading the book that I stumbled across some of Ben Eater's videos and realized that although it's an incredibly comprehensive topic, it's not all that hard to get started with.

So I looked up a list of all components Ben used in his 8-bit computer series and bought all of them with a bunch of spare ones.

While building my clock module - it was Ben Eater's video on that which made me realize I wanted to build a computer myself - I thought that even though it's nice to have a self-built 8-bit computer, it can't do terribly much. After some consideration I decided on building a 16-bit computer instead.
