(function(modules) { // webpackBootstrap
// The module cache
 	var installedModules = {};

// The require function
 	function _webpack_require_(moduleId) {

// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, _webpack_require_);

// Flag the module as loaded
 		module.l = true;

// Return the exports of the module
 		return module.exports;
 	}


// expose the modules object (_webpack_modules_)
 	_webpack_require_.m = modules;

// expose the module cache
 	_webpack_require_.c = installedModules;

// define getter function for harmony exports
 	_webpack_require_.d = function(exports, name, getter) {
 		if(!_webpack_require_.o(exports, name)) {
 			Object.defineProperty(exports, name, {
 				configurable: false,
 				enumerable: true,
				get: getter
 			});
 		}
 	};

// getDefaultExport function for compatibility with non-harmony modules
_webpack_require_.n = function(module) {
	var getter = module && module.__esModule ?
	function getDefault() { return module['default']; } :
    function getModuleExports() { return module; };
_webpack_require_.d(getter, 'a', getter);
return getter;
};

/// Object.prototype.hasOwnProperty.call
_webpack_require_.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

// _webpack_public_path_
_webpack_require_.p = "";

// Load entry module and return exports
	return _webpack_require(webpack_require_.s = 0);
})

([

(function(module, exports) {

var suits, numbers, suitsBottom, i; 
var card ={
 suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
 suitsBottom: ["&#9830", "&#9829", "&#9824", "&#9827"],
 numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

};

function pullNumber() {
	var theNumber = Math.floor(Math.random() * (card.numbers.length));
	document.getElementById('randomNumber').innerHTML = card.numbers[theNumber];
}

function pullBothSuits(){
	var allSuits = Math.floor(Math.random() * (card.suits.length));
	document.getElementById('topSuit').innerHTML = card.suits[allSuits];
	document.getElementById('bottomSuit').innerHTML = card.suits[allSuits];
	
	
	if (card.suits[allSuits]==="&#9830" || card.suits[allSuits]==="&#9829"){
		document.getElementById("theCard").classList.add("redSuit");
	}else if (card.suits[allSuits]==="&#9827" || card.suits[allSuits]==="&#9824"){
			document.getElementById("theCard").classList.remove("redSuit");
	
	}
}

window.wholeCard = function(){
	pullNumber();
	pullBothSuits();

};
})
]);