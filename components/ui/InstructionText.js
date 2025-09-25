import { StyleSheet, Text } from "react-native";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sens",
    color: Colors.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
