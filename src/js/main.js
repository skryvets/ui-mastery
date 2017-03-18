/*
Main JavaScript File
*/

(function ($) {
    
    "use strict";
    
    var JS = function () {
        this.initExample();
    };
    
    JS.prototype.initExample = function () {
        console.log("Hello world");
    };
    
    new JS();
    
}(jQuery));

