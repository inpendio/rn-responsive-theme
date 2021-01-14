// import { ReactNode } from 'react';

interface IProviderProps {
  children: ReactNode;
}

interface IStyleProviderProps extends IProviderProps {
  style: object;
}

interface IThemeProviderProps extends IStyleProvider, IProviderProps {
  style?: object;
}
