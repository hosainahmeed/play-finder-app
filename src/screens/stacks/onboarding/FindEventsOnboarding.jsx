import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaProviderNoScroll from '../../../providers/SafeAreaProviderNoScroll'
import OnboardingBackButton from '../../../components/ui/buttons/OnboardingBackButton'

export default function FindEventsOnboarding() {
  return (
    <SafeAreaProviderNoScroll>
      <OnboardingBackButton show={true} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>FindEventsOnboarding</Text>
      </View>
    </SafeAreaProviderNoScroll>
  )
}

const styles = StyleSheet.create({})