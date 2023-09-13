import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TopBar = () => {
  return (
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
        <TouchableOpacity onPress={() => console.log("Menu Pressed")}>
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
  );
};

export default TopBar;
