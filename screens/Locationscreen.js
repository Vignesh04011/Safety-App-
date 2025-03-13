import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const Locationscreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const fineLocation = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );

          const coarseLocation = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
          );

          if (
            fineLocation === PermissionsAndroid.RESULTS.GRANTED &&
            coarseLocation === PermissionsAndroid.RESULTS.GRANTED
          ) {
            startLocationTracking();
          } else {
            setErrorMsg('Location permission denied');
          }
        } else {
          const permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          if (permissionStatus === RESULTS.GRANTED) {
            startLocationTracking();
          } else {
            setErrorMsg('Location permission denied');
          }
        }
      } catch (err) {
        setErrorMsg('Failed to request location permission');
      }
    };

    const startLocationTracking = () => {
      Geolocation.watchPosition(
        (position) => {
          setLocation(position.coords);
          setErrorMsg('');
        },
        (error) => setErrorMsg(error.message),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
      );
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
      ) : (
        <Text>Fetching Location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default Locationscreen;
