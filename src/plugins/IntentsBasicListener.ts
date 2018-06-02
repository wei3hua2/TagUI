import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import {Deferred} from "ts-deferred";

import {INTENTSListener} from './lang/basic/INTENTSListener';
import { ExpandContext, UrlContext, LaunchContext } from './lang/basic/INTENTSParser';

import {TaguiCoreEngine} from './core-engine';

export class IntentsMainListener implements INTENTSListener {

  runner:TaguiCoreEngine;
  deferred:Deferred<any>;

  constructor(runner:TaguiCoreEngine, defer:Deferred<any>){
    this.runner = runner;
    this.deferred = defer;
  }

  public enterUrl(ctx: UrlContext) : void{}
  public exitUrl(ctx: UrlContext) : void{
    this.execRunner('url');
  }

  public enterExpand(ctx: ExpandContext) : void{}
  public exitExpand(ctx: ExpandContext) : void{
    this.execRunner('expand');
  }

  public enterLaunch(ctx: LaunchContext) : void{}
  public exitLaunch(ctx: LaunchContext) : void{
    this.execRunner('launch');
  }

  private execRunner (intent:string) : void{
    if(this.runner.execute()[intent]) {
      this.runner.execute()[intent]().then((resp) => this.deferred.resolve(`${intent} executed`));
    }else {
      this.deferred.resolve(`${intent} executed not found`);
    }
  }

  public enterEveryRule(ctx: ParserRuleContext): void {}
}
