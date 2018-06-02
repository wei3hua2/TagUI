import inquirer from 'inquirer';
import {ChromeEngine} from "../plugins/engines/chrome/engine";
import {EngineUtil} from '../utils/EngineUtil';

export class ReplCommand {

  qns = [{type: 'input',name: 'line',message: "=>"}];
  engine:ChromeEngine;


  constructor() {
    this.engine = new ChromeEngine;
  }


  execute() {
    inquirer.prompt(this.qns).then((ans) => {
      console.log(ans);
      EngineUtil.execScriptLine(ans['line'], this.engine).then((d) => this.execute());
    });
  }

}
