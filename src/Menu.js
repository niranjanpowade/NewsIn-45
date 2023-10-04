import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const Menu = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => console.log("Sign In Pressed")}>
            <Text style={styles.menuItem}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Language Pressed")}>
            <Text style={styles.menuItem}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Text Size Pressed")}>
            <Text style={styles.menuItem}>Text Size</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Help Pressed")}>
            <Text style={styles.menuItem}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menuContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#333",
  },
});

export default Menu;
