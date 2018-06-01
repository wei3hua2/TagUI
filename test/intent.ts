import * as c from 'chai';
import * as m from 'mocha';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import {INTENTSParser} from '../src/intents/basic/INTENTSParser';
import {INTENTSLexer} from '../src/intents/basic/INTENTSLexer';

import {IntentsMainListener} from '../src/intents/basic/IntentsMainListener';


m.describe('Basic Intents', () => {
  m.it('valid expand intent syntax', () => {
    let command = "expand helloworld";

    // Create the lexer and parser
    // let inputStream = new ANTLRInputStream("expand wei\n expand hello\n url wewewewe");
    let inputStream = new ANTLRInputStream("url wewewewe");

    let tokenStream = new CommonTokenStream( new INTENTSLexer(inputStream) );
    let parser = new INTENTSParser(tokenStream);

    let tree = parser.derive();
    let intentListener = new IntentsMainListener();

    ParseTreeWalker.DEFAULT.walk(intentListener, tree);

  })
});
