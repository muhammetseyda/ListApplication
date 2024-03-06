import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GetUserKeyScreen() {
  
    const [myList, setMyList] = useState([]);
  
    // AsyncStorage'den myList'i almak için useEffect kullanımı
    useEffect(() => {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user');
          if(jsonValue !== null) {
            setMyList(JSON.parse(jsonValue));
          }
          const jsNesne = JSON.parse(jsonValue);
  
  // JavaScript nesnesini konsola yazdırma
  console.log(JSON.stringify(jsNesne, null, 2));
  
  
  
        } catch(e) {
          console.error('user alınırken hata oluştu:', e);
        }
      };
  
      getData();
    }, []);
  
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>My User</Text>
        {myList.map((liste, index) => (
          <View key={index}>
            <Text style={styles.listName}>{liste.ad}</Text>
            <Text style={styles.listName}>{liste.soyad}</Text>
            <Text style={styles.listName}>{liste.gender}</Text>
            <Text style={styles.listName}>{liste.dogumtarihi}</Text>
            
          </View>
        ))}
        <Button title="MyList'i Yenile" onPress={() => {
          AsyncStorage.getItem('user').then(jsonValue => {
            setMyList(JSON.parse(jsonValue));
          }).catch(error => console.error('user yenilenirken hata oluştu:', error));
        }} />
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    listName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    itemsContainer: {
      marginLeft: 20,
      marginTop: 5,
    },
    item: {
      fontSize: 16,
      marginTop: 5,
    },
  });
  