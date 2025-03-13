import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Profilescreen() {
  const profile = {
    name: 'Sarah',
    phone: '9999222288',
    email: 'sarah@gmail.com',
    address: 'Mumbai, India',
    dob: 'Mar 03, 2005',
    gender: 'Female',
    profileImage: require('../assets/profile.png'), // Local image from assets folder
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={profile.profileImage} style={styles.profileImage} />

      {/* Profile Details */}
      <Text style={styles.name}>{profile.name}</Text>
      <View style={styles.detailRow}>
        <MaterialIcons name="phone" size={20} color="#4CAF50" />
        <Text style={styles.detailText}>{profile.phone}</Text>
      </View>
      <View style={styles.detailRow}>
        <MaterialIcons name="email" size={20} color="#4CAF50" />
        <Text style={styles.detailText}>{profile.email}</Text>
      </View>
      <View style={styles.detailRow}>
        <MaterialIcons name="location-on" size={20} color="#4CAF50" />
        <Text style={styles.detailText}>{profile.address}</Text>
      </View>
      <View style={styles.detailRow}>
        <MaterialIcons name="cake" size={20} color="#4CAF50" />
        <Text style={styles.detailText}>{profile.dob}</Text>
      </View>
      <View style={styles.detailRow}>
        <MaterialIcons name="person" size={20} color="#4CAF50" />
        <Text style={styles.detailText}>{profile.gender}</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={[styles.button, styles.editButton]}>
        <MaterialIcons name="edit" size={24} color="white" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.switchButton]}>
        <MaterialIcons name="sync" size={24} color="white" />
        <Text style={styles.buttonText}>Switch Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <MaterialIcons name="logout" size={24} color="white" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E3E6E8',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    width: '90%',
    justifyContent: 'center',
    transition: '0.3s',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  switchButton: {
    backgroundColor: '#00CEC8',
  },
  logoutButton: {
    backgroundColor: '#F44336',
  },
});
