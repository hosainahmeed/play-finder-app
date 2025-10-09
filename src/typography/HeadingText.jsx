import React from 'react'
import { Text } from 'react-native'

function HeadingText({ text, style }) {
    return (
        <Text style={[style, { color: 'black', fontSize: 18, fontWeight: 'bold' }]}>{text}</Text>
    )
}

export default HeadingText