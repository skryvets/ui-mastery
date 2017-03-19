import jQuery from './vendor/jquery-3.2.0.min.js';

(function ($) {
    
    "use strict";
    
    let JS = function () {
        this.initExample();
    };
    
    JS.prototype.initExample = function () {
        console.log("Hello world from es6!");
        
        setTimeout(() => {
            console.log("Hello world from es6 with setTimeout!");
        }, 300);
    };
    
    new JS();
    
}(jQuery));
