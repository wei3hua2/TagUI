import fs from 'fs';
import _ from 'lodash';

import {TaguiCoreEngine} from '../engines/core-engine';
import {EngineUtil} from '../utils/EngineUtil';
import {RpsParser} from '../antlr/grammar/RpsParser';

export class KeywordsCommand {

  constructor() {
  }

  async getAvailableKeywords() {
    let ruleNames = RpsParser.ruleNames;
    let enginesList = await EngineUtil.getEngineList();

    return _.map(ruleNames, (ruleName) => {
      let availableEngine =
        _(enginesList).filter((engine) => !!engine.execute()[ruleName])
                      .map('name').value();

      return [ruleName, availableEngine];
    })

  }
}
