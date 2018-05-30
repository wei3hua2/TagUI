import {CLIUtil} from '../../cli/CLIUtil';
import {TaguiCoreEngine} from '../core-engine';

export class REngine extends TaguiCoreEngine {
  version = "1.0.0";

  constructor(){}

  setup() {
    CLIUtil.mkDir('tagui_r');
    CLIUtil.createLogFiles(["tagui_r/tagui_r.log", "tagui_r/tagui_r_windows.log"]);
    CLIUtil.removeFiles(["tagui_r/tagui_r.in","tagui_r/tagui_r.out"]);
  }
  execute(){}
  teardown(){}
}
