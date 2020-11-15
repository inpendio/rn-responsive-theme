import { ColorSchemeName } from 'react-native';
export interface IBasicInfo {
    '@web': boolean;
    '@tablet': boolean;
    '@xs': boolean;
    '@android': boolean;
    '@ios': boolean;
    width: number;
    height: number;
    systemTheme: ColorSchemeName;
}
export default function useBasicInfo(): IBasicInfo;
