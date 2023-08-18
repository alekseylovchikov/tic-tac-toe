import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const handleShowAlert = () => {
    Alert.alert("Oh my gosh!");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleShowAlert}>
        <Text style={styles.button}>I&apos;m button, press on me!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 2,
    marginVertical: 2,
    color: "tomato",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
