export abstract class TaguiCoreEngine {
  abstract version:string;
  abstract name:string;

  constructor(){}

  abstract setup() : void;
  abstract execute() : void;
  abstract teardown(): void;
}
