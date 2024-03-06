import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DotsVertical from '../atoms/DotsVertical';

export default function GetListDetails({liste}) {
    const [listDetails, setListDetails] = useState([]);
    const numberOfVisibleItems = 6;

    
  
    return (
      <View>
        <View>
        <Text style={styles.MainText}  numberOfLines={1} ellipsizeMode="tail">{liste.listeAdi}</Text>
        {/* <DotsVertical/> */}
        </View>
        <View style={{paddingLeft:5}}>
          {liste.listeMaddeleri.slice(0, numberOfVisibleItems).map((madde, index) => (
            <Text key={index} style={styles.ListText}  numberOfLines={1} ellipsizeMode="tail">
              {madde.sira}. {madde.aciklama}
            </Text>
          ))}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    MainText: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 20,
      borderBottomWidth: 5,
      borderBottomColor: 'rgba(0, 0, 0, 0.5)',
      paddingLeft: 5,
      fontFamily: 'Ubuntu-Italic',
    },
    ListText: {
      fontSize: 18,
      
    },
  });