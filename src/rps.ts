import program from "commander";
import Table from "cli-table";
import _ from 'lodash';

import {ReplCommand} from './commands/repl';
import {ExecCommand} from './commands/exec';
import {VersionCommand} from './commands/version';
import {EnginesCommand} from './commands/engines';
import {KeywordsCommand} from './commands/keywords';

import {RUN_DESC, RUN_HELP, REPL_DESC, REPL_HELP,
  ENGINES_DESC, ENGINES_HELP, KEYWORDS_DESC, KEYWORDS_HELP} from './commands/doc-content';


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
  .command('run <filename>')
  .description(RUN_DESC)
  .on('--help', () => {
    console.log(RUN_HELP)
  })
  .action ((filename, cmd) => {
    let execCom = new ExecCommand();
    execCom.execute(filename);
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

 program
  .command('keywords')
  .description(KEYWORDS_DESC)
  .on('--help', () => {
    console.log(KEYWORDS_HELP)
  })
  .action ((dir, cmd) => {
    let execCom = new KeywordsCommand();
    execCom.getAvailableKeywords().then((keywords) => {

      let t = _.map(keywords, (k) => [ k[0], k[1].join(','), "-" ]);

      let table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
        head: ['Memnomic', 'Engine Available', 'Description']
      });
      _.each(t, (tt) => table.push(tt));

      console.log(table.toString());
    });

  });


 program
  .command('engines')
  .description(ENGINES_DESC)
  .on('--help', () => {
    console.log(ENGINES_HELP)
  })
  .action ((dir, cmd) => {
    let execCom = new EnginesCommand();
    let list = execCom.getAvailableEngine();

    // execCom.getEngineList().then((eng) => console.log(eng));
    let engines = execCom.getAvailableEngine();
    let t = _.map(engines, (e) => [ e, "-", "-" ]);

    let table = new Table({
      chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
       , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
       , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
       , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },
      head: ['Engine', 'Enabled', 'Description']
    });

    _.each(t, (tt) => table.push(tt));

    console.log(table.toString());

  });

program.parse(process.argv);

if(process.argv.length < 3)
  program.help();
