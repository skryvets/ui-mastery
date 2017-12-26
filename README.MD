# UI-mastery
### Brief description of what's inside:
* Index.html with predefined basic tags
* SCSS with selectors defined in HTML
* Javascript ES6 syntax and modules bundling is supported
* SVG icon font builder
* Unit tests for javascript (Karma/Jasmine)

### Folder Structure
```
|-- .ui-mastery
    |-- content-images
    |-- dist
    |-- fonts
    |-- icons
    |-- src
        |-- js
            |-- actions
                |-- helpers
                |-- vendor
                |-- webpack
                main.js
            |-- tests
                |-- helpers
                    uimastery.spec.js
                sample.spec.js
        |-- scss
            |-- common
            |-- components
            |-- grid
                |-- motif-grid
                |-- table-grid
            |-- helpers
            |-- templates
            |-- vendor
            _config.scss
            _icons.scss
            _typography.scss
            style.scss
    .babelrc
    index.html
    karma.conf.js
    package.json
    webpack.config.js
```

### Features of the packaged
* SCSS compilation and minification to "dist/style.css" file.
* Sourcemaps of SCSS are available during development.
* Javascript ES6 Modules bundling. Sourcemaps are available during development. Minification is available for prod version
* Built-in WebServer with livereload is included.
* SVG icon font builder. Put your svg icons into the icons/svg folder. For more information please read [css-tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).
* Unit tests for javascript (Karma/Jasmine).

### Grid Systems
* [MDO table grid system](http://mdo.github.io/table-grid/) based on `display: table` property. 
* Grid system from [Motif Framework](https://github.com/MotifFramework/Motif) rewritten in SCSS.  

### How to install

Beforehand you need to install [Karma](https://www.npmjs.com/package/karma) and [Gulp](https://www.npmjs.com/package/gulp) globally. After that:

* Download or clone this repo.
* Being in the folder run ```npm install``` in order to install gulp and its plugins

### How to use

There are three gulp task which are configured:

* `npm start` - default task. Runs file watcher for sass, javascript and icon files. Works only with php/apache.
* `npm build` - production build. Compiles JS/SCSS, minifies and removes sourcemaps.

Compiled versions of CSS/JS files could be found in the `dist` folder which is located in the root directory. 

#### Unit tests

* `karma start` - runs karma server and file watcher.
* `karma start --single-run` - runs karma server, performs unit tests and than closed.
