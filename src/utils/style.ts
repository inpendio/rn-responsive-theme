type CalcStyleResult = any;
type CalcListenersResult = string[];

export const calculateStyle = (style, themeState): CalcStyleResult => {
  if (typeof style === 'string' && style[0] === '$') {
    if (themeState.globalStyles[style]) return themeState.globalStyles[style];
    if (
      themeState.localStyles &&
      themeState.localStyles[style] &&
      themeState.globalStyles[themeState.localStyles[style]]
    )
      return themeState.globalStyles[themeState.localStyles[style]];
    if (themeState.localStyles && themeState.localStyles[style])
      return themeState.localStyles[style];
    return style;
  }
  if (typeof style !== 'object') {
    return style;
  }
  let out = {};
  const overrides: object[] = [];
  Object.keys(style).forEach(key => {
    if (key[0] === '$') {
      overrides.push(calculateStyle(themeState.globalStyles[key], themeState));
    } else if (key[0] !== '@') {
      out[key] = calculateStyle(style[key], themeState);
    } else if (themeState[key]) {
      overrides.push(calculateStyle(style[key], themeState));
    }
  });
  overrides.forEach(override => {
    out = { ...out, ...override };
  });
  return out;
};

export const getListeners = (style): CalcListenersResult => {
  const res: CalcListenersResult = [];
  Object.keys(style).forEach(key => {
    if (key[0] === '@') {
      res.push(key);
    }
    if (typeof style[key] === 'object') {
      const subListeners = getListeners(style[key]);
      subListeners.forEach(sl => {
        if (res.indexOf(sl) === -1) res.push(sl);
      });
    }
  });
  return res;
};
