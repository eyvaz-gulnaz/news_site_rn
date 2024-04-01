import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface headerProps {
  setCategory: (category: string) => void
}

const Header: React.FC<headerProps> = ({ setCategory }) => {

  return (
    <View style={styles.headerInside}>
      <Text onPress={() => setCategory('business')} style={styles.headerText}>Business</Text>
      <Text onPress={() => setCategory('entertainment')} style={styles.headerText}>Entertainment</Text>
      <Text onPress={() => setCategory("general")} style={styles.headerText}>General</Text>
      <Text onPress={() => setCategory("health")} style={styles.headerText}>Health</Text>
      <Text onPress={() => setCategory("science")} style={styles.headerText}>Science</Text>
      <Text onPress={() => setCategory("sports")} style={styles.headerText}>Sports</Text>
      <Text onPress={() => setCategory("technology")} style={styles.headerText}>Technlogy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerInside: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 4,
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: "wrap",
    gap: 10
  },
  headerText: {
    borderWidth: 1,
    borderColor: "darkgrey",
    backgroundColor: "lightgrey"
  }
})

export default Header
