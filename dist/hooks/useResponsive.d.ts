import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
declare type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
declare const useResponsive: (style: object) => NamedStyles<any>;
export default useResponsive;
