import { useContext } from 'react';
import { StyleContext } from 'contexts';

export default function useGlobalStyles(): IGlobalStyles {
  const { style: globalStyles } = useContext(StyleContext);

  return globalStyles;
}
