// Generated from ./metadsl.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by metadslParser.
function metadslListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

metadslListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
metadslListener.prototype.constructor = metadslListener;

// Enter a parse tree produced by metadslParser#metadsl.
metadslListener.prototype.enterMetadsl = function(ctx) {
};

// Exit a parse tree produced by metadslParser#metadsl.
metadslListener.prototype.exitMetadsl = function(ctx) {
};


// Enter a parse tree produced by metadslParser#obj.
metadslListener.prototype.enterObj = function(ctx) {
};

// Exit a parse tree produced by metadslParser#obj.
metadslListener.prototype.exitObj = function(ctx) {
};


// Enter a parse tree produced by metadslParser#pair.
metadslListener.prototype.enterPair = function(ctx) {
};

// Exit a parse tree produced by metadslParser#pair.
metadslListener.prototype.exitPair = function(ctx) {
};


// Enter a parse tree produced by metadslParser#key.
metadslListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by metadslParser#key.
metadslListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by metadslParser#value.
metadslListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by metadslParser#value.
metadslListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by metadslParser#arr.
metadslListener.prototype.enterArr = function(ctx) {
};

// Exit a parse tree produced by metadslParser#arr.
metadslListener.prototype.exitArr = function(ctx) {
};


// Enter a parse tree produced by metadslParser#number.
metadslListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by metadslParser#number.
metadslListener.prototype.exitNumber = function(ctx) {
};



exports.metadslListener = metadslListener;