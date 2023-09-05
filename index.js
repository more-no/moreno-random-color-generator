import { argv } from 'node:process';
import chalk from 'chalk';
import { randomHexColor } from 'random-hex-color-generator';

let colorFrame = randomHexColor();

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

if (argv.length === 3) {
  //  colorFrame = ??? (argv[2]);         converter missing
  createFrame();
} else if (argv.length < 3) {
  createFrame();
} else if (argv.length === 4) {
  if (argv[3] === 'light') {
    colorFrame = `${argv[2] + 'Bright'}`;
  } else if (argv[3] === 'dark') {
    colorFrame = argv[2];
  }
}
