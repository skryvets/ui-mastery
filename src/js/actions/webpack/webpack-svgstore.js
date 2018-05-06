export default function () {
  svgStore.init();
}

let svgStore = {
  init: function () {
    let __svg__ = { path: '../../../../icons/svg/**/*.svg', name: '../svg-sprite.svg' };
  }
}
