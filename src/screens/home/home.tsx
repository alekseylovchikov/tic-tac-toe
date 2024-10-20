import { StackNavigatorParams } from '@config/navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, ScrollView, View } from 'react-native';

import { Button, GradientBackground } from '@components';
import styles from './home.styles';

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
};

export default function Home({ navigation }: HomeProps) {
  console.log(navigation.getState());

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require('@assets/logo.png')} />
        <View style={styles.buttons}>
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
