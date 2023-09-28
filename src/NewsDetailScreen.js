import React from "react";
import { View, Text, Image } from "react-native";

const NewsDetailScreen = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Image
        source={{ uri: newsItem.image }}
        style={{
          width: "100%",
          height: 200,
          marginBottom: 12,
          borderRadius: 10,
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{newsItem.title}</Text>
      <Text>{newsItem.description}</Text>
    </View>
  );
};

export default NewsDetailScreen;
