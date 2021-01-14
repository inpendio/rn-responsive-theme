import React,{ReactElement} from 'react';
import {useConst} from 'utils';
import BasicProvider from './BasicProvider';
import OrientationProvider from './OrientationProvider';
import StyleProvider from './StyleProvider';


export default function ThemeProvider({ children, style }: IThemeProviderProps):ReactElement {
  const emptyStyle=useConst({});
  return (
    <StyleProvider style={style || emptyStyle}>
      <BasicProvider>
        <OrientationProvider>
          {children}
        </OrientationProvider>
      </BasicProvider>
    </StyleProvider>
  );
}
