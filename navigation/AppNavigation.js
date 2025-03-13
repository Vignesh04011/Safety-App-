import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SOSscreen from '../screens/SOSscreen';
import Homescreen from '../screens/Homescreen';
import Profilescreen from '../screens/Profilescreen';
import Financescreen from '../screens/Financescreen';
import Locationscreen from '../screens/Locationscreen';
import SettingsScreen from '../screens/Settingsscreen';
import FakeCallScreen from '../screens/FakeCallscreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => (
  <View style={styles.tabContainer}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      let iconName = route.name === 'Home' ? 'home' :
                    route.name === 'Location' ? 'location-on' :
                    route.name === 'SOS' ? 'report' :
                    route.name === 'Finance' ? 'attach-money' :
                    'person';

      return (
        <TouchableOpacity
          key={route.name}
          onPress={() => navigation.navigate(route.name)}
          style={[
            styles.tabButton,
            isFocused && styles.activeTab,
            route.name === 'SOS' && styles.sosButtonContainer
          ]}
        >
          <View style={isFocused ? styles.activeCircle : null}>
            <MaterialIcons name={iconName} size={40} color={isFocused ? 'white' : 'black'} />
          </View>
          {route.name !== 'SOS' && (
            <Text style={{ color: isFocused ? 'white' : 'black', fontSize: 14 }}>{route.name}</Text>
          )}
        </TouchableOpacity>
      );
    })}
  </View>
);

const FloatingButtons = ({ openMenu, navigation }) => (
  <>
    <TouchableOpacity style={styles.settingsButton} onPress={openMenu}>
      <MaterialIcons name="menu" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.fakeCallButton} 
      onPress={() => navigation.navigate('FakeCall')} 
    >
      <MaterialIcons name="call" size={30} color="white" />
    </TouchableOpacity>
  </>
);

const SidebarMenu = ({ menuAnimation, closeMenu, navigation }) => {
  const userProfile = { name: "John Doe", image: require('../assets/profile.png') };

  return (
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX: menuAnimation }] }]}>
      <View style={styles.sidebarHeader}>
        <Image source={userProfile.image} style={styles.profileImage} />
        <Text style={styles.profileName}>{userProfile.name}</Text>
      </View>

      <TouchableOpacity onPress={closeMenu} style={styles.closeMenu}>
        <MaterialIcons name="close" size={28} color="black" />
      </TouchableOpacity>

      <View style={styles.menuItemsContainer}>
        {[
          { label: 'Inbox', screen: 'Inbox' },
          { label: 'Contacts', screen: 'Contacts' },
          { label: 'About', screen: 'About' },
          { label: 'Community Support', screen: 'Community Support' },
          { label: 'Settings', screen: 'Settings' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};

const MainTabNavigator = () => {
  const [menuAnimation] = useState(new Animated.Value(-250));
  const navigation = useNavigation();

  const openMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Location" component={Locationscreen} />
        <Tab.Screen name="SOS" component={SOSscreen} />
        <Tab.Screen name="Finance" component={Financescreen} />
        <Tab.Screen name="Profile" component={Profilescreen} />
      </Tab.Navigator>
      <FloatingButtons openMenu={openMenu} navigation={navigation} />
      <SidebarMenu menuAnimation={menuAnimation} closeMenu={closeMenu} navigation={navigation} />
    </View>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="FakeCall" component={FakeCallScreen} options={{ title: 'Fake Call' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,  // Increased width
    backgroundColor: 'white',
    paddingTop: 60,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  sidebarHeader: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'red',  // TEMPORARY to check if styles apply
  },
  profileImage: {
    width: 150,  // Increase width
    height: 150, // Increase height
    borderRadius: 75, // Keep it circular
    resizeMode: 'cover', // Ensures it fills the space
    borderWidth: 2, // Optional: Add a border
    borderColor: '#ccc', // Optional border color
  },
  profileName: {
    fontSize: 26,   // Make text bigger
    fontWeight: 'bold',
    marginTop: 10,  // Add spacing below image
  },
  closeMenu: {
    position: 'absolute',
    top: 15,
    right: 15,
    padding: 5,
  },
  menuItemsContainer: {
    marginTop: 10,
  },
  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 20,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 30,
    elevation: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
  },
  tabButton: { 
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
  },
  activeTab: {
    position: 'relative',
  },
  activeCircle: {
    backgroundColor: '#007bff', // Highlight color
    borderRadius: 30,
    padding: 7,
  },
  sosButtonContainer: {
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 25,
    elevation: 20,
    shadowColor: '#FF0000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    transform: [{ translateY: -10 }],
  },
  settingsButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black
    padding: 12,
    borderRadius: 50,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },  
  fakeCallButton: { position: 'absolute', bottom: 110, right: 25, backgroundColor: '#4CAF50', padding: 10, borderRadius: 50 },
  menuContainer: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 250, backgroundColor: 'white', paddingTop: 50, elevation: 5 },
  profileContainer: { alignItems: 'center', paddingBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  profileName: { fontSize: 20, fontWeight: 'bold' }
});
