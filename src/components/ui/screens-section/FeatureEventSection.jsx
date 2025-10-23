import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React from 'react'
import SectionTitle from '../repeated/SectionTitle'
import FeaturedEventsCard from '../cards/FeaturedEventsCard'

export default function FeatureEventSection() {
    const events = [
        {
            id: 1,
            title: 'Summer Soccer Camp 2025',
            location: 'New York, USA',
            dateRange: 'June 15-17, 2025',
            ages: '10-14',
            rating: 4.9,
            reviewCount: 24,
            sport: 'Soccer',
            photoUrl: 'https://picsum.photos/400/300',
        },
        {
            id: 2,
            title: 'Basketball Skills Academy',
            location: 'Los Angeles, CA',
            dateRange: 'July 10-12, 2025',
            ages: '12-16',
            rating: 4.7,
            reviewCount: 18,
            sport: 'Basketball',
            photoUrl: 'https://picsum.photos/400/300?random=1',
        },
        {
            id: 3,
            title: 'Junior Tennis Championship',
            location: 'Miami, FL',
            dateRange: 'August 5-7, 2025',
            ages: '8-12',
            rating: 4.8,
            reviewCount: 32,
            sport: 'Tennis',
            photoUrl: 'https://picsum.photos/400/300?random=2',
        },
        {
            id: 4,
            title: 'Swimming Intensive Training',
            location: 'Chicago, IL',
            dateRange: 'June 22-24, 2025',
            ages: '9-13',
            rating: 4.9,
            reviewCount: 27,
            sport: 'Swimming',
            photoUrl: 'https://picsum.photos/400/300?random=3',
        },
    ];



    return (
        <View>
            <SectionTitle
                title="Featured Events"
                style={{ marginTop: 12, marginBottom: 12 }}
                buttonText='See All'
                onPress={() => Alert.alert('See All')}
            />
            <FlatList
                data={events}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <FeaturedEventsCard camp={item} />}
                contentContainerStyle={styles.eventList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    eventList: {
        paddingVertical: 16,
        gap: 12,
    },
})