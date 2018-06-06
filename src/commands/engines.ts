import fs from 'fs';
import _ from 'lodash';

import {TaguiCoreEngine} from '../engines/core-engine';

export class EnginesCommand {

  constructor() {
  }

  getDefaultEngine() {

  }

  getAvailableEngine() :string[] {
    return this.readPluginFolders();
  }

  async getEngineList() {
      let engines:TaguiCoreEngine[] = [];
      let folders = this.readPluginFolders();

      for (var val in folders) {
        let EngineObj = await import(`../engines/${folders[val]}/engine`);
        let Engine = Object.values(EngineObj)[0];

        engines.push( new Engine() );
      }

      return engines;
  }

  private readPluginFolders () : string[] {
    let folders = fs.readdirSync('./src/engines');
    return _.filter(folders, f => !f.includes('.') && f !== 'core');
  }
}
