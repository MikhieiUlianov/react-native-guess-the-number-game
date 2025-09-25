import { View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // how far
    shadowRadius: 6, // how much expands
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
