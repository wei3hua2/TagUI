grammar Rps;

file : statement*;

statement : (control | expression)+ comment? '\r'? '\n';

control   : KEYWORD (argument | variable)* ;
expression : function (argument | variable)* ;

function : FUNCTION;
keyword  : KEYWORD;

variable : VARIABLE;
argument : ARGUMENT;
comment : COMMT ;

KEYWORD                 : '.' RESERVED ' '*;
FUNCTION                : STRING '.' ' '*;
VARIABLE                : [$] STRING ' '*;

ARGUMENT                : '"' ('""'|~'"')* '"' | NUMBER;
STRING  : [a-zA-Z0-9]+;
NUMBER  : [0-9]+;
COMMT : ';' ~[\r\n]*;

WS : [ \t\r\n]+ -> skip ;

RESERVED :
    'if' | 'elif' | 'else' |
    'import' | 'export' | 'as' | 'def' | 'var' |
    'not' | 'or' | 'and' |  'true' | 'false' | 'none' | 'is' |
    'throw' | 'raise' | 'finally' | 'catch' ;


//REGEX
// .if OUTPUT not true assert. false
// .if OUTPUT is true {
//  assert. true
//} elif OUTPUT is false {
//  assert. false
//}

//{} is use for object and if/else scoping
//SHORTHAND :
//    + | - | * | / | ++ | -- | ! |
//    { | } | [ | ];

//common functions
//     'load' | 'map' | 'reduce' | 'filter'
