import { StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListDetailOptionsModal from '../molecules/ListDetailOptionsModal';


export default function DotsVertical({listId}) {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleLikeModal = () =>{
        setModalVisible(!modalVisible);
      }
  

    return (
        <TouchableOpacity onPress={toggleLikeModal}>
            <Icon name="dots-vertical" size={25} />
            <ListDetailOptionsModal
            key="options-modal"
            isVisible={modalVisible}
            onClose={toggleLikeModal}
            listId={listId}/>
        </TouchableOpacity>

           
    )
  }
  
  const styles = StyleSheet.create({
    
  });