import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import React from 'react'
import Button from '../components/atoms/Button'
import AddListItems from '../components/List/AddListItems'

export default function AddListScreen() {
  return(
    <View>
      <AddListItems/>
    </View>
  )
}

const styles = StyleSheet.create({})