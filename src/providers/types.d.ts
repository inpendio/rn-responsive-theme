import { ReactNode } from "react";

interface IOrientationProvider {
    currentOrientation: string;
    lockOrientation(mode:string):void;

}

interface IBasicProviderProps{
    children: ReactNode
}

interface INotificator{
    onChange(newConfig: object):void
}
interface INotifierPool{
    notifierPool: INotificator[];
}
