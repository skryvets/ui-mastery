#Init UI
###Brief description of what's inside:
* Index.html with predefined basic tags
* SCSS with selectors defined in HTML
* Javascript ES5 support only.

###Folder Structure
```
|-- .sme-boilerplate
    |-- content-images
    |-- images
    |-- src
        |-- js
            |-- vendor
            |-- main.js
        |-- scss
            |-- common
            |-- components
            |-- helpers
            style.scss
    gulpfile.js
    index.html
    package.json
    README.MD
```

###Features
* SCSS compilation and minification to "dist/style.css" file.
* Sourcemaps of SCSS are available during development.
* Javascript minification.
* Built-in WebServer with livereload is included.

###How to install
* Download or clone this repo.
* Being in the folder run ```npm install``` in order to install gulp and its plugins

###How to use
* In order to start server execute `````gulp start`````
* Local WebServer is accessible via address ```http://localhost:8080/```
* SCSS files should be inside ```src/scss``` folder. Then you can import any scss into main ```styles.scss``` file
* Execute ```gulp prod``` in order to remove SCSS sourcemaps and minify js/css.
* JS files should be inside ```src/js``` folder