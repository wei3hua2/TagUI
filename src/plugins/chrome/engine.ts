import {TaguiCoreEngine} from '../core/core-engine';

export class ChromeEngine extends TaguiCoreEngine {
  version = "1.0.0";

  constructor(){}

  setup() {
    console.log('setup chrome');
  }
  execute(){}
  teardown(){}
}
