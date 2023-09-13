import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const NewsDetail = ({ newsItem, onClose }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 10 }}>
        <Image
          source={{ uri: newsItem.image }} // Provide the image URL
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
          {newsItem.title}
        </Text>
        <Text>{newsItem.description}</Text>
      </View>
      <TouchableOpacity
        onPress={onClose}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "violet",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "white" }}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsDetail;
