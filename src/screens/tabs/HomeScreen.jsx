import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FeaturedEventsCard from '../../components/ui/cards/FeaturedEventsCard'
import SafeAreaProvider from '../../providers/SafeAreaProvider'

export default function HomeScreen() {
  const events = [
    {
      id: 1,
      title: "Summer Soccer Camp 2025",
      location: "New York, USA",
      dateRange: "June 15-17, 2025",
      ages: "10-14",
      rating: 4.9,
      reviewCount: 24,
      sport: "Soccer",
      photoUrl: "https://picsum.photos/400/300",
    },
    {
      id: 2,
      title: "Basketball Skills Academy",
      location: "Los Angeles, CA",
      dateRange: "July 10-12, 2025",
      ages: "12-16",
      rating: 4.7,
      reviewCount: 18,
      sport: "Basketball",
      photoUrl: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 3,
      title: "Junior Tennis Championship",
      location: "Miami, FL",
      dateRange: "August 5-7, 2025",
      ages: "8-12",
      rating: 4.8,
      reviewCount: 32,
      sport: "Tennis",
      photoUrl: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 4,
      title: "Swimming Intensive Training",
      location: "Chicago, IL",
      dateRange: "June 22-24, 2025",
      ages: "9-13",
      rating: 4.9,
      reviewCount: 27,
      sport: "Swimming",
      photoUrl: "https://picsum.photos/400/300?random=3",
    },
    {
      id: 5,
      title: "Baseball Summer League",
      location: "Houston, TX",
      dateRange: "July 18-20, 2025",
      ages: "11-15",
      rating: 4.6,
      reviewCount: 15,
      sport: "Baseball",
      photoUrl: "https://picsum.photos/400/300?random=4",
    },
    {
      id: 6,
      title: "Gymnastics Development Camp",
      location: "Phoenix, AZ",
      dateRange: "August 12-14, 2025",
      ages: "7-10",
      rating: 4.8,
      reviewCount: 21,
      sport: "Gymnastics",
      photoUrl: "https://picsum.photos/400/300?random=5",
    },
    {
      id: 7,
      title: "Volleyball Spike Clinic",
      location: "Seattle, WA",
      dateRange: "June 28-30, 2025",
      ages: "13-17",
      rating: 4.7,
      reviewCount: 19,
      sport: "Volleyball",
      photoUrl: "https://picsum.photos/400/300?random=6",
    },
    {
      id: 8,
      title: "Track & Field Youth Games",
      location: "Denver, CO",
      dateRange: "July 25-27, 2025",
      ages: "10-14",
      rating: 4.5,
      reviewCount: 16,
      sport: "Track & Field",
      photoUrl: "https://picsum.photos/400/300?random=7",
    },
    {
      id: 9,
      title: "Ice Hockey Winter Camp",
      location: "Boston, MA",
      dateRange: "December 10-12, 2025",
      ages: "11-16",
      rating: 4.9,
      reviewCount: 29,
      sport: "Ice Hockey",
      photoUrl: "https://picsum.photos/400/300?random=8",
    },
    {
      id: 10,
      title: "Martial Arts Summer Dojo",
      location: "San Diego, CA",
      dateRange: "July 5-7, 2025",
      ages: "6-12",
      rating: 4.8,
      reviewCount: 23,
      sport: "Martial Arts",
      photoUrl: "https://picsum.photos/400/300?random=9",
    }
  ];

  return (
    <SafeAreaProvider>
      <FlatList
        data={events}
        renderItem={({ item }) => <FeaturedEventsCard key={item.id} camp={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})