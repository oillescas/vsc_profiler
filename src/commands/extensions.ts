import {Command, flags} from '@oclif/command'
import { exec } from 'child_process';


export default class Extensions extends Command {
  static description = 'Install extension in your vscode profile'

  static examples = [
    `$ vscp extensions <profile name>`,
    `$ vscp extensions jscode`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    verbose: flags.boolean({char:'v'})
  }


  static args = [{name: 'profile', required: true}];

  async run() {
    const {args} = this.parse(Extensions);

    const profile = args.profile;
    const extensions = [
      'vscode-icons-team.vscode-icons'
    ];
    await Promise.all(
      extensions.map(extension => {
        return new Promise((resolve, reject) => {
          exec(`${profile} --install-extension ${extension}`, (err, stdout, stderr) => {
            if (err) {
              console.error(err);
              reject(err);
            }
            console.log(stdout);
            resolve(stdout);
          }
          );
        });
      })
    );
  }
}
