/// <reference types="estree" />


import esprima = require('esprima');
import * as ESTree from 'estree';

var token: esprima.Token;
var comment: esprima.Comment;
var program: ESTree.Program;
var string: string;

// esprima
string = esprima.version;
program = esprima.parse('code');
program = esprima.parse('code', {range: true});
token = esprima.tokenize('code')[0];
token = esprima.tokenize('code', {range: true})[0];

// Token
string = token.type;
string = token.value;

// Comment
string = comment.value;
