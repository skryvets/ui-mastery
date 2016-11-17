#Starter boilerplate
###Brief description of what's inside:
* Index.html with predefined basic tags
* SCSS with empty tags defined in HTML
* Two additional predefined SCSS files like reset.scss and common.scss for appropriate goals.
* Js folder with JQuery and future javascript files that should be added into js/src folder.

###Folder Structure
```
|-- .sme-boilerplate
    |-- content-images
    |-- css
        |-- style.css
    |-- images
    |-- js
        |-- lib
        |-- src
        all.min.js
    |-- scss
        |-- common
        |-- components
        style.scss
    gulpfile.js
    index.html
    package.json
    README.MD
```

###Features
* SCSS compilation and minification to "css" folder. When compilation is finished unnecessary directories like "common" and "components" are removed. As a result in "css" folder we'll see only minified "style.css" file.
* Javascript concatenation and minification. All Javascript files from "./js/src" folder will be concatenated in "all.min.js" file and then minified.
* Built-in WebServer with livereload is included.

###How to install
* Download or clone this repo.
* Being in the folder run ```npm install``` in order to install gulp and its plugins
* In order to start server write `````gulp`````

###How to use
* SCSS styles should be putted inside ```scss/components``` folder
* JS files should be putted into ```js/src``` folder