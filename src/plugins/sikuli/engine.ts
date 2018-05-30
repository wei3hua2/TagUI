import {CLIUtil} from '../../cli/CLIUtil';
import {TaguiCoreEngine} from '../core-engine';

export class SikuliEngine extends TaguiCoreEngine {
  version = "1.0.0";

  constructor(){}

  setup() {
    CLIUtil.mkDir('tagui_sikuli');
    CLIUtil.createLogFiles(["tagui_sikuli/tagui.log", "tagui_sikuli/tagui_windows.log"]);
    CLIUtil.removeFiles(["tagui_sikuli/tagui_sikuli.in","tagui_sikuli/tagui_sikuli.out"]);
  }
  execute(){}
  teardown(){}
}
