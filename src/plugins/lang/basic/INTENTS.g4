grammar INTENTS;
/*
 * Parser Rules
 */
all        : (expand | url | launch);
expand     : EXPAND WHITESPACE STRING  ;
url        : URL WHITESPACE uri     ;
launch     : LAUNCH ;

/*
 * Lexer Rules
 */

fragment E          : ('E'|'e') ;
fragment X          : ('X'|'x') ;
fragment P          : ('P'|'p') ;
fragment A          : ('A'|'a') ;
fragment N          : ('N'|'n') ;
fragment U          : ('U'|'u') ;
fragment R          : ('R'|'r') ;
fragment L          : ('L'|'l') ;
fragment D          : ('D'|'d') ;
fragment C          : ('C'|'c') ;
fragment H          : ('H'|'h') ;

EXPAND              : E X P A N D     ;
URL                 : U R L              ;
LAUNCH              : L A U N C H              ;

//HTTPPATH : uri ;
uri : scheme '://' login? host (':' port)? ('/' path)? query? frag? WS? ;

scheme : string ;
host : '/'? (hostname | hostnumber) ;
hostname : string ('.' string)* ;
hostnumber : DIGITS '.' DIGITS '.' DIGITS '.' DIGITS ;
port : DIGITS ;
path : string ('/' string)* ;
user : string ;
login : user ':' password '@' ;
password : string ;
frag: ('#' string) ;
query : ('?' search) ;
search : searchparameter ('&' searchparameter)* ;
searchparameter : string ('=' (string | DIGITS | HEX))? ;
string : STRING ;
DIGITS : [0-9] + ;
HEX : ('%' [a-fA-F0-9] [a-fA-F0-9]) + ;
STRING : ([a-zA-Z~0-9] | HEX) ([a-zA-Z0-9.-] | HEX)* ;
WS : [\r\n] + ;
WHITESPACE : (' ')+ ;
