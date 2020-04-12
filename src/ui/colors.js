import { TinyColor } from '@ctrl/tinycolor';

const defaultColor = '#595959';
const primary = '#0a3d62';
const secondary = defaultColor;
const success = '#38ada9';
const info = '#4a69bd';
const warning = '#fa983a';
const danger = '#eb2f06';

const generateColor = (color) => ({
  lighter: new TinyColor(color).lighten(20),
  light: new TinyColor(color).lighten(),
  base: color,
  dark: new TinyColor(color).darken(),
  darker: new TinyColor(color).darken(20),
});

export default {
  white: generateColor('white'),
  black: generateColor('black'),
  default: generateColor(defaultColor),
  primary: generateColor(primary),
  secondary: generateColor(secondary),
  success: generateColor(success),
  info: generateColor(info),
  warning: generateColor(warning),
  danger: generateColor(danger),
};
