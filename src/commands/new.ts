import {Command, flags} from '@oclif/command'
import {existsSync, promises} from "fs";
import { USER_TEMPLATE } from '../templates/USER_TEMPLATE';


const BASE_FOLDER = `${process.env.HOME}/code_profiles`;
export default class NewProfile extends Command {
  static description = 'create new profile of vs code'

  static examples = [
    `$ vscp new <profile name>`,
    `$ vscp new jscode`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    verbose: flags.boolean({char:'v'})
  }

  static args = [{name: 'profile', required: true}];

  async run() {
    const {args} = this.parse(NewProfile);

    if (!existsSync(BASE_FOLDER)) {
      return this.error('vscp no se ha inicializado');
    }

    const {profile} = args;

    await this.createProfileFolders(profile);
    await this.createUserDefaultConfig(profile);
    await this.createBinary(profile);

    this.log(`type ${profile} for open vs with new profile`);
  }

  async createBinary(profile: String) {
    const command = `#!/bin/bash
    code --user-data-dir ~/code_profiles/${profile}/data --extensions-dir ~/code_profiles/${profile}/extensions $@`;
    await promises.writeFile(`${BASE_FOLDER}/bin/${profile}`, command,{mode:0o755});
  }

  async createUserDefaultConfig(profile:String) {
    USER_TEMPLATE["window.title"] = `🖥   ${profile} - 🚀  - ${USER_TEMPLATE["window.title"]}`
    await promises.writeFile(`${BASE_FOLDER}/${profile}/data/User/settings.json`, JSON.stringify(USER_TEMPLATE));
  }

  async createProfileFolders(profile:String) {
    await promises.mkdir(`${BASE_FOLDER}/${profile}`);
    await promises.mkdir(`${BASE_FOLDER}/${profile}/data`);
    await promises.mkdir(`${BASE_FOLDER}/${profile}/data/User`);
    await promises.mkdir(`${BASE_FOLDER}/${profile}/extensions`);
  }
}
