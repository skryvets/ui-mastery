import $ from './vendor/jquery-3.2.0.min.js';
import jQuery from './vendor/jquery-3.2.0.min.js';

(function ($) {
    
    "use strict";
    
    var JS = function () {
        this.initExample();
    };
    
    JS.prototype.initExample = function () {
        console.log("Hello world from es6");
    };
    
    new JS();
    
}(jQuery));
