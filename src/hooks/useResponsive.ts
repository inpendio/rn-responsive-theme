import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import useThemeState from './useThemeState';
import { isEqual, calculateStyle } from '../utils';

const useResponsive = (style: object): NamedStyles<any> => {
  const themeState = useThemeState();
  const [currentStyle, setCurrentStyle] = useState(null);

  // Use deep compare of the style object to prevent infinite renders
  const previousStyleRef = useRef(style);

  useEffect(() => {
    // const newStyle = StyleSheet.create(calculateStyle(style, themeState));
    const isStyleEqual = isEqual(previousStyleRef.current, style);
    console.log({ isStyleEqual, style, ref: previousStyleRef.current });
    if (!isStyleEqual) {
      setCurrentStyle(StyleSheet.create(calculateStyle(style, themeState)));
      previousStyleRef.current = style;
    }
  }, [themeState, style]);

  // Return the calculated styles on the first render
  return currentStyle || StyleSheet.create(calculateStyle(style, themeState));
};

export default useResponsive;
