import  download from 'download';
import * as shell from 'shelljs'

export class CLIUtil {
  static getHeaderContent () :string {
    let content = [
      "tagui v3.5: use following syntax and below options to run ./tagui flow_filename option(s)",
      "IMPORTANT: SAVE YOUR WORK BEFORE USING CHROME OR HEADLESS, TAGUI WILL RESTART CHROME",
      "headless - run on invisible Chrome web browser instead of default PhantomJS (first install Chrome)",
      "chrome   - run on visible Chrome web browser instead of invisible PhantomJS (first install Chrome)",
      "firefox  - run on visible Firefox web browser instead of invisible PhantomJS (first install Firefox)",
      "upload   - upload automation flow and result to hastebin.com (expires 30 days after last view)",
      "report   - web report for sharing of run results on webserver (default is only a text log file)",
      "debug    - show run-time backend messages from PhantomJS for detailed tracing and logging",
      "quiet    - run without output except for explicit output (echo / show / check / errors etc)",
      "speed    - skip 3-second delay between datatable iterations (and skip restarting of Chrome)",
      "test     - testing with check step test assertions for CI/CD integration (output XUnit XML file)",
      "baseline - output execution log and relative-path output files to a separate baseline directory",
      "input(s) - add your own parameter(s) to be used in your automation flow as variables p1 to p9",
      "",
      "TagUI is a RPA / CLI tool for automating user interactions ~ for more info, google tagui"
    ];

    return content.join('\n');
  }

  //TODO: include csv download when error
  static downloadOnlineResource (fileUrl:string) : Promise<string> {

    let filename = fileUrl.substring( fileUrl.lastIndexOf('/')+1 );

    let promise = new Promise<string>((resolve, reject) => {
      download(fileUrl, '.')
        .then( () => resolve(filename))
        .catch(err => reject(err))
    })

    return promise;
  }

  static createLogFiles (filePaths:string[]) : void {
    filePaths.forEach(function(value){
      shell.touch(value);
      shell.chmod(600, value);
    });
  }

  static removeFiles (filePaths:string[]) : void {
    filePaths.forEach(function(value){
      shell.rm(value);
    });
  }

  // static setBaselinePath(){}

  static execute () {
    //1. if sleep mode, pause 3s
    //2. parse the file and output to log file
    //3. parse R , python , sikuli
    //4. start chrome
    // 4.1. setup width height
    // 4.2. config for headless
    // 4.3  ????
  }
}

export class TaguiParams {

  filename:string;

  tagui_baseline_mode:boolean = false;
  tagui_debug_mode:boolean= false;
  tagui_test_mode:boolean= false;
  tagui_quiet_mode:boolean= false;
  tagui_html_report_mode:boolean= false;
  tagui_upload_result_mode:boolean= false;
  tagui_speed_mode:boolean= false;

  tagui_web_browser:string = "";


  //control
  chrome_command:string ="";
  initial_dir:string ="";

  constructor(filename:string)  {
    this.filename = filename;
  }

  isFilenameOnlineRes () : boolean{
    return this.filename.trim().startsWith("http");
  }

  static parseProcessParam (argvLs:string[]) : TaguiParams{
    if(argvLs.length < 2) throw new Error("invalid length.");
    else if(!argvLs[2]) throw new Error("filename not found");

    let FILENAME_INDEX = 2;
    let params = new TaguiParams(argvLs[FILENAME_INDEX]);

    params.tagui_baseline_mode = argvLs.indexOf('baseline') > -1 ? true : false;
    params.tagui_debug_mode = argvLs.indexOf('debug') > -1 ? true : false;
    params.tagui_test_mode = argvLs.indexOf('test') > -1 ? true : false;
    params.tagui_quiet_mode = argvLs.indexOf('quiet') > -1 ? true : false;
    params.tagui_html_report_mode = argvLs.indexOf('report') > -1 ? true : false;
    params.tagui_upload_result_mode = argvLs.indexOf('upload') > -1 ? true : false;
    params.tagui_speed_mode = argvLs.indexOf('speed') > -1 ? true : false;

    params.tagui_web_browser = TaguiParams.deriveBrowser(argvLs);

    return params;
  }

  private static deriveBrowser (argvLs:string[]) : string{
    let browser = "phantomjs";

    if(argvLs.indexOf('chrome') > -1) browser = "chrome";
    else if(argvLs.indexOf('firefox') > -1) browser = "firefox";
    else if(argvLs.indexOf('headless') > -1) browser = "headless";

    return browser;
  }
}
