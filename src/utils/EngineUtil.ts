import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import {INTENTSParser} from '../plugins/lang/basic/INTENTSParser';
import {INTENTSLexer} from '../plugins/lang/basic/INTENTSLexer';

import {IntentsMainListener} from '../plugins/IntentsBasicListener';

import {Deferred} from "ts-deferred";

export class EngineUtil {

  static execScriptLine(line, runner):Promise<any> {
    let inputStream = new ANTLRInputStream(line);
    let tokenStream = new CommonTokenStream( new INTENTSLexer(inputStream) );
    let parser = new INTENTSParser(tokenStream);

    let tree = parser.all();
    let d = new Deferred<any>();

    let intentListener = new IntentsMainListener(runner,d);

    ParseTreeWalker.DEFAULT.walk(intentListener, tree);

    return d.promise;
  }
}
