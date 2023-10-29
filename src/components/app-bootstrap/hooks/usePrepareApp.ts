import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';

export const usePrepareApp = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return appIsReady;
};
