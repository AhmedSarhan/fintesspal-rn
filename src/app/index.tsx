import { FlatList, StyleSheet, Button, TextInput, View, Text } from "react-native";
import { styles as pageStyles } from "../styles/page-container";
import { FoodCard } from "../components/food-card";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

const foodItems = [
  {
    label: "Pizza",
    calories: 100,
    brand: "Dominos",
  },
  {
    label: "Burger",
    calories: 200,
    brand: "Brokkleen",
  },
  {
    label: "Fries",
    calories: 300,
    brand: "Zinger",
  },
  {
    label: "Coke",
    calories: 400,
    brand: "Spirospats",
  },
  {
    label: "Salad",
    calories: 500,
    brand: "Subway",
  },
];

export default function SearchScreen () {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useQuery(query, {
    variables: { ingr: search },
    skip: !search,
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  console.log('data', data);

  return (
    <View style={pageStyles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholder="Search..."
      />
      <FlatList
        data={data?.search?.hints}
        renderItem={({ item }) => <FoodCard item={item?.food} />}
        keyExtractor={(item, index) => item?.food?.foodId}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f6f6f8",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
});
