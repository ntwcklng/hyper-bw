const WHITE = '#ffffff'
const BLACK = '#000000'
const backgroundColor = BLACK
const foregroundColor = WHITE
const borderColor = backgroundColor
const cursorColor = WHITE

const colors = {
  black: BLACK,
  red: WHITE,
  green: WHITE,
  yellow: WHITE,
  blue: WHITE,
  magenta: WHITE,
  cyan: WHITE,
  white: WHITE,
  lightBlack: WHITE,
  lightRed: WHITE,
  lightGreen: WHITE,
  lightYellow: WHITE,
  lightBlue: WHITE,
  lightMagenta: WHITE,
  lightCyan: WHITE,
  colorCubes: WHITE,
  grayscale: foregroundColor
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
              backgroundColor: ${WHITE} !important;
              border-color: ${WHITE} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid ${WHITE};
      }
    `
  });
};