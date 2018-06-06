import {FunctionSymbol} from '../../antlr/RpsSymTable';
import {Expression} from '../../core/expression';
import {ChromeEngine} from './engine';

export class RunExpression extends Expression{
  static NAME = "run.";
  engine:ChromeEngine;

  constructor(engine:ChromeEngine){
    super();
    this.engine = engine;
  }

  execute(expr:FunctionSymbol) :Promise<any> {
    return this.engine.launch();
  }
}
