"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const cli_table_1 = __importDefault(require("cli-table"));
const lodash_1 = __importDefault(require("lodash"));
const repl_1 = require("./commands/repl");
const exec_1 = require("./commands/exec");
const version_1 = require("./commands/version");
const engines_1 = require("./commands/engines");
const keywords_1 = require("./commands/keywords");
const doc_content_1 = require("./commands/doc-content");
commander_1.default
    .option("-v, --version", "output the version number", () => {
    let v = new version_1.VersionCommand();
    console.log(v.getVersions());
})
    .description('******************************************** ' + '\n' +
    "   ____  ____    ____            _       _" + '\n' +
    "  |  _ \\\|  _ \\  / ___|  ___ _ __(_)_ __ | |_ " + '\n' +
    "  | |_) | |_) | \\___ \\ / __| '__| | '_ \\| __|" + '\n' +
    "  |  _ <|  __/   ___) | (__| |  | | |_) | |_ " + '\n' +
    "  |_| \\_\\_|     |____/ \\___|_|  |_| .__/ \\__|" + '\n' +
    "                                  |_|         " + '\n' +
    '  ******************************************** ')
    .usage('[command] [options]');
commander_1.default
    .command('run <filename>')
    .description(doc_content_1.RUN_DESC)
    .on('--help', () => {
    console.log(doc_content_1.RUN_HELP);
})
    .action((filename, cmd) => {
    let execCom = new exec_1.ExecCommand();
    execCom.execute(filename);
});
commander_1.default
    .command('repl')
    .description(doc_content_1.REPL_DESC)
    .on('--help', () => {
    console.log(doc_content_1.REPL_HELP);
})
    .action((dir, cmd) => {
    let execCom = new repl_1.ReplCommand();
    execCom.execute();
});
commander_1.default
    .command('keywords')
    .description(doc_content_1.KEYWORDS_DESC)
    .on('--help', () => {
    console.log(doc_content_1.KEYWORDS_HELP);
})
    .action((dir, cmd) => {
    let execCom = new keywords_1.KeywordsCommand();
    execCom.getAvailableKeywords().then((keywords) => {
        let t = lodash_1.default.map(keywords, (k) => [k[0], k[1].join(','), "-"]);
        let table = new cli_table_1.default({
            chars: { 'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗',
                'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝',
                'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼',
                'right': '║', 'right-mid': '╢', 'middle': '│' },
            head: ['Memnomic', 'Engine Available', 'Description']
        });
        lodash_1.default.each(t, (tt) => table.push(tt));
        console.log(table.toString());
    });
});
commander_1.default
    .command('engines')
    .description(doc_content_1.ENGINES_DESC)
    .on('--help', () => {
    console.log(doc_content_1.ENGINES_HELP);
})
    .action((dir, cmd) => {
    let execCom = new engines_1.EnginesCommand();
    let list = execCom.getAvailableEngine();
    // execCom.getEngineList().then((eng) => console.log(eng));
    let engines = execCom.getAvailableEngine();
    let t = lodash_1.default.map(engines, (e) => [e, "-", "-"]);
    let table = new cli_table_1.default({
        chars: { 'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗',
            'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝',
            'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼',
            'right': '║', 'right-mid': '╢', 'middle': '│' },
        head: ['Engine', 'Enabled', 'Description']
    });
    lodash_1.default.each(t, (tt) => table.push(tt));
    console.log(table.toString());
});
commander_1.default.parse(process.argv);
if (process.argv.length < 3)
    commander_1.default.help();
