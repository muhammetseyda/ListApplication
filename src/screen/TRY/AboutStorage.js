import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreateKeys } from '../../utils/AsyncStorage/CreateKeys'
import Button from '../../components/atoms/Button'


export default function aboutStorage() {
  return (
    <View>
      <Button onPress={CreateKeys}>CreateKeys</Button>
    </View>
  )
}

const styles = StyleSheet.create({})