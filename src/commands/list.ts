import {Command, flags} from '@oclif/command'
import {promises} from "fs";
const BASE_FOLDER = `${process.env.HOME}/code_profiles`;

export default class List extends Command {
  static description = 'List your vscode profiles'

  static examples = [
    `$ vscp list`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    verbose: flags.boolean({char:'v'})
  }

  async run() {
    const files = await promises.readdir(`${BASE_FOLDER}/bin`);
    files.forEach(file => {
        console.log(file);
    });
  }
}
