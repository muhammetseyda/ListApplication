import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Button from '../../components/atoms/Button';
import ListDetailOptionsModal from '../../components/molecules/ListDetailOptionsModal';
import { useNavigation } from '@react-navigation/native';

export default function ListDetailScreen({route}) {
    const { liste } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    const toggleLikeModal = () =>{
        setModalVisible(!modalVisible);
      }
    return (
      <View>
      <View style={styles.optionsView}>
          <Button onPress={toggleLikeModal}>SEÇENEKLER</Button>
          <ListDetailOptionsModal
            key="options-modal"
            isVisible={modalVisible}
            onClose={toggleLikeModal}
            listId={liste}/>
      </View>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.mainTitle}>{liste.listeAdi}</Text>
                <View style={styles.listContainer}>
                    {liste.listeMaddeleri.map((madde, index) => (
                        <Text key={index} style={styles.listItem}>
                            {madde.sira}. {madde.aciklama}
                        </Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical:20,
    },
    mainTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    listContainer: {
      marginLeft: 20,
    },
    listItem: {
      fontSize: 16,
      marginBottom: 5,
    },
    optionsView:{
      marginTop:10,
    },  
  });