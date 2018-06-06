import {RpsConfig} from './config';
import {EngineUtil} from '../utils/EngineUtil';
import {RpsContext} from '../antlr/RpsSymTable';
import * as chromeExpr from '../engines/chrome/expressions';

import _ from 'lodash';

export class Runner {
  config:RpsConfig;
  engine:any;

  constructor(){
    this.config = new RpsConfig();
  }

  async run(symTable:RpsContext) {
    this.engine = await EngineUtil.getEngine(this.config.engine);
    let expressions = symTable.currentScope.expressions;
    console.log(expressions);

    for (var val in expressions) {
      let fnSymbol = expressions[val];

      let expr = this.instantiateExpression(fnSymbol.name);
      if(expr) expr.execute(expressions[val]);
    }
  }

  instantiateExpression (expressionName:string) {
    let key = _.findKey(chromeExpr, (exp) => { return expressionName.trim() === exp.NAME });
    if(key) return new chromeExpr[key](this.engine);
    else return null;
  }

}
