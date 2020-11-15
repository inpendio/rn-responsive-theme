import React, { ReactElement } from 'react';
import { IProviderProps, IBasicProvider } from './types';
export declare const BasicProviderDefaults: IBasicProvider;
export declare const BasicContext: React.Context<IBasicProvider>;
export default function BasicProvider({ children, }: IProviderProps): ReactElement;
