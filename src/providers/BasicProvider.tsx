import React, {
  // createContext,
  // useCallback,
  useEffect,
  useState,
  ReactElement,
} from 'react';
import {Dimensions,PixelRatio,Platform} from 'react-native';
import {isTablet as isTabletInfo} from 'react-native-device-info';
import {BasicContext} from '../contexts';
import useBackgroundHandler from '../hooks/useBackgroundHandler';
  
const { height:initHeight, width:initWidth } = Dimensions.get('window');


  
/* export const BasicProviderDefaults: IBasicProvider = {
  width:0,
  height: 0,
  OS:undefined,
  isTablet:false,
  isXs:false
};
  
export const BasicContext = createContext<IBasicProvider>(
  BasicProviderDefaults
); */
  
export default function BasicProvider({
  children,
}: IProviderProps): ReactElement {
  const [height, setHeight] = useState<number>(initHeight);
  const [width, setWidth] = useState<number>(initWidth);
  const [OS] = useState<string>(Platform.OS);
  const [isTablet] = useState<boolean>(isTabletInfo());
  const [isXs, setIsXs] = useState<boolean>(false);


  const calcValues = ():void=>{
    const { height:newHeight, width:newWidth } = Dimensions.get('window');
    if(newHeight!==height)setHeight(newHeight);
    if(newWidth!==width)setWidth(newWidth);
  };

  useBackgroundHandler({onActive:calcValues, onBackground:calcValues});
  
  useEffect(() => {
    const density = PixelRatio.get();
    if(height * density < 1200)setIsXs(true);
  }, [height]);
  
  useEffect(() => {
    calcValues();
  }, []);
  
  
  return (
    <BasicContext.Provider
      value={{
        height, width, OS, isTablet, isXs
      }}
    >
      {children}
    </BasicContext.Provider>
  );
}
  