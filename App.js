import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Menu from "./src/Menu";
import NewsDetail from "./src/NewsDetail";

const newsData = [
  // Example data for testing
  {
    id: 1,
    title: "News Title 1",
    description: "News Description 1",
    image: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "News Title 2",
    description: "News Description 2",
    image: "https://example.com/image2.jpg",
  },
];

export default function App() {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const openNewsDetail = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "violet",
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={{ color: "white", fontSize: 20 }}>{"\u2630"}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            NewsIn45
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => console.log("Help Pressed")}>
            <Text style={{ color: "white", fontSize: 20 }}>{"\u003F"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* List of News Items */}
      {newsData.map((newsItem) => (
        <TouchableOpacity
          key={newsItem.id}
          onPress={() => openNewsDetail(newsItem)}
          style={{
            borderBottomWidth: 1,
            borderColor: "lightgray",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {newsItem.title}
          </Text>
          <Text>{newsItem.description}</Text>
        </TouchableOpacity>
      ))}

      {/* Menu Component */}
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} />

      {/* News Detail Component */}
      {selectedNews && (
        <NewsDetail newsItem={selectedNews} onClose={closeNewsDetail} />
      )}
    </View>
  );
}
