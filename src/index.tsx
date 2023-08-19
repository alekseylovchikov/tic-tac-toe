import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Game, Home } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
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
