import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const skills = [
  {
    category: "Financial Tracking & Budgeting",
    skills: [
      "Income & Expense Tracker",
      "Savings Goals & Progress Tracker",
      "Daily/Weekly/Monthly Budget Planner",
    ],
  },
  {
    category: "Digital Payments & Transactions",
    skills: [
      "UPI & Mobile Banking Guide",
      "QR Code Scanner for Payments",
      "Secure Money Transfer",
    ],
  },
  {
    category: "Loan & Microfinance Assistance",
    skills: [
      "Government Loan & Grant Schemes for Women",
      "Microfinance Institutions (MFI) & SHG Loan Information",
      "Loan Calculator & EMI Planner",
    ],
  },
  {
    category: "Investment & Savings",
    skills: [
      "Gold & Fixed Deposits (FD/RD) Guide",
      "Stock Market & Mutual Funds Basics",
      "Insurance (Life, Health, Agriculture)",
    ],
  },
  {
    category: "Financial Literacy & Guidance",
    skills: [
      "Educational Videos on Managing Money",
      "Tips on Avoiding Loan Traps & Scams",
      "Local Financial Advisors/Mentors",
    ],
  },
];

export default function SkillDevelopmentScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skill Development</Text>
      {!selectedCategory ? (
        <FlatList
          data={skills}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => setSelectedCategory(item)}
            >
              <Ionicons name="book" size={26} color="#007bff" style={styles.icon} />
              <Text style={styles.category}>{item.category}</Text>
              <Ionicons name="chevron-forward" size={24} color="#007bff" style={styles.arrowIcon} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <ScrollView contentContainerStyle={styles.cardExpanded}>
          <TouchableOpacity onPress={() => setSelectedCategory(null)} style={styles.backButtonContainer}>
            <Ionicons name="arrow-back" size={22} color="#007bff" />
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.categoryExpanded}>{selectedCategory.category}</Text>
          {selectedCategory.skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <Ionicons name="checkmark-circle" size={20} color="green" />
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E6E8",
    padding: 30, // Adjusted padding
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  card: {
    backgroundColor: "white",
    padding: 20, // Reduced padding slightly
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    flex: 1,
    marginLeft: 8, // Fixed text alignment
  },
  icon: {
    marginRight: 8, // Adjusted spacing
  },
  arrowIcon: {
    marginLeft: 8, // Adjusted spacing
  },
  cardExpanded: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
  categoryExpanded: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
    marginBottom: 15,
  },
  skillItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#e8f0fe",
    padding: 10,
    borderRadius: 10,
  },
  skillText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backButton: {
    fontSize: 18,
    color: "#007bff",
    marginLeft: 5,
  },
});
