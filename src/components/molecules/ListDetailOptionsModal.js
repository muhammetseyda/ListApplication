import { StyleSheet, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Share } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DeleteListById } from '../../utils/AsyncStorage/DeleteListById';
import { useNavigation } from '@react-navigation/native';


export default function ListDetailOptionsModal({isVisible, onClose, listId}) {
  console.log(listId);
  const navigation = useNavigation();

  const deleteList = async (id) => {
    await DeleteListById(id);
    navigation.navigate('Listelerim');
  };
  const editList = async () => {
    navigation.navigate('Liste Düzenle',{ liste: listId });
  };
  const paylas = async (metin) => {
    try {
      let metin1 = `${metin.listeAdi}\n\n`;
      metin.listeMaddeleri.forEach((madde, index) => {
        metin1 += `${index + 1}. ${madde.aciklama}\n`;
      });
      await Share.share({
        message: metin1,
      });
    } catch (error) {
      console.error("paylaş hatası", error.message);
    }
  };
  
  return (
    <Modal
          visible={isVisible}
          transparent={true}
          animationType="animation"
          style={styles.centeredView}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.optionsView}>
                    <Text style={styles.mainText}>SEÇENEKLER</Text>
                    {/* <Text>{listId.id}</Text> */}
                </View>
                <View>
                <TouchableOpacity style={styles.editView} onPress={() => navigation.navigate("Liste Düzenle", {liste: listId})}>
                    <Icon name="note-edit" color={'#2BCB6F'} size={35} />
                    <Text style={styles.editText}>Düzenle</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.editView} onPress={()=>deleteList(listId.id)}>
                    <Icon name="delete" color={'#C50D0D'} size={35} />
                    <Text style={styles.editText}>Sil</Text>
                </TouchableOpacity>
                </View><View>
                <TouchableOpacity style={styles.editView} onPress={() => paylas(listId)}>
                    <Icon name="share" color={'#0747E5'} size={35} />
                    <Text style={styles.editText}>Paylaş</Text>
                </TouchableOpacity>
                </View>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackground}></View>
            </TouchableWithoutFeedback>
        </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        width:'50%',
      },
      modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      },
      mainText:{
        fontSize:20,
        paddingBottom:20,
        textAlign:'center',
        fontWeight:'bold'
      },
      editView:{
        flexDirection:'row',
        textAlign:'center',
        justifyContent:'flex-start',
        alignItems:'center',
        marginLeft:20,
        margin:5
      },
      editText:{
        fontSize:20,
        paddingLeft:10,
      },
      optionsView:{
        justifyContent: 'center',
         alignItems: 'center',
         textAlign:'center',
         marginBottom:-10
      }
})