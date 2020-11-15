export interface IUseBackgroundHandler {
    onActive?: {
        (): void;
    };
    onBackground?: {
        (): void;
    };
}
declare const useBackgroundHandler: ({ onActive, onBackground, }: IUseBackgroundHandler) => void;
export default useBackgroundHandler;
