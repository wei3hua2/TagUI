import {CLIUtil} from '../../cli/CLIUtil';
import {TaguiCoreEngine} from '../core-engine';

export class ChromeEngine extends TaguiCoreEngine {
  version = "1.0.0";

  constructor(){}

  setup() {
    CLIUtil.mkDir('tagui_chrome');
    CLIUtil.createLogFiles([ "tagui_chrome/tagui_chrome.log"]);
    CLIUtil.removeFiles(["tagui_chrome/tagui_chrome.in","tagui_chrome/tagui_chrome.out"]);

    // CLIUtil.createLogFiles([ `${tParams.filename}.log`, "tagui_r/tagui_r.log", "tagui_r/tagui_r_windows.log",
    //   "tagui_py/tagui_py.log", "tagui_py/tagui_py_windows.log", "tagui.sikuli/tagui.log", "tagui.sikuli/tagui_windows.log",
    //   "tagui_chrome.log"]);
    //
    // CLIUtil.removeFiles([
    //   "tagui_r/tagui_r.in","tagui_r/tagui_r.out" , "tagui_py/tagui_py.in","tagui_py/tagui_py.out" ,
    //   "tagui.sikuli/tagui_sikuli.in","tagui.sikuli/tagui_sikuli.out" , "tagui_chrome.in","tagui_chrome.out"
    // ]);
  }
  execute(){}
  teardown(){}
}
