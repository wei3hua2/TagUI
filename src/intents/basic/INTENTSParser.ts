// Generated from src/intents/basic/INTENTS.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { INTENTSListener } from './INTENTSListener';

export class INTENTSParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly EXPAND=10;
	public static readonly URL=11;
	public static readonly LAUNCH=12;
	public static readonly DIGITS=13;
	public static readonly HEX=14;
	public static readonly STRING=15;
	public static readonly WS=16;
	public static readonly WHITESPACE=17;
	public static readonly RULE_all = 0;
	public static readonly RULE_expand = 1;
	public static readonly RULE_url = 2;
	public static readonly RULE_launch = 3;
	public static readonly RULE_uri = 4;
	public static readonly RULE_scheme = 5;
	public static readonly RULE_host = 6;
	public static readonly RULE_hostname = 7;
	public static readonly RULE_hostnumber = 8;
	public static readonly RULE_port = 9;
	public static readonly RULE_path = 10;
	public static readonly RULE_user = 11;
	public static readonly RULE_login = 12;
	public static readonly RULE_password = 13;
	public static readonly RULE_frag = 14;
	public static readonly RULE_query = 15;
	public static readonly RULE_search = 16;
	public static readonly RULE_searchparameter = 17;
	public static readonly RULE_string = 18;
	public static readonly ruleNames: string[] = [
		"all", "expand", "url", "launch", "uri", "scheme", "host", "hostname", 
		"hostnumber", "port", "path", "user", "login", "password", "frag", "query", 
		"search", "searchparameter", "string"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'://'", "':'", "'/'", "'.'", "'@'", "'#'", "'?'", "'&'", "'='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "EXPAND", "URL", "LAUNCH", "DIGITS", 
		"HEX", "STRING", "WS", "WHITESPACE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(INTENTSParser._LITERAL_NAMES, INTENTSParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return INTENTSParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "INTENTS.g4"; }

	@Override
	public get ruleNames(): string[] { return INTENTSParser.ruleNames; }

	@Override
	public get serializedATN(): string { return INTENTSParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(INTENTSParser._ATN, this);
	}
	@RuleVersion(0)
	public all(): AllContext {
		let _localctx: AllContext = new AllContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, INTENTSParser.RULE_all);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case INTENTSParser.EXPAND:
				{
				this.state = 38;
				this.expand();
				}
				break;
			case INTENTSParser.URL:
				{
				this.state = 39;
				this.url();
				}
				break;
			case INTENTSParser.LAUNCH:
				{
				this.state = 40;
				this.launch();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expand(): ExpandContext {
		let _localctx: ExpandContext = new ExpandContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, INTENTSParser.RULE_expand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(INTENTSParser.EXPAND);
			this.state = 44;
			this.match(INTENTSParser.WHITESPACE);
			this.state = 45;
			this.match(INTENTSParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, INTENTSParser.RULE_url);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(INTENTSParser.URL);
			this.state = 48;
			this.match(INTENTSParser.WHITESPACE);
			this.state = 49;
			this.uri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public launch(): LaunchContext {
		let _localctx: LaunchContext = new LaunchContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, INTENTSParser.RULE_launch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(INTENTSParser.LAUNCH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public uri(): UriContext {
		let _localctx: UriContext = new UriContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, INTENTSParser.RULE_uri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.scheme();
			this.state = 54;
			this.match(INTENTSParser.T__0);
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				{
				this.state = 55;
				this.login();
				}
				break;
			}
			this.state = 58;
			this.host();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.T__1) {
				{
				this.state = 59;
				this.match(INTENTSParser.T__1);
				this.state = 60;
				this.port();
				}
			}

			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.T__2) {
				{
				this.state = 63;
				this.match(INTENTSParser.T__2);
				this.state = 64;
				this.path();
				}
			}

			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.T__6) {
				{
				this.state = 67;
				this.query();
				}
			}

			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.T__5) {
				{
				this.state = 70;
				this.frag();
				}
			}

			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.WS) {
				{
				this.state = 73;
				this.match(INTENTSParser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public scheme(): SchemeContext {
		let _localctx: SchemeContext = new SchemeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, INTENTSParser.RULE_scheme);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public host(): HostContext {
		let _localctx: HostContext = new HostContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, INTENTSParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.T__2) {
				{
				this.state = 78;
				this.match(INTENTSParser.T__2);
				}
			}

			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case INTENTSParser.STRING:
				{
				this.state = 81;
				this.hostname();
				}
				break;
			case INTENTSParser.DIGITS:
				{
				this.state = 82;
				this.hostnumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hostname(): HostnameContext {
		let _localctx: HostnameContext = new HostnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, INTENTSParser.RULE_hostname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.string();
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===INTENTSParser.T__3) {
				{
				{
				this.state = 86;
				this.match(INTENTSParser.T__3);
				this.state = 87;
				this.string();
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hostnumber(): HostnumberContext {
		let _localctx: HostnumberContext = new HostnumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, INTENTSParser.RULE_hostnumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(INTENTSParser.DIGITS);
			this.state = 94;
			this.match(INTENTSParser.T__3);
			this.state = 95;
			this.match(INTENTSParser.DIGITS);
			this.state = 96;
			this.match(INTENTSParser.T__3);
			this.state = 97;
			this.match(INTENTSParser.DIGITS);
			this.state = 98;
			this.match(INTENTSParser.T__3);
			this.state = 99;
			this.match(INTENTSParser.DIGITS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, INTENTSParser.RULE_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(INTENTSParser.DIGITS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, INTENTSParser.RULE_path);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.string();
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===INTENTSParser.T__2) {
				{
				{
				this.state = 104;
				this.match(INTENTSParser.T__2);
				this.state = 105;
				this.string();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, INTENTSParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public login(): LoginContext {
		let _localctx: LoginContext = new LoginContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, INTENTSParser.RULE_login);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.user();
			this.state = 114;
			this.match(INTENTSParser.T__1);
			this.state = 115;
			this.password();
			this.state = 116;
			this.match(INTENTSParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, INTENTSParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public frag(): FragContext {
		let _localctx: FragContext = new FragContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, INTENTSParser.RULE_frag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 120;
			this.match(INTENTSParser.T__5);
			this.state = 121;
			this.string();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, INTENTSParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 123;
			this.match(INTENTSParser.T__6);
			this.state = 124;
			this.search();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public search(): SearchContext {
		let _localctx: SearchContext = new SearchContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, INTENTSParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.searchparameter();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===INTENTSParser.T__7) {
				{
				{
				this.state = 127;
				this.match(INTENTSParser.T__7);
				this.state = 128;
				this.searchparameter();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public searchparameter(): SearchparameterContext {
		let _localctx: SearchparameterContext = new SearchparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, INTENTSParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.string();
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===INTENTSParser.T__8) {
				{
				this.state = 135;
				this.match(INTENTSParser.T__8);
				this.state = 139;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case INTENTSParser.STRING:
					{
					this.state = 136;
					this.string();
					}
					break;
				case INTENTSParser.DIGITS:
					{
					this.state = 137;
					this.match(INTENTSParser.DIGITS);
					}
					break;
				case INTENTSParser.HEX:
					{
					this.state = 138;
					this.match(INTENTSParser.HEX);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, INTENTSParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(INTENTSParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x13\x94\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05"+
		"\x03\x06\x03\x06\x03\x06\x05\x06;\n\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"@\n\x06\x03\x06\x03\x06\x05\x06D\n\x06\x03\x06\x05\x06G\n\x06\x03\x06"+
		"\x05\x06J\n\x06\x03\x06\x05\x06M\n\x06\x03\x07\x03\x07\x03\b\x05\bR\n"+
		"\b\x03\b\x03\b\x05\bV\n\b\x03\t\x03\t\x03\t\x07\t[\n\t\f\t\x0E\t^\v\t"+
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03"+
		"\f\x03\f\x07\fm\n\f\f\f\x0E\fp\v\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E"+
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11"+
		"\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\x84\n\x12\f\x12\x0E\x12\x87\v"+
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x8E\n\x13\x05\x13"+
		"\x90\n\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06"+
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02"+
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x02\x90\x02+\x03\x02"+
		"\x02\x02\x04-\x03\x02\x02\x02\x061\x03\x02\x02\x02\b5\x03\x02\x02\x02"+
		"\n7\x03\x02\x02\x02\fN\x03\x02\x02\x02\x0EQ\x03\x02\x02\x02\x10W\x03\x02"+
		"\x02\x02\x12_\x03\x02\x02\x02\x14g\x03\x02\x02\x02\x16i\x03\x02\x02\x02"+
		"\x18q\x03\x02\x02\x02\x1As\x03\x02\x02\x02\x1Cx\x03\x02\x02\x02\x1Ez\x03"+
		"\x02\x02\x02 }\x03\x02\x02\x02\"\x80\x03\x02\x02\x02$\x88\x03\x02\x02"+
		"\x02&\x91\x03\x02\x02\x02(,\x05\x04\x03\x02),\x05\x06\x04\x02*,\x05\b"+
		"\x05\x02+(\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,\x03\x03"+
		"\x02\x02\x02-.\x07\f\x02\x02./\x07\x13\x02\x02/0\x07\x11\x02\x020\x05"+
		"\x03\x02\x02\x0212\x07\r\x02\x0223\x07\x13\x02\x0234\x05\n\x06\x024\x07"+
		"\x03\x02\x02\x0256\x07\x0E\x02\x026\t\x03\x02\x02\x0278\x05\f\x07\x02"+
		"8:\x07\x03\x02\x029;\x05\x1A\x0E\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02"+
		";<\x03\x02\x02\x02<?\x05\x0E\b\x02=>\x07\x04\x02\x02>@\x05\x14\v\x02?"+
		"=\x03\x02\x02\x02?@\x03\x02\x02\x02@C\x03\x02\x02\x02AB\x07\x05\x02\x02"+
		"BD\x05\x16\f\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02"+
		"EG\x05 \x11\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02"+
		"HJ\x05\x1E\x10\x02IH\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02"+
		"KM\x07\x12\x02\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02M\v\x03\x02\x02"+
		"\x02NO\x05&\x14\x02O\r\x03\x02\x02\x02PR\x07\x05\x02\x02QP\x03\x02\x02"+
		"\x02QR\x03\x02\x02\x02RU\x03\x02\x02\x02SV\x05\x10\t\x02TV\x05\x12\n\x02"+
		"US\x03\x02\x02\x02UT\x03\x02\x02\x02V\x0F\x03\x02\x02\x02W\\\x05&\x14"+
		"\x02XY\x07\x06\x02\x02Y[\x05&\x14\x02ZX\x03\x02\x02\x02[^\x03\x02\x02"+
		"\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\x11\x03\x02\x02\x02^\\\x03"+
		"\x02\x02\x02_`\x07\x0F\x02\x02`a\x07\x06\x02\x02ab\x07\x0F\x02\x02bc\x07"+
		"\x06\x02\x02cd\x07\x0F\x02\x02de\x07\x06\x02\x02ef\x07\x0F\x02\x02f\x13"+
		"\x03\x02\x02\x02gh\x07\x0F\x02\x02h\x15\x03\x02\x02\x02in\x05&\x14\x02"+
		"jk\x07\x05\x02\x02km\x05&\x14\x02lj\x03\x02\x02\x02mp\x03\x02\x02\x02"+
		"nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x17\x03\x02\x02\x02pn\x03\x02\x02"+
		"\x02qr\x05&\x14\x02r\x19\x03\x02\x02\x02st\x05\x18\r\x02tu\x07\x04\x02"+
		"\x02uv\x05\x1C\x0F\x02vw\x07\x07\x02\x02w\x1B\x03\x02\x02\x02xy\x05&\x14"+
		"\x02y\x1D\x03\x02\x02\x02z{\x07\b\x02\x02{|\x05&\x14\x02|\x1F\x03\x02"+
		"\x02\x02}~\x07\t\x02\x02~\x7F\x05\"\x12\x02\x7F!\x03\x02\x02\x02\x80\x85"+
		"\x05$\x13\x02\x81\x82\x07\n\x02\x02\x82\x84\x05$\x13\x02\x83\x81\x03\x02"+
		"\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02"+
		"\x02\x02\x86#\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8F\x05&\x14"+
		"\x02\x89\x8D\x07\v\x02\x02\x8A\x8E\x05&\x14\x02\x8B\x8E\x07\x0F\x02\x02"+
		"\x8C\x8E\x07\x10\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02"+
		"\x8D\x8C\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x89\x03\x02\x02\x02"+
		"\x8F\x90\x03\x02\x02\x02\x90%\x03\x02\x02\x02\x91\x92\x07\x11\x02\x02"+
		"\x92\'\x03\x02\x02\x02\x10+:?CFILQU\\n\x85\x8D\x8F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!INTENTSParser.__ATN) {
			INTENTSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(INTENTSParser._serializedATN));
		}

		return INTENTSParser.__ATN;
	}

}

export class AllContext extends ParserRuleContext {
	public expand(): ExpandContext | undefined {
		return this.tryGetRuleContext(0, ExpandContext);
	}
	public url(): UrlContext | undefined {
		return this.tryGetRuleContext(0, UrlContext);
	}
	public launch(): LaunchContext | undefined {
		return this.tryGetRuleContext(0, LaunchContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_all; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterAll) listener.enterAll(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitAll) listener.exitAll(this);
	}
}


export class ExpandContext extends ParserRuleContext {
	public EXPAND(): TerminalNode { return this.getToken(INTENTSParser.EXPAND, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(INTENTSParser.WHITESPACE, 0); }
	public STRING(): TerminalNode { return this.getToken(INTENTSParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_expand; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterExpand) listener.enterExpand(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitExpand) listener.exitExpand(this);
	}
}


export class UrlContext extends ParserRuleContext {
	public URL(): TerminalNode { return this.getToken(INTENTSParser.URL, 0); }
	public WHITESPACE(): TerminalNode { return this.getToken(INTENTSParser.WHITESPACE, 0); }
	public uri(): UriContext {
		return this.getRuleContext(0, UriContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_url; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterUrl) listener.enterUrl(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitUrl) listener.exitUrl(this);
	}
}


export class LaunchContext extends ParserRuleContext {
	public LAUNCH(): TerminalNode { return this.getToken(INTENTSParser.LAUNCH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_launch; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterLaunch) listener.enterLaunch(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitLaunch) listener.exitLaunch(this);
	}
}


export class UriContext extends ParserRuleContext {
	public scheme(): SchemeContext {
		return this.getRuleContext(0, SchemeContext);
	}
	public host(): HostContext {
		return this.getRuleContext(0, HostContext);
	}
	public login(): LoginContext | undefined {
		return this.tryGetRuleContext(0, LoginContext);
	}
	public port(): PortContext | undefined {
		return this.tryGetRuleContext(0, PortContext);
	}
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public frag(): FragContext | undefined {
		return this.tryGetRuleContext(0, FragContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(INTENTSParser.WS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_uri; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterUri) listener.enterUri(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitUri) listener.exitUri(this);
	}
}


export class SchemeContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_scheme; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterScheme) listener.enterScheme(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitScheme) listener.exitScheme(this);
	}
}


export class HostContext extends ParserRuleContext {
	public hostname(): HostnameContext | undefined {
		return this.tryGetRuleContext(0, HostnameContext);
	}
	public hostnumber(): HostnumberContext | undefined {
		return this.tryGetRuleContext(0, HostnumberContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_host; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterHost) listener.enterHost(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitHost) listener.exitHost(this);
	}
}


export class HostnameContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_hostname; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterHostname) listener.enterHostname(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitHostname) listener.exitHostname(this);
	}
}


export class HostnumberContext extends ParserRuleContext {
	public DIGITS(): TerminalNode[];
	public DIGITS(i: number): TerminalNode;
	public DIGITS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(INTENTSParser.DIGITS);
		} else {
			return this.getToken(INTENTSParser.DIGITS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_hostnumber; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterHostnumber) listener.enterHostnumber(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitHostnumber) listener.exitHostnumber(this);
	}
}


export class PortContext extends ParserRuleContext {
	public DIGITS(): TerminalNode { return this.getToken(INTENTSParser.DIGITS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_port; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterPort) listener.enterPort(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitPort) listener.exitPort(this);
	}
}


export class PathContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_path; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterPath) listener.enterPath(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitPath) listener.exitPath(this);
	}
}


export class UserContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_user; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterUser) listener.enterUser(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitUser) listener.exitUser(this);
	}
}


export class LoginContext extends ParserRuleContext {
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public password(): PasswordContext {
		return this.getRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_login; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterLogin) listener.enterLogin(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitLogin) listener.exitLogin(this);
	}
}


export class PasswordContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_password; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterPassword) listener.enterPassword(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitPassword) listener.exitPassword(this);
	}
}


export class FragContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_frag; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterFrag) listener.enterFrag(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitFrag) listener.exitFrag(this);
	}
}


export class QueryContext extends ParserRuleContext {
	public search(): SearchContext | undefined {
		return this.tryGetRuleContext(0, SearchContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_query; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterQuery) listener.enterQuery(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitQuery) listener.exitQuery(this);
	}
}


export class SearchContext extends ParserRuleContext {
	public searchparameter(): SearchparameterContext[];
	public searchparameter(i: number): SearchparameterContext;
	public searchparameter(i?: number): SearchparameterContext | SearchparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SearchparameterContext);
		} else {
			return this.getRuleContext(i, SearchparameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_search; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterSearch) listener.enterSearch(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitSearch) listener.exitSearch(this);
	}
}


export class SearchparameterContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(INTENTSParser.DIGITS, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(INTENTSParser.HEX, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_searchparameter; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterSearchparameter) listener.enterSearchparameter(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitSearchparameter) listener.exitSearchparameter(this);
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(INTENTSParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return INTENTSParser.RULE_string; }
	@Override
	public enterRule(listener: INTENTSListener): void {
		if (listener.enterString) listener.enterString(this);
	}
	@Override
	public exitRule(listener: INTENTSListener): void {
		if (listener.exitString) listener.exitString(this);
	}
}


