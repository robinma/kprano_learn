(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file krpano配置参数
 */

var krconfig = {
    swfUrl: '/static/vtour/tour.swf',
    id: 'krpanoObject',
    target: 'pano',
    xml: '/static/vtour/tour.xml'

};

var MainInit = function () {
    function MainInit() {
        _classCallCheck(this, MainInit);

        this.init();
    }

    _createClass(MainInit, [{
        key: 'init',
        value: function init() {
            var self = this;
            embedpano({ swf: krconfig.swfUrl, xml: krconfig.xml, target: krconfig.target, html5: "prefer", mobilescale: 1.0, passQueryParameters: true, onready: self.krpanoReady });
        }
    }, {
        key: 'krpanoReady',
        value: function krpanoReady(krpano) {

            krpano.call("trace(krpano is ready...)");
            console.log('---|||');
        }
    }]);

    return MainInit;
}();

exports.default = MainInit;

},{}]},{},[1]);
