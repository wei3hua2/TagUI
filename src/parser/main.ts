import fs from 'fs';
import _ from 'lodash';

export class TaguiParser {

  filename:string;


  inputContent:string = "";   //filename.tagui
  outputContent:string = "";  //filename.js
  configContent:string = "";  //tagui_config.txt
  headerContent:string = "";
  footerContent:string = "";  //tagui_header.js, tagui_footer.js

  // repoContent:string[][] = new [][];


  // tagui_web_browser:string;


  constructor (fn:string) {
    this.filename = fn;
  }


  init () {
    // if(!this.isValidExtension()) throw new Error('Invalid file extension');

    this.inputContent = fs.readFileSync(this.filename,'utf8');
    // this.outputContent = fs.readFileSync(this.filename);
    this.configContent = fs.readFileSync(`${__dirname}/tagui_config.txt`,'utf8');
    this.headerContent = fs.readFileSync(`${__dirname}/tagui_header.js`,'utf8');
    this.footerContent = fs.readFileSync(`${__dirname}/tagui_footer.js`,'utf8');
  }
  parseScript () {
    let output_file = `${this.filename}.js`;
    let content = "".concat(this.headerContent,this.configContent,this.footerContent);

    fs.writeFileSync(output_file,content);
  }


  expandFile (scriptContent:string) :string {
    let scriptLines:string[] = scriptContent.split('\n');

    let expanded = _.map(scriptLines, (line) => {
      // if(line.trim().split() > 0 && line.trim()[0].trim().includes(this.loadFileIntent)){
        // return expandLine(line);
      // }
      // else return line;
      return line
    });

    return expanded.join('\n');
  }


  private isValidExtension () {
    //doesnt work properly with relative directory
    if( this.filename.lastIndexOf('.') < 0 ) return true;

    let extension = this.filename.substring( this.filename.lastIndexOf('.') );

    return _.includes(['.txt','.js','.gui'],extension);
  }

  // private function parseFile () : string {
  //   return "".concat(
  //     this.parseHeader(),
  //     this.parseFile('tagui_global.js'),
  //     this.parseFile('tagui_local.js'),
  //     "// flow path for save_text and snap_image\n",
  //     "var flow_path = '" . str_replace("\\", "/", dirname($script)) . "';\n\n");
  // }
  //
  // private function parseHeader () :string {
  //   let banner = "/* OUTPUT CASPERJS SCRIPT FOR TAGUI FRAMEWORK ~ TEBEL.ORG */\n\n";
  //   let header = "var casper = require('casper').create();\n";
  //
  //   return "".concat(banner, header, configContent, headerContent);
  // }
  //
  // private function parseFile (filename:string) : string {
  //   let content = "";
  //
  //   if( fs.existsSync(filename) )
  //     content = "".concat(fs.readFileSync(filename,"utf8"))
  //
  //   return content+"\n";
  // }
  //
  // private function writeToRawFile (inputContent:string) {
  //   fs.writeFileSync(`${this.filename}.raw`,inputContent);
  // }
  //
  // private function languageConfig () {
  //   if(!headerContent.includes("var tagui_language = 'english';")){}
  //
  //   // if (
  //   //   strpos(
  //   //     strtolower(file_get_contents('tagui_config.txt')),
  //   //     "var tagui_language = 'english';") == false) { // section which includes translation engine for handling flows in other languages
  //   //     $temp_argv1              = $argv[1];
  //   //     $temp_argv2              = $argv[2];
  //   //     $temp_argv3              = $argv[3];
  //   //
  //   //     $argv[1]                 = 'tagui_parse.php';
  //   //     $argv[2]                 = 'from';
  //   //
  //   //     $temp_tagui_config       = strtolower(file_get_contents('tagui_config.txt'));
  //   //
  //   //     $temp_tagui_config_start = strpos($temp_tagui_config, 'var tagui_language');
  //   //     $temp_tagui_config_end   = strpos($temp_tagui_config, "\n", $temp_tagui_config_start);
  //   //
  //   //     $temp_tagui_config       = substr($temp_tagui_config, $temp_tagui_config_start, $temp_tagui_config_end - $temp_tagui_config_start);
  //   //
  //   //     $temp_tagui_config       = str_replace('var tagui_language', '', $temp_tagui_config);
  //   //     $temp_tagui_config       = str_replace('"', '', $temp_tagui_config);
  //   //     $temp_tagui_config       = str_replace("'", '', $temp_tagui_config);
  //   //     $temp_tagui_config       = str_replace('=', '', $temp_tagui_config);
  //   //     $temp_tagui_config       = str_replace(';', '', $temp_tagui_config);
  //   //
  //   //     $argv[3]                 = trim($temp_tagui_config);
  //   //
  //   //     require 'translate.php'; // set parameters to load translation engine
  //   //
  //   //     $argv[1]             = $temp_argv1;
  //   //     $argv[2]             = $temp_argv2;
  //   //     $argv[3]             = $temp_argv3;
  //   //
  //   //     $translated_raw_flow = "";
  //   //     while (!feof($input_file)) {
  //   //         $translated_raw_flow .= translate_intent(fgets($input_file));
  //   //     }
  //   //     fclose($input_file);
  //   //
  //   //     file_put_contents($script . '.raw', $translated_raw_flow); // save translated output before reopening as input
  //   //     $input_file = fopen($script . '.raw', 'r') or die("ERROR - cannot open " . $script . '.raw' . "\n");
  //   // }
  // }
  //
  // private function padRawFlow() {
  //   // section to do required pre-processing on expanded .raw flow file
  //   $padded_raw_flow            = "";
  //   $previous_line_is_condition = false;
  //   //inside js block , inside py block , inside r block , inside dom block, inside run block, inside vision
  //
  //   inputs:string[] = fs.readFileSync(this.inputFile,'utf8').split('\n');
  //
  //   while (!feof($input_file)) {
  //       $padded_raw_flow_line = ltrim(fgets($input_file));
  //       // track whether line is inside integrations begin-finish code blocks
  //       if (strtolower(trim($padded_raw_flow_line)) == "js begin")
  //           $inside_js_block = 1;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "js finish")
  //           $inside_js_block = 0;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "py begin")
  //           $inside_py_block = 1;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "py finish")
  //           $inside_py_block = 0;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "r begin")
  //           $inside_r_block = 1;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "r finish")
  //           $inside_r_block = 0;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "dom begin")
  //           $inside_dom_block = 1;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "dom finish")
  //           $inside_dom_block = 0;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "run begin")
  //           $inside_run_block = 1;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "run finish")
  //           $inside_run_block = 0;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "vision begin")
  //           $inside_vision_block = 1;
  //       else if (strtolower(trim($padded_raw_flow_line)) == "vision finish")
  //           $inside_vision_block = 0;
  //
  //       if (($inside_js_block + $inside_py_block + $inside_r_block + $inside_dom_block + $inside_run_block + $inside_vision_block) > 0) {
  //           $padded_raw_flow .= $padded_raw_flow_line;
  //           continue;
  //       } // auto-padding not relevant in integrations code blocks
  //       // rewrite JS function definitions to work in scope within CasperJS blocks
  //       if ((substr($padded_raw_flow_line, 0, 9) == "function ") or (substr($padded_raw_flow_line, 0, 12) == "js function "))
  //           if (strpos($padded_raw_flow_line, "(") !== false) {
  //               $js_function_name_startpos = strpos($padded_raw_flow_line, "function ") + 9;
  //               $js_function_name_endpos   = strpos($padded_raw_flow_line, "(", $js_function_name_startpos);
  //               $padded_raw_flow_line      = trim(substr($padded_raw_flow_line, $js_function_name_startpos, $js_function_name_endpos - $js_function_name_startpos)) . ' = function ' . trim(substr($padded_raw_flow_line, $js_function_name_endpos)) . "\n";
  //           } else
  //               die("ERROR - missing brackets () for " . $padded_raw_flow_line);
  //       // pad { and } blocks for conditions, to keep JavaScript syntax correct
  //       if ((substr($padded_raw_flow_line, 0, 3) == "if ") or (substr($padded_raw_flow_line, 0, 8) == "else if ") or (substr($padded_raw_flow_line, 0, 4) == "for ") or (substr($padded_raw_flow_line, 0, 6) == "while ") or (substr($padded_raw_flow_line, 0, 6) == "popup ") or (substr($padded_raw_flow_line, 0, 6) == "frame ") or (trim($padded_raw_flow_line) == "else"))
  //           $current_line_is_condition = true;
  //       else
  //           $current_line_is_condition = false;
  //       if (($previous_line_is_condition == true) and ($current_line_is_condition == true))
  //           die("ERROR - for nested conditions, loops, popup, frame, set { and } explicitly\n" . "ERROR - add { before this line and add } accordingly - " . $padded_raw_flow_line);
  //       if (($previous_line_is_condition == true) and (substr($padded_raw_flow_line, 0, 1) != "{"))
  //           $padded_raw_flow .= "{\n" . trim($padded_raw_flow_line) . "\n}\n";
  //       else
  //           $padded_raw_flow .= $padded_raw_flow_line;
  //       $previous_line_is_condition = $current_line_is_condition; // prepare for next line
  //   }
  //   fclose($input_file);
  //   file_put_contents($script . '.raw', $padded_raw_flow);
  // }
  //
  //
  //
  // private function setWebBrowser () {
  //   this.tagui_web_browser = "this"; // set the web browser to be used base on tagui_web_browser environment variable
  //
  //   if ((getenv('tagui_web_browser') == 'headless') or (getenv('tagui_web_browser') == 'chrome'))
  //       this.tagui_web_browser = 'chrome';
  //
  // }
  //
  // private function loadRepo () :string[][]{
  //   if(!this.repoContent)
  //     if( fs.existsSync(`${this.filename}.csv`) )
  //       this.repoContent = CSVUtil.readCsvFile(`${this.filename}.csv`);
  //   //TODO: tagui_local.csv and tagui_global.csv
  //
  //   return this.repoContent;
  // }
  //
  // private function readRepoCount () {
  //   this.loadRepo();
  //   return this.repoContent.length;
  // }
  //
  //
  // intent:{} = {
  //   "url":{
  //     "condition" : (lcRawIntent:string, blockCount:number) => {},
  //     "intent" : (line:string) => {}
  //   },
  // 	"tap":{
  //     "condition" : (lcRawIntent:string, blockCount:number) => {},
  //     "intent" : (line:string) => {}
  //   },
  //   "click":{
  //
  //   },
  //   "rtap":{
  //
  //   },
  //   "rclick":{
  //
  //   },
  //   "dtap":{
  //
  //   },
  //   "dclick":{
  //
  //   },
  // 	"hover":{},
  //   "move":{},
  //   "type":{},
  //   "enter":{},
  //   "select":{},
  //   "choose":{},
  // 	"read":{},
  //   "fetch":{},
  //   "show":{},
  //   "print":{},
  //   "up":{},
  //   "upload":{},
  // 	"down":{},
  //   "download":{},
  //   "receive":{},
  //   "echo":{},
  //   "save":{},
  //   "dump":{},
  // 	"write":{},
  //   "load":{},
  //   "snap":{},
  //   "table":{},
  //   "wait":{},
  //   "live":{},
  // 	"ask":{},
  //   "check":{},
  //   "test":{},
  //   "frame":{},
  //   "popup":{},
  //   "api":{},
  // 	"run":{},
  //   "dom":{},
  //   "js":{},
  //   "r":{},
  //   "py":{},
  //   "vision":{},
  //   "timeout":{},
  //   "code":{}
  // }
  //
  // private function mainParseIntent(sLine:string){
  //   let scriptLine = sLine.trim();
  // }

}
