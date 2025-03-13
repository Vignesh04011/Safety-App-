import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Example Settings Option */}
      <TouchableOpacity style={styles.option} onPress={() => alert('Change Password Clicked')}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => alert('Notification Settings Clicked')}>
        <Text style={styles.optionText}>Notification Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => alert('Privacy Settings Clicked')}>
        <Text style={styles.optionText}>Privacy Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.goBack()}>
        <Text style={[styles.optionText, { color: 'red' }]}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E6E8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  option: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingsScreen;
