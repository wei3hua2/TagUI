import {CLIUtil} from '../../cli/CLIUtil';
import {TaguiCoreEngine} from '../core-engine';

export class PythonEngine extends TaguiCoreEngine {
  version = "1.0.0";

  constructor(){}

  setup() {
    CLIUtil.mkDir('tagui_py');
    CLIUtil.createLogFiles(["tagui_py/tagui_py.log", "tagui_py/tagui_py_windows.log"]);
    CLIUtil.removeFiles(["tagui_py/tagui_py.in","tagui_py/tagui_py.out"]);
  }
  execute(){}
  teardown(){}
}
