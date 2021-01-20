// Generated from ./metadsl.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var metadslListener = require('./metadslListener').metadslListener;
var grammarFileName = "metadsl.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0011L\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0005\u0002\u0012\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001a\n",
    "\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003\u0003\u0003\u0005\u0003",
    " \n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "&\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u00063\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u00079\n\u0007\f\u0007\u000e\u0007<\u000b\u0007\u0003\u0007\u0005",
    "\u0007?\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007E\n\u0007\u0003\b\u0005\bH\n\b\u0003\b\u0003\b\u0003\b\u0002\u0002",
    "\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0004\u0005\u0002\u000b\f\u000e",
    "\u000e\u0010\u0010\u0003\u0002\r\u000eP\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0004%\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002",
    "\b+\u0003\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002\fD\u0003\u0002",
    "\u0002\u0002\u000eG\u0003\u0002\u0002\u0002\u0010\u0012\u0005\n\u0006",
    "\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002",
    "\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u0002\u0002",
    "\u0003\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0003\u0002",
    "\u0002\u0016\u001b\u0005\u0006\u0004\u0002\u0017\u0018\u0007\u0004\u0002",
    "\u0002\u0018\u001a\u0005\u0006\u0004\u0002\u0019\u0017\u0003\u0002\u0002",
    "\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001e \u0007\u0004\u0002",
    "\u0002\u001f\u001e\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 !\u0003\u0002\u0002\u0002!\"\u0007\u0005\u0002\u0002\"&\u0003",
    "\u0002\u0002\u0002#$\u0007\u0003\u0002\u0002$&\u0007\u0005\u0002\u0002",
    "%\u0015\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&\u0005\u0003",
    "\u0002\u0002\u0002\'(\u0005\b\u0005\u0002()\u0007\u0006\u0002\u0002",
    ")*\u0005\n\u0006\u0002*\u0007\u0003\u0002\u0002\u0002+,\t\u0002\u0002",
    "\u0002,\t\u0003\u0002\u0002\u0002-3\u0007\f\u0002\u0002.3\u0005\u000e",
    "\b\u0002/3\u0005\u0004\u0003\u000203\u0005\f\u0007\u000213\u0007\u000b",
    "\u0002\u00022-\u0003\u0002\u0002\u00022.\u0003\u0002\u0002\u00022/\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u0002",
    "3\u000b\u0003\u0002\u0002\u000245\u0007\u0007\u0002\u00025:\u0005\n",
    "\u0006\u000267\u0007\u0004\u0002\u000279\u0005\n\u0006\u000286\u0003",
    "\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ":;\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002",
    "\u0002=?\u0007\u0004\u0002\u0002>=\u0003\u0002\u0002\u0002>?\u0003\u0002",
    "\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0007\b\u0002\u0002AE\u0003",
    "\u0002\u0002\u0002BC\u0007\u0007\u0002\u0002CE\u0007\b\u0002\u0002D",
    "4\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002E\r\u0003\u0002\u0002",
    "\u0002FH\u0007\u000f\u0002\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002",
    "\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\t\u0003\u0002\u0002J\u000f",
    "\u0003\u0002\u0002\u0002\u000b\u0011\u001b\u001f%2:>DG"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "SINGLE_LINE_COMMENT", 
                      "MULTI_LINE_COMMENT", "LITERAL", "STRING", "NUMBER", 
                      "NUMERIC_LITERAL", "SYMBOL", "IDENTIFIER", "WS" ];

var ruleNames =  [ "metadsl", "obj", "pair", "key", "value", "arr", "number" ];

function metadslParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

metadslParser.prototype = Object.create(antlr4.Parser.prototype);
metadslParser.prototype.constructor = metadslParser;

Object.defineProperty(metadslParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

metadslParser.EOF = antlr4.Token.EOF;
metadslParser.T__0 = 1;
metadslParser.T__1 = 2;
metadslParser.T__2 = 3;
metadslParser.T__3 = 4;
metadslParser.T__4 = 5;
metadslParser.T__5 = 6;
metadslParser.SINGLE_LINE_COMMENT = 7;
metadslParser.MULTI_LINE_COMMENT = 8;
metadslParser.LITERAL = 9;
metadslParser.STRING = 10;
metadslParser.NUMBER = 11;
metadslParser.NUMERIC_LITERAL = 12;
metadslParser.SYMBOL = 13;
metadslParser.IDENTIFIER = 14;
metadslParser.WS = 15;

metadslParser.RULE_metadsl = 0;
metadslParser.RULE_obj = 1;
metadslParser.RULE_pair = 2;
metadslParser.RULE_key = 3;
metadslParser.RULE_value = 4;
metadslParser.RULE_arr = 5;
metadslParser.RULE_number = 6;

function MetadslContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_metadsl;
    return this;
}

MetadslContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetadslContext.prototype.constructor = MetadslContext;

MetadslContext.prototype.EOF = function() {
    return this.getToken(metadslParser.EOF, 0);
};

MetadslContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

MetadslContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterMetadsl(this);
	}
};

MetadslContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitMetadsl(this);
	}
};




metadslParser.MetadslContext = MetadslContext;

metadslParser.prototype.metadsl = function() {

    var localctx = new MetadslContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, metadslParser.RULE_metadsl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metadslParser.T__0) | (1 << metadslParser.T__4) | (1 << metadslParser.LITERAL) | (1 << metadslParser.STRING) | (1 << metadslParser.NUMBER) | (1 << metadslParser.NUMERIC_LITERAL) | (1 << metadslParser.SYMBOL))) !== 0)) {
            this.state = 14;
            this.value();
        }

        this.state = 17;
        this.match(metadslParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_obj;
    return this;
}

ObjContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjContext.prototype.constructor = ObjContext;

ObjContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterObj(this);
	}
};

ObjContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitObj(this);
	}
};




metadslParser.ObjContext = ObjContext;

metadslParser.prototype.obj = function() {

    var localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, metadslParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 35;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.match(metadslParser.T__0);
            this.state = 20;
            this.pair();
            this.state = 25;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 21;
                    this.match(metadslParser.T__1);
                    this.state = 22;
                    this.pair(); 
                }
                this.state = 27;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
            }

            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===metadslParser.T__1) {
                this.state = 28;
                this.match(metadslParser.T__1);
            }

            this.state = 31;
            this.match(metadslParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.match(metadslParser.T__0);
            this.state = 34;
            this.match(metadslParser.T__2);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitPair(this);
	}
};




metadslParser.PairContext = PairContext;

metadslParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, metadslParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.key();
        this.state = 38;
        this.match(metadslParser.T__3);
        this.state = 39;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.STRING = function() {
    return this.getToken(metadslParser.STRING, 0);
};

KeyContext.prototype.IDENTIFIER = function() {
    return this.getToken(metadslParser.IDENTIFIER, 0);
};

KeyContext.prototype.LITERAL = function() {
    return this.getToken(metadslParser.LITERAL, 0);
};

KeyContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(metadslParser.NUMERIC_LITERAL, 0);
};

KeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterKey(this);
	}
};

KeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitKey(this);
	}
};




metadslParser.KeyContext = KeyContext;

metadslParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, metadslParser.RULE_key);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metadslParser.LITERAL) | (1 << metadslParser.STRING) | (1 << metadslParser.NUMERIC_LITERAL) | (1 << metadslParser.IDENTIFIER))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(metadslParser.STRING, 0);
};

ValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.arr = function() {
    return this.getTypedRuleContext(ArrContext,0);
};

ValueContext.prototype.LITERAL = function() {
    return this.getToken(metadslParser.LITERAL, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitValue(this);
	}
};




metadslParser.ValueContext = ValueContext;

metadslParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, metadslParser.RULE_value);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case metadslParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 43;
            this.match(metadslParser.STRING);
            break;
        case metadslParser.NUMBER:
        case metadslParser.NUMERIC_LITERAL:
        case metadslParser.SYMBOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
            this.number();
            break;
        case metadslParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 45;
            this.obj();
            break;
        case metadslParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 46;
            this.arr();
            break;
        case metadslParser.LITERAL:
            this.enterOuterAlt(localctx, 5);
            this.state = 47;
            this.match(metadslParser.LITERAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_arr;
    return this;
}

ArrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrContext.prototype.constructor = ArrContext;

ArrContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterArr(this);
	}
};

ArrContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitArr(this);
	}
};




metadslParser.ArrContext = ArrContext;

metadslParser.prototype.arr = function() {

    var localctx = new ArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, metadslParser.RULE_arr);
    var _la = 0; // Token type
    try {
        this.state = 66;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(metadslParser.T__4);
            this.state = 51;
            this.value();
            this.state = 56;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 52;
                    this.match(metadslParser.T__1);
                    this.state = 53;
                    this.value(); 
                }
                this.state = 58;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
            }

            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===metadslParser.T__1) {
                this.state = 59;
                this.match(metadslParser.T__1);
            }

            this.state = 62;
            this.match(metadslParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(metadslParser.T__4);
            this.state = 65;
            this.match(metadslParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = metadslParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(metadslParser.NUMERIC_LITERAL, 0);
};

NumberContext.prototype.NUMBER = function() {
    return this.getToken(metadslParser.NUMBER, 0);
};

NumberContext.prototype.SYMBOL = function() {
    return this.getToken(metadslParser.SYMBOL, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof metadslListener ) {
        listener.exitNumber(this);
	}
};




metadslParser.NumberContext = NumberContext;

metadslParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, metadslParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===metadslParser.SYMBOL) {
            this.state = 68;
            this.match(metadslParser.SYMBOL);
        }

        this.state = 71;
        _la = this._input.LA(1);
        if(!(_la===metadslParser.NUMBER || _la===metadslParser.NUMERIC_LITERAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.metadslParser = metadslParser;
