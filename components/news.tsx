import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

interface Props {
    basliq: string,
    sekil: string,
    xeber: string,
    mezmun: string
}

function News({ basliq, sekil, xeber, mezmun }: Props): JSX.Element {
    const [newsDisplay, setNewsDisplay] = useState<string>("none")
    const [showMoreButton, setShowMoreButton] = useState(true)

    function changeDisplay() {
        if (newsDisplay === "none") {
            setNewsDisplay("flex")
            setShowMoreButton(false)
        } else {
            setNewsDisplay("none")
            setShowMoreButton(true)
        }
    }

    return (
        <View style={styles.inside}>
            <View>
                {sekil && <Image source={{ uri: sekil }} style={{ minWidth: "100%", minHeight: 200 }} />}
                <View style={styles.hub}>
                    <Text style={styles.newsHeader}>{basliq} </Text>
                    <Text> {mezmun}
                        {showMoreButton && (
                            <Text onPress={changeDisplay} style={styles.more}>...more</Text>
                        )}
                    </Text>
                    <Text style={{ display: newsDisplay as any }}> {xeber}
                        <Text onPress={changeDisplay} style={styles.less}>...less</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inside: {
        padding: 20,
        flexDirection: "row"
    },
    hub: {
        paddingTop: 20
    },
    newsHeader: {
        fontWeight: '700',
        paddingBottom: 20
    },
    more: {
        color: "blue",
        fontStyle: "italic"
    },
    less: {
        color: "blue",
        fontStyle: "italic"
    }
})

export default News
