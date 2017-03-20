import jQuery from './vendor/jquery-3.2.0.min.js';

(function ($) {
    
    "use strict";
    
    class JS {
        constructor(){
            this.initExample();
        }
    }
    
     function initExample() {
        console.log("Hello world from es6!");
        
        setTimeout(() => {
            console.log("Hello world from es6 with Fat Arrow Function!");
        }, 300);
    }
    
    new JS();
    
}(jQuery));
