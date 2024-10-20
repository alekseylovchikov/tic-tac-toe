import { TouchableOpacity, Text } from 'react-native';
import styles from './button.styles';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Single Player</Text>
    </TouchableOpacity>
  );
}
