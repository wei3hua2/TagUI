import fs from 'fs';
import _ from 'lodash';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import {RpsParser} from '../antlr/grammar/RpsParser';
import {RpsLexer} from '../antlr/grammar/RpsLexer';

import {RpsMainListener} from '../antlr/RpsListener';

import {Deferred} from "ts-deferred";

export class ParserUtil {

  static parseTree(input:string) :RpsParser {
    let inputStream = new ANTLRInputStream(input);
    let tokenStream = new CommonTokenStream( new RpsLexer(inputStream) );

    return new RpsParser(tokenStream);
  }

  static exec (tree) :Promise<any>{
    let d = new Deferred<any>();

    let intentListener = new RpsMainListener(d);

    ParseTreeWalker.DEFAULT.walk(intentListener, tree);

    return d.promise;
  }

  static execFile(filepath):Promise<any> {
    let content = fs.readFileSync(filepath,'utf-8');

    let parser = this.parseTree(content);
    let tree = parser.file();

    return this.exec(tree);
  }

  static execLine(line):Promise<any> {
    let parser = this.parseTree(line);
    let tree = parser.statement();

    return this.exec(tree);
  }
}
