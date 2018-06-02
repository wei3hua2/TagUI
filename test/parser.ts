import fs from 'fs';

import * as c from 'chai';
import chaiAsPromised from "chai-as-promised";
import * as m from 'mocha';

import {TaguiParser} from '../src/parser/main';

import {CasperRunner} from '../src/parser/casper/runner';

import {ChromeEngine} from '../src/plugins/chrome/engine';


m.before(() => {
    c.should();
    c.use(chaiAsPromised);
});

m.describe('Parser' , () => {
  m.xit('Invalid file extension', () => {
    let parser = new TaguiParser('filename.wrong');
    c.expect( () => parser.init() ).to.throw(Error,'Invalid file extension');
  })

  m.it('Invalid file name', () => {
    let parser = new TaguiParser('invalid_file.txt');
    c.expect( () => parser.init() ).to.throw(Error,"no such file or directory, open 'invalid_file.txt'");
  })

  m.xit('loaded necessary boilerplate files', () => {
    let parser = new TaguiParser(`${process.cwd()}/src/samples/1_yahoo`);
    parser.init();

    c.expect(!!parser.inputContent).to.be.true;
    c.expect(!!parser.configContent).to.be.true;
    c.expect(!!parser.headerContent).to.be.true;
    c.expect(!!parser.footerContent).to.be.true;
  })
  m.xit('parse output file', () => {
    let parser = new TaguiParser(`${process.cwd()}/src/samples/1_yahoo`);
    parser.init();
    parser.parseScript();

    c.expect(fs.existsSync(`${process.cwd()}/src/samples/1_yahoo.js`)).to.be.true;
  })
})

m.describe('Casper' , () => {
  m.it('exec bin in node_module exists', () => {
    let runner = new CasperRunner();

    c.expect(fs.existsSync(runner.CASPERJS_EXECUTABLE)).to.be.true;
    c.expect(fs.existsSync(runner.PHANTOMJS_EXECUTABLE)).to.be.true;
  })

  m.xit('should print a valid title', () => {
    let runner = new CasperRunner();

    return runner.execute(`${__dirname}/fixtures/sample.js`).should.eventually
          .equal('CasperJS, a navigation scripting and testing utility for PhantomJS and SlimerJS\nPhantomJS | PhantomJS\n');

  }).timeout(0);
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
