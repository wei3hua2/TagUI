import shell from 'shelljs';

export class CasperRunner {

  CASPERJS_EXECUTABLE:string = "";
  PHANTOMJS_EXECUTABLE:string = "";

  constructor(){
    this.init();
  }

  init(){
    this.CASPERJS_EXECUTABLE = `${__dirname}/../../../node_modules/casperjs/bin/casperjs`;
    this.PHANTOMJS_EXECUTABLE = `${__dirname}/../../../node_modules/phantomjs-prebuilt/bin/phantomjs`;
  }

  execute (filename:string) :Promise<any>{

    var promise = new Promise((resolve, reject) => {

        shell.exec(`${this.CASPERJS_EXECUTABLE} ${filename}`,
           (code, stdout, stderr) => {

            if(stderr)reject(stderr);
            else resolve(stdout);
          });
    });
    return promise;
  }
}
