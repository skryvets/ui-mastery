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
                main.js
            |-- tests
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
    .eslintrc
    .gitignore
    gulpfile.js
    index.html
    jspm_config.js
    karma.conf.js
    package.json
    package-lock.json
    README.MD
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
* After that do ```jspm init``` to install ES6 bundler JSPM

### How to use

There are three gulp task which are configured:

* `gulp` - default task. Runs file watcher for sass, javascript and icons
* `gulp start` - the same as gulp, but also runs local development server which is available via address `http://localhost:8080/`. Server adds livereload which performs page refresh when html, sass, or javascript file was changed. Works only with html files. Livereload wouldn't work with php/apache.
* `gulp dev` - just compiles JS and SCSS with sourcemaps. JS and SCSS wouln't be minified. Can be useful for dev purposes. This is "one-time" compilation (Without File Watcher).
* `gulp prod` - production build. Compiles JS/SCSS, minifies and removes sourcemaps.

Compiled versions of CSS/JS files could be found in the `dist` folder which is located in the root directory. 

#### Unit tests

* `karma start` - runs karma server and file watcher.
* `karma start --single-run` - runs karma server, performs unit tests and than closed.
