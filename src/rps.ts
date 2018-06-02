import program from "commander";

import {ReplCommand} from './commands/repl';
import {ExecCommand} from './commands/exec';
import {VersionCommand} from './commands/version';

import {RUN_DESC, RUN_HELP, REPL_DESC, REPL_HELP} from './commands/doc-content';


program
  .option("-v, --version", "output the version number", () =>{
    let v = new VersionCommand();
    console.log(v.getVersions());
  })
  .description(
'******************************************** '+'\n'+
"   ____  ____    ____            _       _"+'\n'+
"  |  _ \\\|  _ \\  / ___|  ___ _ __(_)_ __ | |_ "+'\n'+
"  | |_) | |_) | \\___ \\ / __| '__| | '_ \\| __|"+'\n'+
"  |  _ <|  __/   ___) | (__| |  | | |_) | |_ "+'\n'+
"  |_| \\_\\_|     |____/ \\___|_|  |_| .__/ \\__|"+'\n'+
"                                  |_|         "+'\n'+
'  ******************************************** '
  )
  .usage('[command] [options]');


 program
  .command('run')
  .description(RUN_DESC)
  .on('--help', () => {
    console.log(RUN_HELP)
  })
  .action ((dir, cmd) => {
    let execCom = new ExecCommand();
    execCom.execute();
  });

program
 .command('repl')
 .description(REPL_DESC)
 .on('--help', () => {
   console.log(REPL_HELP)
 })
 .action ((dir, cmd) => {
   let execCom = new ReplCommand();
   execCom.execute();
 });

program.parse(process.argv);

if(process.argv.length < 3)
  program.help();
