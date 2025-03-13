import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const contacts = [
  { id: '1', name: 'Mom', icon: 'person' },
  { id: '2', name: 'Dad', icon: 'person' },
  { id: '3', name: 'Brother', icon: 'person' },
  { id: '4', name: 'Sister', icon: 'person' },
  { id: '5', name: 'Friend', icon: 'person' },
  { id: '6', name: 'Boss', icon: 'work' },
  { id: '7', name: 'Police', icon: 'local-police' },
  { id: '8', name: 'Doctor', icon: 'medical-services' },
];

export default function FakeCallScreen() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Contacts</Text>

      {/* Contact Grid */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        numColumns={2}// Two columns to fill the screen
        key={2} 
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem}>
            <MaterialIcons name={item.icon} size={30} color="black" />
            <Text style={styles.contactText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Floating Add Contact Button */}
      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#E3E6E8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  contactItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
