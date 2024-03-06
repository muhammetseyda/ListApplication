import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/atoms/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DeleteDataByKey() {
    const deleteMyList = async () => {
        try {
          await AsyncStorage.removeItem('myList');
          console.log('myList başarıyla silindi.');
        } catch (error) {
          console.error('myList silinirken hata oluştu:', error);
        }
      };
    
      return (
        <View style={styles.container}>
          <Text>TryAllTabScreen</Text>
          <Button onPress={deleteMyList}>KEYE Göre Veri Sil</Button>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });