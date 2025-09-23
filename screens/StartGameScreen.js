import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [] = useState();
  return (
    <View styles={styles.inputContainer}>
      <TextInput
        styles={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#3d0320ff",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // how far
    shadowRadius: 6, // how much expands
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomCollor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
