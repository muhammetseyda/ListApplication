import { StyleSheet, Text, View, ScrollView,TextInput } from 'react-native'

import React from 'react'

export default function AddListNameCard() {
  return (
    <View style={styles.NameMainView}>
            <Text style={styles.ListNameText}>
              Liste Adı
              </Text>
            <View style={styles.ListNameView}>
              <TextInput
              style={styles.ListNameInput}
              placeholder='Listenizin Adını Giriniz'
              />
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    ListNameInput:{
      height: 50,
      width:'90%',
      marginHorizontal: '5%',
      fontSize: 18
    },
    ListNameView:{
      margin:10,
      backgroundColor:'#ffd6ff',
      borderWidth:2,
      borderColor: 'gray',
      borderRadius: 10
    },
    NameMainView:{
      backgroundColor: '#e7c6ff',
      margin: 10,
      borderRadius: 10,
    },
    ListNameText:{
      textAlign:'center',
      fontSize:20,
      marginTop:10,
    },
})