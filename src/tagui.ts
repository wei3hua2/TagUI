import * as fs from 'fs';
import _ from 'lodash';
import {CLIUtil, TaguiParams} from './cli/CLIUtil';
import {TaguiCoreEngine} from "./plugins/core-engine";
//
// import * from "./plugins/chrome/engine";
// import * from "./plugins/python/engine";
// import * from "./plugins/r/engine";
// import * from "./plugins/sikuli/engine";

// let chrome_command = "google-chrome";
// let initial_dir = "pwd"


async function start () {
  // console.log( CLIUtil.getHeaderContent() );
  try {

    // ***************** SET UP **************************

    let tParams:TaguiParams = TaguiParams.parseProcessParam( process.argv );

    let engines = await getAllEngines();

    engines.forEach(e => e.setup());

    engines.forEach(e => e.execute());

    engines.forEach(e => e.teardown());

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

async function getAllEngines (){
  let engines:TaguiCoreEngine[] = [];
  let folders = readPluginFolders();

  for (var val in folders) {
    let EngineObj = await import(`./plugins/${folders[val]}/engine`);
    let Engine = Object.values(EngineObj)[0];

    engines.push( new Engine );
  }

  return engines;
}

function readPluginFolders () : string[] {
  let folders = fs.readdirSync('./src/plugins');
  return _.filter(folders, f => !f.includes('.') && f !== 'core');
}

function execute () {

  sleepIfNecessary(); //check flag and is it the first item

  parseDSLFile();
}

function sleepIfNecessary(){}
function parseDSLFile(){}


start();
