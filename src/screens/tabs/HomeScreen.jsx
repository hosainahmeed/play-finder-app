import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../components/Shared/Header';
import CategorySection from '../../components/ui/screens-section/CategorySection';
import FeatureEventSection from '../../components/ui/screens-section/FeatureEventSection';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {

  return (
    <SafeAreaProvider>
      <View>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        >
          <Header userName="Hosain" appName="SportsCamp" />
          <View style={{ paddingHorizontal: 12 }}>
            <CategorySection />
            <FeatureEventSection />
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
