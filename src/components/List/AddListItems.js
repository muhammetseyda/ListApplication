import { StyleSheet, Text, View, ScrollView,TextInput } from 'react-native'
import React from 'react'
import Button from '../atoms/Button'
import AddListNameCard from '../molecules/AddListNameCard'
import AddListMaddeleriCard from '../molecules/AddListMaddeleriCard'

export default function AddListItems() {
    return (
        <ScrollView style={styles.Main}>
          {/* <AddListNameCard/> */}
        <AddListMaddeleriCard/>
        </ScrollView>
      )
    }
    
    const styles = StyleSheet.create({
      Main:{
        
      },
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
      DescriptionView:{
        margin:10,
        backgroundColor:'#ffd6ff',
        borderWidth:2,
        borderColor: 'gray',
        borderRadius: 10
      },
      DescriptionInput:{
        height: 50,
        width:'90%',
        marginHorizontal: '5%',
        fontSize: 18
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
      DescripitonMainView:{
        backgroundColor:'#e7c6ff',
        margin: 10,
        borderRadius: 10,
    
      },
      DescriptionNameText:{
        textAlign:'center',
        fontSize:20,
        marginTop:5,
      },
      
    })