import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { usePrepareApp } from './hooks/usePrepareApp';
import { AppBootstrapProps } from './types';

SplashScreen.preventAutoHideAsync();

export default function AppBootstrap({ children }: AppBootstrapProps) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  });
  const appIsReady = usePrepareApp();
  const isReadyToShow = appIsReady && fontsLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (isReadyToShow) await SplashScreen.hideAsync();
  }, [isReadyToShow]);

  if (!isReadyToShow) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
