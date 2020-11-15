export interface IOrientationInfo {
    orientation?: string;
    '@landscape': boolean;
    '@portrait': boolean;
}
export default function useOrientation(): IOrientationInfo;
