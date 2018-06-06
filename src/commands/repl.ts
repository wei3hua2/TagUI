import inquirer from 'inquirer';
import {ChromeEngine} from "../engines/chrome/engine";
import {ParserUtil} from '../utils/ParserUtil';

export class ReplCommand {

  qns = [{type: 'input',name: 'line',message: "=>"}];
  engine:ChromeEngine;


  constructor() {
    this.engine = new ChromeEngine;
  }


  execute() {
    inquirer.prompt(this.qns).then((ans) => {
      ParserUtil.execLine(ans['line'])
        .then((d) => this.execute())
        .catch((err) => {console.error(err);this.execute();} )
    });
  }

}
