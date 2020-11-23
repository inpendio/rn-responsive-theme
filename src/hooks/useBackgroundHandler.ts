import { useState, useEffect } from 'react';
import { AppState } from 'react-native';

const useBackgroundHandler = ({
  onActive,
  onBackground,
}: IUseBackgroundHandler): void => {
  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppStateChange = (nextAppState): void => {
    if (
      appState.match(/inactive|background/) &&
      nextAppState === 'active' &&
      !!onActive
    ) {
      onActive();
    } else if (
      appState.match(/inactive|active/) &&
      nextAppState === 'background' &&
      !!onBackground
    ) {
      onBackground();
    }
    setAppState(nextAppState);
  };
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return (): void => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);
};

export default useBackgroundHandler;
