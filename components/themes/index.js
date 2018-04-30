const theme = {};

theme.palette = {
  primary: ['#009688', '#B2DFDB', '#4DB6AC', '#00796B'], // teal 500, 100, 300, 700
  secondary: ['#607D8B', '#CFD8DC', '#455A64'], // blue grey 500, 100, 700
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#FFFFFF', '#FAFAFA', '#EEEEEE'],
  grayscale: [
    '#212121', // 900
    '#424242', // 800
    '#616161', // 700
    '#9e9e9e', // 500
    '#bdbdbd', // 400
    '#e0e0e0', // 300
    '#eeeeee', // 200
    '#ffffff', // white
  ],
};

theme.fonts = {
  primary: 'Roboto, Helvetica Neue, Helvetica, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

theme.sizes = {
  maxWidth: '1100px',
};

export default theme;
