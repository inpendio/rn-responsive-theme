import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { isEqual, calculateStyle } from 'utils';
import useGlobalStyles from './useGlobalstyles';
import useThemeState from './useThemeState';

const defaultSecondArg = { localStyles: {} };

const useResponsive: IResponsiveHook = (
  style: object,
  { localStyles } = defaultSecondArg
) => {
  const themeState = useThemeState();
  const globalStyles = useGlobalStyles();
  const [currentStyle, setCurrentStyle] = useState(null);

  // Use deep compare of the style object to prevent infinite renders
  const previousStyleRef = useRef<object | null>(null);

  const calcHelpers = { ...themeState, globalStyles, localStyles };

  useEffect(() => {
    const newStyle = StyleSheet.create(calculateStyle(style, calcHelpers));
    const isStyleEqual = isEqual(previousStyleRef.current, newStyle);
    if (!isStyleEqual) {
      setCurrentStyle(newStyle);
      previousStyleRef.current = style;
    }
  }, [themeState, style, localStyles, calcHelpers]);

  // Return the calculated styles on the first render
  return currentStyle || StyleSheet.create(calculateStyle(style, calcHelpers));
};

export default useResponsive;
