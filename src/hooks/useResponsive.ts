import { useEffect, useRef, useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import useBasicInfo, { IBasicInfo } from './useBasicInfo';
import useOrientation, { IOrientationInfo } from './useOrientation';
import { isEqual, calculateStyle } from '../utils';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

interface IResponsiveState extends IBasicInfo, IOrientationInfo {}

const useResponsive = (style: object): NamedStyles<any> => {
  console.log('useResponsive start...');
  const basicInfo = useBasicInfo();
  const orientation = useOrientation();
  const [themeState, setThemeState] = useState<IResponsiveState>({
    ...basicInfo,
    ...orientation,
  });
  const [currentStyle, setCurrentStyle] = useState(null);

  /* useEffect(
    () => {
      // we use promise, because it is not a priority to subscribe
      async function subscribe() {
        // on first run we calculate style and extract listeners we want to listen to
        const listeners = getListeners(style);
        // Theme will notify us only when the listener state changes and set new state
        Theme.notifyOnChange(listeners, setThemeState);
      }
      subscribe();
    },
    // eslint-disable-next-line
      [],
  ); */

  // Use deep compare of the style object to prevent infinite renders
  const previousStyleRef = useRef(style);
  //   const previousStyle = previousStyleRef.current;

  useEffect(() => {
    // const newStyle = StyleSheet.create(calculateStyle(style, themeState));
    const isStyleEqual = isEqual(previousStyleRef.current, style);
    console.log({ isStyleEqual, style, ref: previousStyleRef.current });
    if (!isStyleEqual) {
      setCurrentStyle(StyleSheet.create(calculateStyle(style, themeState)));
      previousStyleRef.current = style;
    }
  }, [/* themeState,  */ style /* , previousStyleRef.current */]);

  // Return the calculated styles on the first render
  return currentStyle || StyleSheet.create(calculateStyle(style, themeState));
};

export default useResponsive;
