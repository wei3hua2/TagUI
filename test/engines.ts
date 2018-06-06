import fs from 'fs';

import * as c from 'chai';
import chaiAsPromised from "chai-as-promised";
import * as m from 'mocha';


import {ChromeEngine} from '../src/engines/chrome/engine';


m.before(() => {
    c.should();
    c.use(chaiAsPromised);
});


m.describe('Chrome', () => {
  m.xit('launch chrome', () => {
    let runner = new ChromeEngine();

    return runner.launch().should.eventually.have.exist;
  }).timeout(0);

  m.it('test chrome socket', (done) => {
    let runner = new ChromeEngine();

    runner.launch().then((d) => {
      done();
    });

    // return runner.launch().should.eventually.have.exist;
  }).timeout(0);
})
