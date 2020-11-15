import React,{ReactElement} from 'react';
import OrientationProvider from './OrientationProvider';
import BasicProvider from './BasicProvider';
import { IProviderProps } from './types';


export default function ThemeProvider({ children }: IProviderProps):ReactElement {
  return (
    <BasicProvider>
      <OrientationProvider>
        {children}
      </OrientationProvider>
    </BasicProvider>
  );
}
