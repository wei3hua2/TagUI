import * as fs from 'fs';
import * as shell from 'shelljs';
import {Runner} from "../core/runner";
import {ParserUtil} from '../utils/ParserUtil';

export class ExecCommand {

  runner:Runner;

  constructor() {
    this.runner = new Runner
  }

  validate() {
  }

  execute(filepath:string) {
    ParserUtil.execFile(filepath).then(
      (symTable) => this.runner.run(symTable).then((d)=>console.log('!!!! '+d))
    );
  }


  // async run () : any{
  //   let input = null, output = null;
  //   for(let i =0; i < this.expressions.length;i++){
  //     let expr = this.expressions[i];
  //
  //     try{
  //       output = await expr.execute(input, variables, this.global);
  //       input = output;
  //     }catch(er){
  //       console.error(er);
  //       this.error.push(er);
  //     }
  //   }
  //
  //   return output;
  // }

  readConfig() {
  }
}
