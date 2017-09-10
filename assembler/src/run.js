import program from 'commander';
import chalk from 'chalk';
import async from 'async';
import fs from 'fs';

import Assembler from './assembler';

import { StringDecoder } from 'string_decoder';
const decoder = new StringDecoder('utf8');

program
    .version('0.1.0')
    .usage('[options] <file ...>')
    .option('-o, --output [name]', 'The name of the generated object file')
    .option('-l, --listing', 'Generate a listing for the generated object file')
    .parse(process.argv);

if (program.args.length == 0) {
    console.log(chalk.red('Please specify at least one input file.'));
    process.exit(1);
}

async.map(program.args, fs.readFile, function (err, content) {
    if (err) {
        console.log(chalk.red(err.path + ' could not be read.'));
        process.exit(1);
    }

    for (var [index, code] of content.entries()) {
        let assembler = new Assembler(decoder.write(code));
        let result = assembler.run();

        /*
        let destination = program.args[index] + '.o';
        fs.writeFile(destination, result, err => {
            if (err) throw err;
            console.log(chalk.green('Object file written to ' + destination));
        });
        */
    }
});
