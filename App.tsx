import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const handleShowAlert = () => {
    Alert.alert("Oh my gosh! Thank you!");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleShowAlert}>
        <Text style={styles.button}>Ahhhh! I am button, press on me</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 2,
    marginVertical: 2,
    color: "white",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "tomato",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
