import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NewsDetailScreen = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: newsItem.image }} style={styles.image} />
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.description}>{newsItem.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});

export default NewsDetailScreen;
