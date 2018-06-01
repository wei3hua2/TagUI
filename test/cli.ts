import * as c from 'chai';
import * as m from 'mocha';

import {TaguiParams, CLIUtil} from '../src/cli/CLIUtil';
import {CSVUtil} from '../src/cli/CSVUtil';

let COMMAND_WITHOUT_PARAMS = "node ./src/tagui.js";
let COMMAND_WITH_ONLY_FILENAME = "node ./src/tagui.js filename";
let COMMAND_WITH_CHROME_DEBUG_MODE = "node ./src/tagui.js filename chrome test debug";
let COMMAND_WITH_HEADLESS_WITH_REPORT = "node ./src/tagui.js filename headless report upload baseline";


let COMMAND_ONLINE_RESOURCE = "node ./src/tagui.js https://www.fakefilename.co/file.csv";

m.describe.skip('Params parsing', () => {
  m.it('command without params', () => {
    let params = COMMAND_WITHOUT_PARAMS.split(" ");

    c.expect( () => TaguiParams.parseProcessParam(params) ).to.throw(Error,'filename not found');
  })

  m.it('command with only filename', () => {
    let params = COMMAND_WITH_ONLY_FILENAME.split(" ");

    let p = TaguiParams.parseProcessParam(params);

    c.expect(p.filename).to.be.equal('filename');
    c.expect(p.tagui_web_browser).to.be.equal('phantomjs');

    c.expect(p.tagui_baseline_mode).to.be.false;
    c.expect(p.tagui_debug_mode).to.be.false;
    c.expect(p.tagui_test_mode).to.be.false;
    c.expect(p.tagui_quiet_mode).to.be.false;
    c.expect(p.tagui_html_report_mode).to.be.false;
    c.expect(p.tagui_upload_result_mode).to.be.false;
    c.expect(p.tagui_speed_mode).to.be.false;
  })

  m.it('command with chrome debug mode', () => {
    let params = COMMAND_WITH_CHROME_DEBUG_MODE.split(" ");

    let p = TaguiParams.parseProcessParam(params);

    c.expect(p.filename).to.be.equal('filename');
    c.expect(p.tagui_web_browser).to.be.equal('chrome');

    c.expect(p.tagui_baseline_mode).to.be.false;
    c.expect(p.tagui_quiet_mode).to.be.false;
    c.expect(p.tagui_html_report_mode).to.be.false;
    c.expect(p.tagui_upload_result_mode).to.be.false;
    c.expect(p.tagui_speed_mode).to.be.false;

    c.expect(p.tagui_debug_mode).to.be.true;
    c.expect(p.tagui_test_mode).to.be.true;
  })

  m.it('command with headless with report upload', () => {
    let params = COMMAND_WITH_HEADLESS_WITH_REPORT.split(" ");

    let p = TaguiParams.parseProcessParam(params);

    c.expect(p.filename).to.be.equal('filename');
    c.expect(p.tagui_web_browser).to.be.equal('headless');

    c.expect(p.tagui_baseline_mode).to.be.true;
    c.expect(p.tagui_html_report_mode).to.be.true;
    c.expect(p.tagui_upload_result_mode).to.be.true;

    c.expect(p.tagui_speed_mode).to.be.false;
    c.expect(p.tagui_quiet_mode).to.be.false;
    c.expect(p.tagui_debug_mode).to.be.false;
    c.expect(p.tagui_test_mode).to.be.false;
  })
});

m.describe('Operation' , () => {
  m.it('is filename online resource', () => {
    let params = COMMAND_ONLINE_RESOURCE.split(" ");
    let p = TaguiParams.parseProcessParam(params);

    c.expect(p.isFilenameOnlineRes()).to.be.true;
  })

  m.xit('download file', () => {
    CLIUtil.downloadOnlineResource("http://unicorn.com/foo.jpg").then(path => console.log(path));
  })

  m.xit('create log files', () => {
    let filePaths = [ "filename.log", "tagui_r/tagui_r.log", "tagui_r/tagui_r_windows.log",
      "tagui_py/tagui_py.log", "tagui_py/tagui_py_windows.log", "tagui.sikuli/tagui.log", "tagui.sikuli/tagui_windows.log",
      "tagui_chrome.log"];

    CLIUtil.createLogFiles(filePaths);
  })

  m.xit('remove files', () => {
    let filePaths = [ "filename.log", "tagui_r/tagui_r.log", "tagui_r/tagui_r_windows.log",
      "tagui_py/tagui_py.log", "tagui_py/tagui_py_windows.log", "tagui.sikuli/tagui.log", "tagui.sikuli/tagui_windows.log",
      "tagui_chrome.log"];

    CLIUtil.removeFiles(filePaths);
  })

  m.it('read csv file', () => {
    let data:string[][] = CSVUtil.readCsvFile('./src/samples/6_datatables/6A_datatables.csv');

    c.expect(data).to.be.deep.equal(
            [ [ '6A_GETURL', '#1', '#2', '#3' ],
              [ 'page_no', '1', '2', '3' ] ]);
  })

  m.it('transpose csv data', () => {
    let data = [ [ '6A_GETURL', '#1', '#2', '#3' ],[ 'page_no', '1', '2', '3' ] ];

    let result = CSVUtil.transpose(data);

    c.expect(result).to.be.deep.equal([ [ '6A_GETURL', 'page_no' ],[ '#1', '1' ],[ '#2', '2' ],[ '#3', '3' ] ]);
  })
})
