import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import ListScreen from './List/ListScreen'

export default function ListTabScreen() {
  return (
    <ScrollView>
        <View>
            <ListScreen/> 
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})