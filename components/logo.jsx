import React from 'react'
import { Image } from 'react-native'

function Logo({ source, style }) {
    return (
        <Image source={source}
            style={[{ width: 100, height: 90 }, style]}
        />
    )
}

export default Logo
