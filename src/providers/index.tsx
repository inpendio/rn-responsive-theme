import React,{ReactElement} from 'react';
import BasicProvider from './BasicProvider';
import OrientationProvider from './OrientationProvider';


export default function ThemeProvider({ children }: IProviderProps):ReactElement {
  return (
    <BasicProvider>
      <OrientationProvider>
        {children}
      </OrientationProvider>
    </BasicProvider>
  );
}
