import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddListButton() {
  return (
    <View style={styles.container}>
        <View style={styles.IconView}>
        <Icon name="plus-circle-outline" size={50} />
        </View>
        <View style={styles.TextView}>
            <Text style={styles.textMain}>
                Liste Ekle
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:"#c8b6ff",
        flexDirection:'row',
    },
    TextView:{
        padding:5,
        borderRadius:20,
        flex:1,
        justifyContent:'center',
    },
    IconView:{ 
        borderRadius: 30,
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    textMain:{
        fontSize:20,
        fontFamily: 'Ubuntu-Italic',
    }

})