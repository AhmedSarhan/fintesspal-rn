import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export const FoodCard = ({
  item,
}: {
  item: {
    label: string;
    foodId: string;
    nutrients: {
      ENERC_KCAL: number;
    };
    brand: string;
  };
}) => {
  console.log('item', item);
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {item.label}
        </Text>
        <Text style={{ color: "dimgray" }}>
          {item.nutrients.ENERC_KCAL} cal, {item.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});