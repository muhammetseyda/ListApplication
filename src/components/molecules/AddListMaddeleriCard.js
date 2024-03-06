import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity,Alert,TouchableWithoutFeedback, Keyboard  } from 'react-native'
import React,{useState, useRef} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../atoms/Button';
import { GetEndListId } from '../../utils/AsyncStorage/GetEndListId';
import { AddList } from '../../utils/AsyncStorage/AddList';
import ModalError from './ModalError';
import { useNavigation } from '@react-navigation/native';


export default function AddListMaddeleriCard() {
  const navigation = useNavigation();

  const [listName, setListName] = useState('');
    const [inputs, setInputs] = useState(['']); 

  const addInput = () => {
    setInputs([...inputs, '']);
  };
  const removeInput = (indexToRemove) => {
    const newInputs = [...inputs]; 
    console.log(newInputs);
    newInputs.splice(indexToRemove, 1); 
    console.log(newInputs);
    setInputs(newInputs); 
};

const handleChange = (text, index) => {
  const newInputs = [...inputs];
  newInputs[index] = text;
  setInputs(newInputs);
};
console.log(inputs);
const kaydet = async () => {
  if (!listName) {
    toggleAlert();
    return;
  }
  if (inputs.some(item => !item)) {
    toggleAlert1();
    return; 
  }

  try {
      const lastListId = await GetEndListId();
      
      const newListObject = {
          id: lastListId + 1, 
          listeAdi: listName,
          listeMaddeleri: inputs.map((item, index) => ({
              listid: lastListId + 1,
              id: index + 1,
              sira: index + 1,
              aciklama: item
          }))
      };

      console.log(JSON.stringify(newListObject));
      await AddList(newListObject);
      setListName('');
      setInputs(['']);
    navigation.navigate('Listelerim');

  } catch (error) {
      console.error('Hata:', error);
  }
};


const [showAlert, setShowAlert] = useState(false);
const [showAlert1, setShowAlert1] = useState(false);

const toggleAlert = () => {
  setShowAlert(!showAlert);
};
const toggleAlert1 = () => {
  setShowAlert1(!showAlert1);
};

const handleFocusNextInput = (nextInputIndex) => {
  if (inputs[nextInputIndex]) {
    inputs[nextInputIndex].focus(); 
  }
};

const handleKeyPress = (nextInputIndex) => {
  addInput();
  handleFocusNextInput(nextInputIndex + 1);
};
const inputRefs = useRef([]);
  return (
    <View>
    <View style={styles.NameMainView}>
            <Text style={styles.ListNameText}>
              Liste Adı
              </Text>
            <View style={styles.ListNameView}>
            <TextInput
            style={styles.ListNameInput}
            placeholder='Listenizin Adını Giriniz'
            value={listName}
            onChangeText={setListName}
          />
            </View>
        </View>
    <View style={styles.DescripitonMainView}>
          <Text style={styles.DescriptionNameText}>
            Listenin Maddeleri
          </Text>
          {inputs.map((value, index) => (
        <View key={index} style={styles.DescriptionView}>
          <TextInput
          key={index}
          ref={(ref) => inputRefs.current[index] = ref}
          returnKeyType="next"
          multiline={false}
            style={styles.DescriptionInput}
            placeholder={`Maddeleri Yazınız - ${index+1}`}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onSubmitEditing={() =>handleKeyPress(index)}
            
          />
          
          {index !== 0 && ( 
            <TouchableOpacity onPress={() => removeInput(index)} style={styles.IconView}>
              <Icon name="minus-circle-outline" size={24} color="red" style={styles.IconStyle} />
            </TouchableOpacity>
          )}
        </View>
      ))}
      <TouchableWithoutFeedback onPress={addInput}>
      <View style={styles.IconView}>
        <TouchableOpacity style={styles.AddMaddeIcon} onPress={addInput}>
          <Icon name="plus-circle-outline" size={50} color="gray" style={styles.IconStyle}/>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </View>
    {showAlert && (
      <ModalError
        title="Hata"
        message="Liste adı boş olamaz."
        onClose={toggleAlert}
      />
    )}
    {showAlert1 && (
      <ModalError
        title="Hata"
        message="Liste maddeleri boş olamaz."
        onClose={toggleAlert1}
      />
    )}
    <Button onPress={kaydet}>KAYDET</Button>

    </View>
  )
}

const styles = StyleSheet.create({
    SortingTouch:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5
    },
    DescriptionView:{
      margin:10,
      backgroundColor:'#ffd6ff',
      borderWidth:2,
      borderColor: 'gray',
      borderRadius: 10,
      flexDirection:'row',
    },
    DescriptionInput:{
      height: 50,
      width:'85%',
      marginLeft:'5%',
      fontSize: 18,
      fontFamily: 'Ubuntu-Italic',
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
      fontFamily: 'Ubuntu-Italic',
    },
    AddMaddeIcon:{
      borderRadius:30,
      borderColor:'gray',
      backgroundColor:'#c8b6ff'
    },
    IconStyle:{
    },
    IconView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:5,
    },
    ListNameInput:{
      height: 50,
      width:'90%',
      marginHorizontal: '5%',
      fontSize: 18,
      fontFamily: 'Ubuntu-Italic',
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
      fontFamily: 'Ubuntu-Italic',
    },
})