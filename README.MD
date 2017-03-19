# Init UI
### Brief description of what's inside:
* Index.html with predefined basic tags
* SCSS with selectors defined in HTML
* Javascript ES6 support only.

### Folder Structure
```
|-- .initui
    |-- content-images
    |-- images
    |-- src
        |-- js
            |-- vendor
            |-- main.js
        |-- scss
            |-- common
            |-- components
            |-- grid
                |-- motif-grid
                |-- table-grid
            |-- helpers
            _config.scss
            style.scss
    gulpfile.js
    index.html
    jspm_config.js
    package.json
    README.MD
```

### Features of the packaged
* SCSS compilation and minification to "dist/style.css" file.
* Sourcemaps of SCSS are available during development.
* Javascript ES6 Modules bundling. Sourcemaps are available during development. Minification is available for prod version 
* Built-in WebServer with livereload is included.

### Grid Systems
* [MDO table grid system](http://mdo.github.io/table-grid/) based on `display: table` property. 
* Grid system from [Motif Framework](https://github.com/MotifFramework/Motif) rewritten in SCSS.  

### How to install
* Download or clone this repo.
* Being in the folder run ```npm install``` in order to install gulp and its plugins

### How to use
* In order to start server execute `````gulp start`````
* Local WebServer is accessible via address ```http://localhost:8080/```
* SCSS files should be inside ```src/scss``` folder. Then you can import any scss into main ```styles.scss``` file
* Execute ```gulp dev``` in order compile JS and SCSS and leave SCSS sourcemaps. JS and SCSS wouln't be minified. Can be useful for dev purposes. This is "one-time" compilation (Without File Watcher).
* Execute ```gulp prod``` in order to remove SCSS sourcemaps and minify js/css. This is "one-time" compilation (Without File Watcher).
