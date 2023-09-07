import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let colorFrame = randomColor({ hue: argv[2], luminosity: argv[3] });

const hash = '#';
const space = ' ';
const line1 = hash.repeat(31);
const lineMid = hash.repeat(5) + space.repeat(21) + hash.repeat(5);
const lineHex = `#####       ${colorFrame}       #####`;

const createFrame = () => {
  console.log(chalk.hex(colorFrame)(line1 + '\n' + line1 + '\n' + line1));
  console.log(chalk.hex(colorFrame)(lineMid));
  console.log(chalk.hex(colorFrame)(lineHex));
  console.log(chalk.hex(colorFrame)(lineMid));
  console.log(chalk.hex(colorFrame)(line1 + '\n' + line1 + '\n' + line1));
};

createFrame();
