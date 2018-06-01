import * as fs from 'fs';
import _ from 'lodash';
import {Deferred} from "ts-deferred";
import {CLIUtil, TaguiParams} from './cli/CLIUtil';
import {TaguiCoreEngine} from "./plugins/core-engine";
//
import {ChromeEngine} from "./plugins/chrome/engine";
// import * from "./plugins/python/engine";
// import * from "./plugins/r/engine";
// import * from "./plugins/sikuli/engine";

// let chrome_command = "google-chrome";
// let initial_dir = "pwd"

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import {INTENTSParser} from './intents/basic/INTENTSParser';
import {INTENTSLexer} from './intents/basic/INTENTSLexer';

import {IntentsMainListener} from './plugins/IntentsBasicListener';

async function start () {
  // console.log( CLIUtil.getHeaderContent() );
  try {

    // ***************** SET UP **************************

    let tParams:TaguiParams = TaguiParams.parseProcessParam( process.argv );

    let scriptLines:string[] = tParams.getFileContent();

    // console.log(scriptLines);

    let engines = await getAllAvailableEngines();
    // console.log(engines);
    // engines.forEach(e => e.setup());
    //

    for(let i =0; i < scriptLines.length;i++){
      console.log('-- '+scriptLines[i]+' --');
      let result = await execScriptLine(scriptLines[i], engines[0]);
      console.log('result : '+result);
    }

    //
    // engines.forEach(e => e.teardown());

    // ******************** EXECUTION ************************

    // iterate dataset
    //1. generate dataset, iterate dataset, execute

    // execute();

  }catch(err){

    if("filename not found".match(err.message))
      console.log( CLIUtil.getHeaderContent() );
    else
      console.error(err);
  }
}

function generateDataset () {
  // php -q tagui_parse.php "$1" | tee -a "$1".log
  // if [ -s "$1".log ] && [ "$tagui_data_set" -eq 1 ]
  //   then echo "ERROR - automation aborted due to above" | tee -a "$1".log; tagui_error_code=1; break; fi
}

async function getAllAvailableEngines (){
  let engines:TaguiCoreEngine[] = [];
  // let folders = readPluginFolders();

  // for (var val in folders) {
  //   let EngineObj = await import(`./plugins/${folders[val]}/engine`);
  //   let Engine = Object.values(EngineObj)[0];
  //
  //   engines.push( new Engine );
  // }

  engines.push(new ChromeEngine);

  return engines;
}

function readPluginFolders () : string[] {
  let folders = fs.readdirSync('./src/plugins');
  return _.filter(folders, f => !f.includes('.') && f !== 'core');
}



function execScriptLine(line, runner):Promise<any> {
  let inputStream = new ANTLRInputStream(line);
  let tokenStream = new CommonTokenStream( new INTENTSLexer(inputStream) );
  let parser = new INTENTSParser(tokenStream);

  let tree = parser.all();
  let d = new Deferred<any>();

  let intentListener = new IntentsMainListener(runner,d);

  ParseTreeWalker.DEFAULT.walk(intentListener, tree);

  return d.promise;
}

start();
