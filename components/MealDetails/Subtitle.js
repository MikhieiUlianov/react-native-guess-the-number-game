import { StyleSheet, Text, View } from "react-native";

const Subtitle = () => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#cd7251ff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#cd7251ff",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
