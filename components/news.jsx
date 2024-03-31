import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

function News(props) {
    const [newsDisplay, setNewsDisplay] = useState("none")
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
                <Image source={{ uri: props.sekil }} style={{ minWidth: "100%", minHeight: 200 }} />
                <View style={styles.hub}>
                    <Text style={styles.newsHeader}>{props.basliq}
                        {showMoreButton && (
                            <Text onPress={changeDisplay} style={styles.more}>...more</Text>
                        )}
                    </Text>
                    <Text style={{ display: newsDisplay }}> {props.xeber}
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
