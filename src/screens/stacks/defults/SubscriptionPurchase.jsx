import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeAreaProvider from '../../../providers/SafeAreaProvider';
import { otherIcons } from '../../../constant/images';
import HeadingText from '../../../typography/HeadingText';
import ButtonBG from '../../../components/ui/buttons/ButtonBG';
import { useHandleFn } from '../../../constant/handlerFn';

export default function SubscriptionPurchase() {
  const { height } = Dimensions.get('window');
  const { top, bottom } = useSafeAreaInsets();
  const handlePurchase = useHandleFn();
  const subscriptionData = {
    title: 'Annual Access',
    price: '$9.99',
    description: 'Subscribe for $19.99/year',
    discount: 'Service launch discount $10/year',
    included: [
      'Search all youth Sport events',
      'View full event details',
      'Click external links to register',
      'Save events to your list',
    ],
  };

  return (
    <SafeAreaProvider>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { minHeight: height - top - bottom },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {/* Header Section */}
          <View style={styles.header}>
            <HeadingText text={subscriptionData.title} />
            <Text style={styles.description}>{subscriptionData.description}</Text>
            <Text style={styles.discount}>{subscriptionData.discount}</Text>
          </View>

          {/* What's Included Section */}
          <Text style={styles.sectionTitle}>What’s Included</Text>
          <View style={styles.listContainer}>
            {subscriptionData.included.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Image source={otherIcons.checkmark} style={styles.icon} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>

          <ButtonBG
            text="Purchase"
            handler={handlePurchase}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    marginTop: 4,
  },
  discount: {
    fontSize: 14,
    color: '#10B981',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#111827',
  },
  listContainer: {
    gap: 8,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 22,
    height: 22,
  },
  listText: {
    fontSize: 14,
    color: '#374151',
  },
  buttonContainer: {
    marginTop: 12,
  },
});
