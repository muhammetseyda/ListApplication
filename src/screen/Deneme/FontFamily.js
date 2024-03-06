import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FontFamily() {
  return (
    <ScrollView style={styles.scroller}>
      <Text style={[styles.text, { fontFamily: 'Ubuntu-Bold' }]}>Ubuntu-Bold</Text>
      <Text style={[styles.text, { fontFamily: 'Ubuntu-BoldItalic' }]}>Ubuntu-BoldItalic</Text>
      <Text style={[styles.text, { fontFamily: 'Ubuntu-LightItalic' }]}>Ubuntu-LightItalic</Text>
      <Text style={[styles.text, { fontFamily: 'Ubuntu-Medium' }]}>Ubuntu-Medium</Text>
      <Text style={[styles.text, { fontFamily: 'Ubuntu-Regular' }]}>Ubuntu-regular</Text>
      <Text style={[styles.text, { fontFamily: 'Ubuntu-Italic' }]}>Ubuntu-Italic</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'normal' }]}>normal</Text>
      <Text style={[styles.text, { fontFamily: 'notoserif' }]}>notoserif</Text>
      <Text style={[styles.text, { fontFamily: 'sans-serif' }]}>sans-serif</Text>
      <Text style={[styles.text, { fontFamily: 'sans-serif-light' }]}>sans-serif-light</Text>
      <Text style={[styles.text, { fontFamily: 'sans-serif-thin' }]}>sans-serif-thin</Text>
      <Text style={[styles.text, { fontFamily: 'sans-serif-condensed' }]}>sans-serif-condensed</Text>
      <Text style={[styles.text, { fontFamily: 'sans-serif-medium' }]}>sans-serif-medium</Text>
      <Text style={[styles.text, { fontFamily: 'serif' }]}>serif</Text>
      <Text style={[styles.text, { fontFamily: 'Roboto' }]}>Roboto</Text>
      <Text style={[styles.text, { fontFamily: 'monospace' }]}>monospace</Text>
      <Text style={[styles.text, { fontFamily: 'academyengravedletplain' }]}>AcademyEngravedLetPlain</Text>
      <Text style={[styles.text, { fontFamily: 'AlNile-Bold' }]}>AlNile-Bold</Text>
      <Text style={[styles.text, { fontFamily: 'San Francisco' }]}>San Francisco</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroller: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
    },
  });