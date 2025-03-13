import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Animated } from "react-native";

export default function SOSScreen() {
  const flashAnim = useRef(new Animated.Value(1)).current;
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const flash = () => {
      Animated.sequence([
        Animated.timing(flashAnim, {
          toValue: 0.7,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(flashAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => flash());
    };
    flash();
  }, []);

  const handleSOSPress = () => {
    setIsActivated(true);
    setTimeout(() => setIsActivated(false), 5000); // Reset after 5 seconds
  };

  return (
    <View style={styles.container}>
      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        Press the button in case of an emergency!
      </Text>

      {/* SOS Button */}
      <TouchableOpacity 
        style={[styles.sosButton, { opacity: flashAnim, transform: [{ perspective: 500 }, { rotateX: "-10deg" }] }]} 
        activeOpacity={0.7}
        onPress={handleSOSPress}
      >
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      {/* Emergency Activated Message */}
      {isActivated && <Text style={styles.activatedText}>🚨 Emergency Activated! 🚨</Text>}

      {/* Emergency Contact Buttons */}
      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>🚓 Police</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>🚑 Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>🔥 Fire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E6E8", // Light background
    padding: 20,
  },
  instructionText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  sosButton: {
    backgroundColor: "#D50000",
    width: 200, // Bigger button
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 6,
    borderColor: "#FFF",
    elevation: 25,
    shadowColor: "#FF0000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 30,
  },
  sosText: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    letterSpacing: 5,
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 5,
  },
  activatedText: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginTop: 20,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    width: "100%",
  },
  contactButton: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  contactText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
