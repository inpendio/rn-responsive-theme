import React,{ReactElement} from 'react';
import BasicProvider from './BasicProvider';
import OrientationProvider from './OrientationProvider';
// import BasicProvider from './BasicProvider';
// import { IProviderProps } from './types';

// {/* <BasicProvider> */}
// {{/* <OrientationProvider> */}}
// {props.children}
// {/* </OrientationProvider> */}
// {/* </BasicProvider> */}


export default function ThemeProvider({ children }: IProviderProps):ReactElement {
  return (
    <BasicProvider>
      <OrientationProvider>
        {children}
      </OrientationProvider>
    </BasicProvider>
  );
}
