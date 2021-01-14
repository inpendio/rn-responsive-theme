interface IOrientationProvider {
  currentOrientation: string;
  lockOrientation(mode: string): void;
}

interface IBasicProvider {
  width: number;
  height: number;
  OS?: string;
  isTablet: boolean;
  isXs: boolean;
}

interface IStyleProvider {
  style: object;
}

/* enum ORIENTATIONS {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  'PORTRAIT-UPSIDEDOWN' = 'portrait',
  'LANDSCAPE-LEFT' = 'landscape',
  'LANDSCAPE-RIGHT' = 'landscape',
} */
