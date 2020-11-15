'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Orientation = _interopDefault(require('react-native-orientation-locker'));
var reactNative = require('react-native');
var reactNativeDeviceInfo = require('react-native-device-info');

var ORIENTATIONS;

(function (ORIENTATIONS) {
  ORIENTATIONS["PORTRAIT"] = "portrait";
  ORIENTATIONS["LANDSCAPE"] = "landscape";
  ORIENTATIONS["PORTRAIT-UPSIDEDOWN"] = "portrait";
  ORIENTATIONS["LANDSCAPE-LEFT"] = "landscape";
  ORIENTATIONS["LANDSCAPE-RIGHT"] = "landscape";
})(ORIENTATIONS || (ORIENTATIONS = {}));

var OrientationProviderDefaults = {
  currentOrientation: ORIENTATIONS.PORTRAIT,
  lockOrientation: function lockOrientation() {}
};
var OrientationContext = /*#__PURE__*/React.createContext(OrientationProviderDefaults);
function OrientationProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(ORIENTATIONS.PORTRAIT),
      currentOrientation = _useState[0],
      setOrientation = _useState[1];

  var lockOrientation = React.useCallback(function (mode) {
    if (!mode) return;
    if (ORIENTATIONS[mode] === ORIENTATIONS.LANDSCAPE) Orientation.lockToLandscape();else if (ORIENTATIONS[mode] === ORIENTATIONS.PORTRAIT) Orientation.lockToPortrait();
  }, []);

  var setOrientationListener = function setOrientationListener(newOrientation) {
    if (newOrientation) setOrientation(ORIENTATIONS[newOrientation]);
  };

  React.useEffect(function () {
    Orientation.getDeviceOrientation(setOrientationListener);
    Orientation.addOrientationListener(setOrientationListener);
    return Orientation.removeAllListeners();
  }, []);
  console.log({
    currentOrientation: currentOrientation
  });
  return React__default.createElement(OrientationContext.Provider, {
    value: {
      currentOrientation: currentOrientation,
      lockOrientation: lockOrientation
    }
  }, children);
}

var useBackgroundHandler = function useBackgroundHandler(_ref) {
  var onActive = _ref.onActive,
      onBackground = _ref.onBackground;

  var _useState = React.useState(reactNative.AppState.currentState),
      appState = _useState[0],
      setAppState = _useState[1];

  var handleAppStateChange = function handleAppStateChange(nextAppState) {
    if (appState.match(/inactive|background/) && nextAppState === 'active' && !!onActive) {
      onActive();
    } else if (appState.match(/inactive|active/) && nextAppState === 'background' && !!onBackground) {
      onBackground();
    }

    setAppState(nextAppState);
  };

  React.useEffect(function () {
    reactNative.AppState.addEventListener('change', handleAppStateChange);
    return function () {
      reactNative.AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);
};

function useBasicInfo() {
  var _useContext = React.useContext(BasicContext),
      width = _useContext.width,
      height = _useContext.height,
      OS = _useContext.OS,
      isXs = _useContext.isXs,
      isTablet = _useContext.isTablet;

  var systemTheme = reactNative.useColorScheme() || 'light';

  var _useState = React.useState({
    '@android': OS === 'android',
    '@ios': OS === 'ios',
    '@web': OS === 'web',
    '@tablet': isTablet,
    '@xs': isXs,
    width: width,
    height: height,
    systemTheme: systemTheme
  }),
      basicInfo = _useState[0],
      setBasicInfo = _useState[1];

  React.useEffect(function () {
    setBasicInfo({
      '@android': OS === 'android',
      '@ios': OS === 'ios',
      '@web': OS === 'web',
      '@tablet': isTablet,
      '@xs': isXs,
      width: width,
      height: height,
      systemTheme: systemTheme
    });
  }, [width, height, OS, isXs, isTablet, systemTheme]);
  return basicInfo;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function useOrientation() {
  var _useContext = React.useContext(OrientationContext),
      currentOrientation = _useContext.currentOrientation;

  return {
    orientation: currentOrientation,
    '@landscape': currentOrientation === ORIENTATIONS.LANDSCAPE,
    '@portrait': currentOrientation === ORIENTATIONS.PORTRAIT
  };
}

var calculateStyle = function calculateStyle(style, themeState) {
  if (typeof style === 'string' && style[0] === '$') {
    if (themeState.globalStyles[style]) return themeState.globalStyles[style];
    return style;
  }

  if (typeof style !== 'object') {
    return style;
  }

  var out = {};
  var overrides = [];
  Object.keys(style).forEach(function (key) {
    if (key[0] === '$') {
      overrides.push(calculateStyle(themeState.globalStyles[key], themeState));
    } else if (key[0] !== '@') {
      out[key] = calculateStyle(style[key], themeState);
    } else if (themeState[key]) {
      overrides.push(calculateStyle(style[key], themeState));
    }
  });
  overrides.forEach(function (override) {
    out = _extends({}, out, override);
  });
  return out;
};

var isEqual = function isEqual(a, b) {
  if (a === void 0) {
    a = {};
  }

  if (b === void 0) {
    b = {};
  }

  return JSON.stringify(a) === JSON.stringify(b);
};

var useResponsive = function useResponsive(style) {
  console.log('useResponsive start...');
  var basicInfo = useBasicInfo();
  var orientation = useOrientation();

  var _useState = React.useState(_extends({}, basicInfo, orientation)),
      themeState = _useState[0];

  var _useState2 = React.useState(null),
      currentStyle = _useState2[0],
      setCurrentStyle = _useState2[1];

  var previousStyleRef = React.useRef(style);
  React.useEffect(function () {
    var isStyleEqual = isEqual(previousStyleRef.current, style);
    console.log({
      isStyleEqual: isStyleEqual,
      style: style,
      ref: previousStyleRef.current
    });

    if (!isStyleEqual) {
      setCurrentStyle(reactNative.StyleSheet.create(calculateStyle(style, themeState)));
      previousStyleRef.current = style;
    }
  }, [style]);
  return currentStyle || reactNative.StyleSheet.create(calculateStyle(style, themeState));
};

var _Dimensions$get = /*#__PURE__*/reactNative.Dimensions.get('window'),
    initHeight = _Dimensions$get.height,
    initWidth = _Dimensions$get.width;

var BasicProviderDefaults = {
  width: 0,
  height: 0,
  OS: undefined,
  isTablet: false,
  isXs: false
};
var BasicContext = /*#__PURE__*/React.createContext(BasicProviderDefaults);
function BasicProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(initHeight),
      height = _useState[0],
      setHeight = _useState[1];

  var _useState2 = React.useState(initWidth),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = React.useState(reactNative.Platform.OS),
      OS = _useState3[0];

  var _useState4 = React.useState(reactNativeDeviceInfo.isTablet()),
      isTablet = _useState4[0];

  var _useState5 = React.useState(false),
      isXs = _useState5[0],
      setIsXs = _useState5[1];

  var calcValues = function calcValues() {
    var _Dimensions$get2 = reactNative.Dimensions.get('window'),
        newHeight = _Dimensions$get2.height,
        newWidth = _Dimensions$get2.width;

    if (newHeight !== height) setHeight(newHeight);
    if (newWidth !== width) setWidth(newWidth);
  };

  useBackgroundHandler({
    onActive: calcValues,
    onBackground: calcValues
  });
  React.useEffect(function () {
    var density = reactNative.PixelRatio.get();
    if (height * density < 1200) setIsXs(true);
  }, [height]);
  React.useEffect(function () {
    calcValues();
  }, []);
  return React__default.createElement(BasicContext.Provider, {
    value: {
      height: height,
      width: width,
      OS: OS,
      isTablet: isTablet,
      isXs: isXs
    }
  }, children);
}

function ThemeProvider(_ref) {
  var children = _ref.children;
  return React__default.createElement(BasicProvider, null, React__default.createElement(OrientationProvider, null, children));
}

exports.default = ThemeProvider;
exports.useBackgroundHandler = useBackgroundHandler;
exports.useBasicInfo = useBasicInfo;
exports.useResponsive = useResponsive;
//# sourceMappingURL=rn-responsive-theme.cjs.development.js.map
