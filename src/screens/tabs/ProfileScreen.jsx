import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaProvider from '../../providers/SafeAreaProvider'
import { IMAGE } from '../../constant/images'

export default function ProfileScreen() {
  return (
    <SafeAreaProvider backButtonText="Profile" zeroPadding>
      <View
        style={{ flex: 1, backgroundColor: '#F5F7FA', height: 300, position: 'relative' ,marginTop: 20}}
      >
        <View style={styles.container}>
          <Image source={IMAGE.profileBg} style={styles.image} />
        </View>
        <View style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
          width: 200,
          height: 200,
          borderRadius: 200,
          overflow: 'hidden',
          zIndex: 1
        }}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' }}
            style={{ width: '100%', height: '100%', borderRadius: 200, overflow: 'hidden' }} />
        </View>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#F5F7FA'
  }
})