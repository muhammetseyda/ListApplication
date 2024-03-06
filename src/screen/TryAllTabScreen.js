import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AboutStorage from './TRY/AboutStorage'
import SaveDataByKey from './TRY/SaveDataByKey'
import { useNavigation } from '@react-navigation/native';
import Button from '../components/atoms/Button';
import DeleteDataByKey from './TRY/DeleteDataByKey';



export default function TryAllTabScreen() {
  const navigation = useNavigation();

  return (
    <View>
        <View style={{padding: 20}}>
            <AboutStorage />
        </View>
        <View style={{padding:10}}>
            <SaveDataByKey/>
        </View>
        <View style={{padding:20}}>
            <Button onPress={() => navigation.navigate("GetKey")}>GetKeyList</Button>
        </View>
        <View style={{padding:10}}>
            <Button onPress={() => navigation.navigate("GetUser")}>GetKeyUser</Button>
        </View>
        <View style={{padding:10}}>
            <DeleteDataByKey/>
        </View>
        <View  style={{padding:15}}>
        <Button onPress={() => navigation.navigate("ColorPalette")}>Color Palet</Button>
      <Button onPress={() => navigation.navigate("FontFamily")}>Font Family</Button>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})