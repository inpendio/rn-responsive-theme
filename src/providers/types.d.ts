import { ReactNode } from 'react';

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

interface IProviderProps {
  children: ReactNode;
}

interface INotificator {
  onChange(newConfig: object): void;
}
interface INotifierPool {
  notifierPool: INotificator[];
}
