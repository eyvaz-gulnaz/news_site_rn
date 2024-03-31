import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.headerInside}>
      <Text style={styles.headerText}>Esas Xeberler</Text>
      <Text style={styles.headerText}>Son xeberler</Text>
      <Text style={styles.headerText}>Siyaset</Text>
      <Text style={styles.headerText}>Iqtisadiyyet</Text>
      <Text style={styles.headerText}>Cemiyyet</Text>
      <Text style={styles.headerText}>Idman</Text>
      <Text style={styles.headerText}>Medeniyyet</Text>
      <Text style={styles.headerText}>Dunya</Text>
      <Text style={styles.headerText}>Analitika</Text>
      <Text style={styles.headerText}>Multimedia</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerInside: {
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
