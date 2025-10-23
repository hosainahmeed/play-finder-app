import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { IMAGE } from '../../../constant/images.js';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width / 2) - 20;

export default function CategoryCard({ title = 'Category' }) {
    return (
        <View style={styles.card}>
            <Image source={IMAGE.categoryBg} style={styles.image} />
            <View style={styles.overlay} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: CARD_SIZE,
        height: CARD_SIZE,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#f2f2f2',
        margin: 5,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    titleContainer: {
        position: 'absolute',
        bottom: 5,
        left: 10,
        alignItems: 'center',
    },
    title: {
        color: '#111',
        fontSize: 20,
        fontWeight: '600',
    },
});
