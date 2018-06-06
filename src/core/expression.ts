import {FunctionSymbol} from '../antlr/RpsSymTable';

export abstract class Expression {
  name:string;
  abstract execute(expr:FunctionSymbol) : Promise<any>;
}
