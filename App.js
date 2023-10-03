import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import Menu from "./src/Menu";
import NewsDetail from "./src/NewsDetail";
import { ImagesAssets } from "./assets/imagesAssets";

const newsData = [
  // Example data for testing
  {
    id: 1,
    title: "Spanish nightclub fire death toll to 11: police",
    description:
      "At least eleven people have been killed in a fire in a nightclub in Murcia in southeast Spain, the mayor said, adding that rescuers were still searching for people unaccounted for after the blaze. The fire broke out in the early hours of Sunday in Teatre nightclub in Atalayas, on the outskirts of the city, emergency services said on social media platform X. Footage released on the X account of Murcia's fire service showed firefighters working to control flames inside the nightclub. The fire had destroyed part of the roof, the footage showed.",
    image: ImagesAssets[1],
  },
  {
    id: 2,
    title: "News Title 2",
    description: "News Description 2",
    image: "https://example.com/image2.jpg",
  },
  {
    id: 3,
    title: "News Title 3",
    description: "News Description 3",
    image: "https://example.com/image2.jpg",
  },
  {
    id: 4,
    title: "News Title 4",
    description: "News Description 4",
    image: "https://example.com/image2.jpg",
  },
  {
    id: 5,
    title: "News Title 5",
    description: "News Description 5",
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
    <ScrollView style={{ flex: 1 }}>
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

        {newsData.map((newsItem, index) => {
          return (
            <TouchableOpacity
              key={newsItem.id}
              onPress={() => openNewsDetail(newsItem)}
              style={{
                borderBottomWidth: 1,
                borderColor: "lightgray",
                padding: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "column", // Stack image and description vertically
                  alignItems: "center", // Center content horizontally
                }}
              >
                <Image
                  // source={require(`${profileImage}`)}
                  source={newsItem.image}
                  style={{
                    width: 200, // Adjust image width as needed
                    height: 150, // Adjust image height as needed
                    marginBottom: 12, // Add some spacing between image and description
                    borderRadius: 10, // Add border radius for card-like appearance
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {newsItem.title}
                </Text>
                <Text>{newsItem.description}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* List of News Items */}
        {/* {newsData.map((newsItem) => (
        <TouchableOpacity
          key={newsItem.id}
          onPress={() => openNewsDetail(newsItem)}
          style={{
            borderBottomWidth: 1,
            borderColor: "lightgray",
            padding: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {newsItem.title}
          </Text>
          <Text>{newsItem.description}</Text>
        </TouchableOpacity>
      ))} */}

        {/* Menu Component */}
        <Menu isVisible={isMenuVisible} onClose={toggleMenu} />

        {/* News Detail Component */}
        {selectedNews && (
          <NewsDetail newsItem={selectedNews} onClose={closeNewsDetail} />
        )}
      </View>
    </ScrollView>
  );
}
