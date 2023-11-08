import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { View } from 'react-native';

type GradientBackgroundProps = {
  children: ReactNode;
};

export default function GradientBackground({
  children,
}: GradientBackgroundProps) {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#ff4d00', '#ffa700']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      {children}
    </View>
  );
}
