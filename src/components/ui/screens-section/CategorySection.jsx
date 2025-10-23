import { StyleSheet, View, FlatList, Alert } from 'react-native'
import React from 'react'
import CategoryCard from '../cards/CategoryCard';
import SectionTitle from '../repeated/SectionTitle';

export default function CategorySection() {
    const categories = [
        { id: 1, title: 'Soccer' },
        { id: 2, title: 'Basketball' },
        { id: 3, title: 'Tennis' },
        { id: 4, title: 'Swimming' },
    ];
    return (
        <View>
            <SectionTitle
                title="Sports Categories"
                style={{ marginTop: 12, marginBottom: 12 }}
                buttonText='View All'
                onPress={() => Alert.alert('View All')}
            />
            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CategoryCard title={item.title} />}
                contentContainerStyle={styles.categoryList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryList: {
        paddingVertical: 1,
        gap: 1,
        justifyContent: 'space-between',
    },
})