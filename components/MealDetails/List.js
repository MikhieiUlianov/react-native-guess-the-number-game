import { Text, View, StyleSheet } from "react-native";

const List = ({}) => {
  return data.ingredients.map((i) => (
    <View style={styles.listItem} key={i}>
      <Text style={styles.itemText}>{i}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#cd7251ff",
  },
  itemText: {
    color: "#350202ff",
    textAlign: "center",
  },
});
