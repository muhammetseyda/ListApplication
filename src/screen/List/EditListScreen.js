import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/atoms/Button';
import { GetEndListId } from '../../utils/AsyncStorage/GetEndListId';
import { AddList } from '../../utils/AsyncStorage/AddList';
import ModalError from '../../components/molecules/ModalError';
import { useNavigation } from '@react-navigation/native';
import { EditList } from '../../utils/AsyncStorage/EditList';

export default function EditListScreen({route}) {
    const { liste } = route.params;
    console.log(liste);
    const navigation = useNavigation();

    const [listName, setListName] = useState(liste.listeAdi);
    const [inputs, setInputs] = useState(liste.listeMaddeleri); 
    const [formData, setformData] = useState(liste.listeMaddeleri.map(madde => madde.aciklama));
    
    // console.log(formData); 
    
    const addInput = () => {
      // setInputs([...inputs, '']);
      setformData([...formData, '']);
    };
    const removeInput = (indexToRemove) => {
      const newInputs = [...formData]; 
      // console.log(newInputs);
      newInputs.splice(indexToRemove, 1); 
      // console.log(newInputs);
      setformData(newInputs); 
  };
  
  const handleChange = (text, index) => {
    const newInputs = [...formData];
    newInputs[index] = text;
    setformData(newInputs);
  };
  // console.log(inputs);
  const kaydet = async () => {
    if (!listName) {
      toggleAlert();
      return;
    }
    if (formData.some(item => !item)) {
      Alert.alert('Hata', 'Açıklama boş olamaz.');
      return; 
    }
  
    try {
        // const lastListId = await GetEndListId();
        
        const newListObject = {
            id: liste.id, 
            listeAdi: listName,
            listeMaddeleri: formData.map((item, index) => ({
                listid:liste.id,
                id: index + 1,
                sira: index + 1,
                aciklama: item
            }))
        };
  
        console.log(JSON.stringify(newListObject));
        await EditList(liste.id,newListObject);
        // setListName('');
        // setInputs(['']);
      navigation.navigate('Listelerim');
  
    } catch (error) {
        console.error('Hata:', error);
    }
  };
  
  
  const [showAlert, setShowAlert] = useState(false);
  
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };
  return (
    <ScrollView>
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
          {formData.map((value, index) => (
        <View key={index} style={styles.DescriptionView}>
          <TextInput
            style={styles.DescriptionInput}
            placeholder={`Maddeleri Yazınız - ${index+1}`}
            value={value}
            onChangeText={(text) => handleChange(text, index)} 
          />
          
          {index !== 0 && ( 
            <TouchableOpacity onPress={() => removeInput(index)} style={styles.IconView}>
              <Icon name="minus-circle-outline" size={24} color="red" style={styles.IconStyle} />
            </TouchableOpacity>
          )}
        </View>
      ))}
      <View style={styles.IconView}>
        <TouchableOpacity style={styles.AddMaddeIcon} onPress={addInput}>
          <Icon name="plus-circle-outline" size={50} color="gray" style={styles.IconStyle}/>
        </TouchableOpacity>
      </View>
    </View>
    {showAlert && (
      <ModalError
        title="Hata"
        message="Liste adı boş olamaz."
        onClose={toggleAlert}
      />
    )}
    <Button onPress={kaydet}>KAYDET</Button>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical:20,
  },
// DescriptionInput:{
//   width:'85%',
//   marginLeft:'5%',
//   fontSize: 18,
//   borderWidth:1,
//   textAlign:'left',
// },
DescriptionNameText:{
  textAlign:'center',
  fontSize:20,
  marginTop:5,
  borderWidth:1,
  marginBottom:5,
},
listItem:{
  borderWidth:1,
  margin:5,
},
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
textAlign:'left',
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

{/* <View>
<ScrollView>
    <View style={styles.container}>
        <TextInput style={styles.DescriptionNameText}
        value={liste.listeAdi}/>
        <View style={styles.DescriptionInput}>
            {liste.listeMaddeleri.map((madde, index) => (
                <TextInput key={index} style={styles.listItem}
                value={madde.aciklama}
                />
                
            ))}
        </View>
    </View>
</ScrollView>
</View> */}