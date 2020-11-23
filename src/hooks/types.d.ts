interface IUseBackgroundHandler {
  onActive?: { (): void };
  onBackground?: { (): void };
}

interface IBasicInfo {
  '@web': boolean;
  '@tablet': boolean;
  '@xs': boolean;
  '@android': boolean;
  '@ios': boolean;
  width: number;
  height: number;
  systemTheme: ColorSchemeName;
}

interface IOrientationInfo {
  orientation?: string;
  '@landscape': boolean;
  '@portrait': boolean;
}

/* interface IThemeState {
  IOrientationInfo;
  IBasicInfo;
} */

/* interface IOrientationInfo {
  orientation?: string;
  '@landscape': boolean;
  '@portrait': boolean;
} */

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

interface IResponsiveState extends IBasicInfo, IOrientationInfo {}
