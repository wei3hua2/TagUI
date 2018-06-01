import {CLIUtil} from '../../cli/CLIUtil';
import {TaguiCoreEngine} from '../core-engine';

import fs from 'fs';
import shell from 'shelljs';
import request from 'request';
import asyncPolling from 'async-polling';
import _ from 'lodash';

export class ChromeEngine extends TaguiCoreEngine {
  version = "1.0.0";

  chromeSwitches:string = "--user-data-dir=chrome/tagui_user_profile --remote-debugging-port=9222 --web-security=false about:blank";
  headlessSwitch:string="--headless --disable-gpu";

  darwinCommand:string = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  linuxCommand:string = "google-chrome";

  emptyIOCommand:string = "> /dev/null 2>&1 &";

  // width:string="1366";
  // height:string="768";
  windowSize:string="--window-size=1366,768";

  chromeProcessId:string = "";

  constructor(){super();}

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
  execute():any{
    return {
      expand: () => {
        Promise.resolve('TODO: expand chrome')
      },
      launch: () => this.launch(),
      url:() => Promise.resolve('TODO: url navigation')
    }
  }
  teardown(){}

  init () {
    fs.writeFileSync('tagui_chrome.in','');
    fs.writeFileSync('tagui_chrome.out','[0] START');
  }
  launch () : Promise<any>{
    if(['aix','freebsd','linux','openbsd'].includes(process.platform)) return this.launchLinux();
    else if('darwin' === process.platform) return this.launchMac();
    else if('win32' === process.platform) return this.launchWin();
    else throw Error('os not supported');
  }

  kill () : any {
    return shell.exec(`kill ${this.getChromeProcessId()}`);
  }

  private launchLinux():Promise<any>{
    //TODO: check is command exists

    return this.launchCommand(this.linuxCommand);
  }

  private launchMac():Promise<any>{
    if( !fs.existsSync(this.darwinCommand) ) throw Error('Chrome Not Found');

    return this.launchCommand(this.darwinCommand);
  }

  private launchWin():Promise<any>{
    console.log('TODO: launch windows OS');
    throw new Error('TODO: launch windows OS');
  }

  private launchCommand(chromeCommand:string):Promise<any> {

    return new Promise((resolve, reject) => {

        shell.exec(`${chromeCommand} ${this.chromeSwitches} ${this.windowSize} ${this.emptyIOCommand}`,
           (code, stdout, stderr) => {
              if(stderr)reject(stderr);
              else {
                this.getWSUrl().then((wsUrl) => {
                  resolve( {
                    wsUrl:wsUrl,
                    pid:this.getChromeProcessId()
                  } );
                });

              }

          });
    });
  }

  getChromeProcessId () :string {
    return shell.exec("ps a | grep remote-debugging-port=9222 | grep tagui_user_profile | sed -e 's/^[ ]*//' | cut -d' ' -f 1 | sort -nur | head -n 1").stdout.trim();
  }

  getWSUrl () {
    return new Promise( (resolve, reject) => {

      let polling = asyncPolling( (end) => {

        request('http://localhost:9222/json', function (error, resp, body) {
          if(resp && resp.statusCode === 200){
            polling.stop();
            end(undefined, JSON.parse(body));
          }else
            end(error);
        });
      },5000);

      polling.on('error', function (error:any) {});
      polling.on('result', function (result:any) {
          let output:any = _.find(result,{'url':'about:blank'});
          resolve(output['webSocketDebuggerUrl']);
      });

      polling.run();
    });
  }
}
