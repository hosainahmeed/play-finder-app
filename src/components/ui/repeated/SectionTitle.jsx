import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeadingText from '../../../typography/HeadingText'

export default function SectionTitle({ title = 'default', style, buttonText = 'default', onPress }) {
    return (
        <View
            style={[style, { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}
        >
            <HeadingText text={title} />
            <TouchableOpacity
                onPress={onPress}
            >
                <Text>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})