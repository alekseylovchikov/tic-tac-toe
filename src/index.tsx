import { AppBootstrap } from '@components';
import Navigator from '@config/navigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <AppBootstrap>
      <StatusBar style="auto" />
      <Navigator />
    </AppBootstrap>
  );
}
