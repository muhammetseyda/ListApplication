import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ColorPalette() {
    return (
        <View style={styles.container}>
          <Text>Settings</Text>
          <View style={[styles.firstView, { backgroundColor: '#ffd6ff' }]}>
            <Text>#ffd6ff</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#e7c6ff', marginTop: 10 }]}>
            <Text>'#e7c6ff'</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#c8b6ff', marginTop: 10 }]}>
            <Text>'#c8b6ff'</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#b8c0ff', marginTop: 10 }]}>
            <Text>#b8c0ff</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#bbd0ff', marginTop: 10 }]}>
            <Text>#bbd0ff</Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
    },
    firstView: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
})