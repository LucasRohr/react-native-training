const hexToRGB = ({hex, alpha, whiteAdditional = 0}) => {
  const r = parseInt(hex.slice(1, 3), 16) + whiteAdditional;
  const g = parseInt(hex.slice(3, 5), 16) + whiteAdditional;
  const b = parseInt(hex.slice(5, 7), 16) + whiteAdditional;

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};

export {hexToRGB};
