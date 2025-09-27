/* import { useRoute } from "@react-navigation/native"; */
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  /*   const route = useRoute(); */
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((m) => m.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = (itemData) => {
    <MealItem title={itemData.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(m) => m.id}
        renderItem={(m) => renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
