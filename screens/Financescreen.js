import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const financeCategories = [
  {
    category: "Budgeting & Expense Management",
    items: [
      "Personal Budget Planning",
      "Expense Tracking Tools",
      "Savings Strategies",
    ],
  },
  {
    category: "Investment & Wealth Growth",
    items: [
      "Stock Market Basics",
      "Mutual Funds & SIPs",
      "Real Estate Investment",
    ],
  },
  {
    category: "Banking & Digital Payments",
    items: [
      "UPI & Mobile Banking",
      "Credit & Debit Cards Usage",
      "Secure Online Transactions",
    ],
  },
  {
    category: "Loan & Insurance Assistance",
    items: [
      "Home & Business Loans",
      "Health & Life Insurance",
      "Agricultural Insurance",
    ],
  },
  {
    category: "Fraud Prevention & Cybersecurity",
    items: [
      "Detecting Fraudulent Schemes",
      "Safe Online Banking Tips",
      "Cybersecurity Best Practices",
    ],
  },
];

export default function FinanceScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Finance Management</Text>
      {!selectedCategory ? (
        <FlatList
          data={financeCategories}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => setSelectedCategory(item)}
            >
              <Ionicons name="folder-outline" size={24} color="#007bff" style={styles.icon} />
              <Text style={styles.category}>{item.category}</Text>
              <Ionicons name="chevron-forward-outline" size={24} color="#007bff" style={styles.arrowIcon} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.cardExpanded}>
          <TouchableOpacity onPress={() => setSelectedCategory(null)}>
            <Text style={styles.backButton}>{"← Back"}</Text>
          </TouchableOpacity>
          <Text style={styles.category}>{selectedCategory.category}</Text>
          {selectedCategory.items.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Ionicons name="checkmark-circle" size={20} color="green" />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E6E8",
    padding: 30,
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
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    flex: 1,
    marginLeft: 10,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#e9f2ff",
    padding: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  backButton: {
    fontSize: 20,
    color: "#007bff",
    marginLeft: 5,
    marginBottom: 15,
  },
});