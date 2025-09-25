import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sens-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
export default Title;
