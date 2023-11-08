import { StatusBar } from 'expo-status-bar';
import { AppBootstrap } from '@components';
import Navigator from '@config/navigator';

export default function App() {
  return (
    <AppBootstrap>
      <StatusBar style="auto" />
      <Navigator />
    </AppBootstrap>
  );
}
