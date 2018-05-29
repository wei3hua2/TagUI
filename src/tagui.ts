import {CLIUtil, TaguiParams} from './cli/CLIUtil';

let chrome_command = "google-chrome";
let initial_dir = "pwd"

// console.log( CLIUtil.getHeaderContent() );
try {
  let tParams:TaguiParams = TaguiParams.parseProcessParam( process.argv );

  console.log(tParams);

  CLIUtil.createLogFiles([ `${tParams.filename}.log`, "tagui_r/tagui_r.log", "tagui_r/tagui_r_windows.log",
    "tagui_py/tagui_py.log", "tagui_py/tagui_py_windows.log", "tagui.sikuli/tagui.log", "tagui.sikuli/tagui_windows.log",
    "tagui_chrome.log"]);

  CLIUtil.removeFiles([
    "tagui_r/tagui_r.in","tagui_r/tagui_r.out" , "tagui_py/tagui_py.in","tagui_py/tagui_py.out" ,
    "tagui.sikuli/tagui_sikuli.in","tagui.sikuli/tagui_sikuli.out" , "tagui_chrome.in","tagui_chrome.out"
  ]);

}catch(err){

  if("filename not found".match(err.message))
    console.log( CLIUtil.getHeaderContent() );
  else
    console.error(err);
}



// CLIUtil.apiSetting(); // ???
//
//
// CLIUtil.createLogFiles();
// CLIUtil.cleanupEngineFiles();
//
// CLIUtil.setupDataset();
//
// CLIUtil.parseTagUI();
//
// // R, Python, Sikuli, Browser
// CLIUtil.setupEngines();
//
// CLIUtil.outputResult();
//
// CLIUTil.teardown();
