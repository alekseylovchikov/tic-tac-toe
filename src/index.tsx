import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';

import { Game, Home } from '@screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('@assets/favicon.png')} />
      <Home />
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
