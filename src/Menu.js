import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

const Menu = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity onPress={() => console.log("Sign In Pressed")}>
            <Text>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Language Pressed")}>
            <Text>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Text Size Pressed")}>
            <Text>Text Size</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Help Pressed")}>
            <Text>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Menu;
