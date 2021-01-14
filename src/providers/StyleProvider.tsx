import React, {
  useEffect,
  useState,
  ReactElement,
} from 'react';
import {StyleSheet} from 'react-native';
  
import { StyleContext } from '../contexts';

const styleSheetValues = {
  $absoluteFill: StyleSheet.absoluteFill,
  $hairlineWidth: StyleSheet.hairlineWidth,
};

type PrefixedKey<T extends string> = `$${T}`;



type PrefixedStyles<T> ={
  [K in keyof T & string as `${PrefixedKey<K>}`]: string|number|object
};
// type PrefixedStyles={
//   [P in keyof Person]: Person[P]
// }

  
export default function StyleProvider({
  children,style
}: IStyleProviderProps): ReactElement {
  const [currentStyle, setStyle] = useState<PrefixedStyles<object>>({styleSheetValues, style});
    
  
  useEffect(() => {
    setStyle({styleSheetValues, style});
  }, [style]);
  
  return (
    <StyleContext.Provider
      value={{
        style:currentStyle
      }}>
      {children}
    </StyleContext.Provider>
  );
}
  