import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Footer({ onHomePress, onLocationPress, onMentorPress, onSOSPress, onProfilePress, onSettingPress, onFakeCallPress }) {
  return (
    <View style={styles.footer}>
      {/* Google Maps Button (Left) */}
      <TouchableOpacity style={styles.iconButton} onPress={onHomePress}>
        <Ionicons name="home" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={onLocationPress}>
        <Ionicons name="map" size={30} color="white" />
      </TouchableOpacity>

      {/* SOS Button (Center) */}
      <TouchableOpacity style={styles.sosButton} onPress={onSOSPress}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      {/* Mentor Button (Right) */}
      <TouchableOpacity style={styles.iconButton} onPress={onMentorPress}>
        <Ionicons name="person" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={onProfilePress}>
        <Ionicons name="profile" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={onSettingPress}>
        <Ionicons name="setting" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={onFakeCallPress}>
        <Ionicons name="fakecall" size={30} color="white" />
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6200ea",
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
  iconButton: {
    padding: 10,
  },
  sosButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    elevation: 5,
  },
  sosText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
