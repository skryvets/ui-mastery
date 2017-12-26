import returnFive from './sample'
import webpackSvgStore from './webpack/webpack-svgstore'

class App {
    constructor() {
        returnFive()
        webpackSvgStore()
    }
}

new App();
