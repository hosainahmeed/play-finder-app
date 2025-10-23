import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { otherIcons, TabIcons } from '../../constant/images';

export default function Header({ userName = "Hosain", appName = "SportsCamp" }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={TabIcons.Home} style={styles.logo} />
        <View>
          <Text style={styles.greeting}>Hi, {userName}</Text>
          <Text style={styles.welcome}>Welcome to {appName}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationButton}>
        <Image source={otherIcons.bell} style={styles.bell} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 100,
    backgroundColor: '#E6ECF5',
    paddingHorizontal: 12,
    elevation: 2
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  welcome: {
    fontSize: 13,
    color: '#555',
  },
  notificationButton: {
    padding: 6,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
  },
  bell: {
    width: 20,
    height: 20,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
