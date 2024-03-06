import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import DatePicker from "react-native-date-picker";
import React,{useState, useEffect} from 'react';
import Button from '../../components/atoms/Button';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddUser} from '../../utils/AsyncStorage/AddUser';
import { GetUser } from '../../utils/AsyncStorage/GetUser';



export default function SettingsScreen() {
  const [gender, setGender] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [textInputValue, setTextInputValue] = useState('');
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setOpen(false);
    setTextInputValue(formatDate(newDate));
    handleChangeDogumTarihi(formatDate(newDate));
    
  };
  const formatDate = (date) => {
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };
  const navigation = useNavigation();
  const [user, setUser] = useState({
    ad:'',
    soyad:'',
    gender:'',
    dogumtarihi:'',
  })
  const handleChangeAd = (text) => {
    setUser({ ...user, ad: text });
  };

  const handleChangeSoyad = (text) => {
    setUser({ ...user, soyad: text });
  };

  const handleChangeGender = (text) => {
    setUser({ ...user, gender: text });
  };

  const handleChangeDogumTarihi = (text) => {
    setUser({ ...user, dogumtarihi: text });
  };
console.log(user);

// const getAllKeys = async () => {
//   try {
//     const keys = await AsyncStorage.getAllKeys();
//     console.log("Tüm anahtarlar:", keys);
//     return keys;
//   } catch (error) {
//     console.error("Anahtarları alırken bir hata oluştu:", error);
//     return [];
//   }
// };     
// getAllKeys();

const kaydet = async () => {
  try {
    await AddUser(user);
    console.log("başarıyla kaydedildi.");
  } catch (error) {
    console.error("adduser hatası", error.message);
  }
}

const [account, setAccount] = useState([]);

// const getuser = async () => {
//   const accountuser = await GetUser();
//   setAccount(accountuser);
//   setUser(account);
// }
useEffect(() => {
  const getData = async () => {
    try { 
      const jsonValue = await AsyncStorage.getItem('user');
      if(jsonValue !== null) {
        const parsedList = JSON.parse(jsonValue);
              const reversedList = parsedList[0]; 
              setUser(reversedList);
      } 
      const jsNesne = JSON.parse(jsonValue);

    } catch(e) {
      console.error('user alınırken hata oluştu:', e);
    }
  };
  getData();
}, []);
  return (
    
    <View style={styles.container}>
      <View style={styles.NameContainer}>
        <View style={styles.NameTextView}>
          <Text style={styles.NameText}>Adınız:</Text>
        </View>
        <View style={styles.NameView}>
          <TextInput
            style={styles.NameInput}
            placeholder=' Adınızı yazınız'
            value={user.ad}
            onChangeText={handleChangeAd}
          />
        </View>
      </View>
      <View style={styles.NameContainer}>
        <View style={styles.NameTextView}>
          <Text style={styles.NameText}>Soyadınız:</Text>
        </View>
        <View style={styles.NameView}>
          <TextInput
            style={styles.NameInput}
            placeholder=' Soyadınızı yazınız'
            value={user.soyad}
            onChangeText={handleChangeSoyad}
          />
        </View>
        
      </View>
      <View style={styles.NameContainer}>
        <View style={styles.NameTextView}>
          <Text style={styles.NameText}>Cinsiyetiniz:</Text>
         
        </View>
        <View style={styles.NameView}>
        <Picker
          selectedValue={user.gender}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => handleChangeGender(itemValue)}
        >
          <Picker.Item label="Seçiniz" value="" />
          <Picker.Item label="Kadın" value="kadin" />
          <Picker.Item label="Erkek" value="erkek" />
          <Picker.Item label="Belirtmek İstemiyorum" value="diger" />
        </Picker>
        </View>
        
        
        
      </View>
      <View style={styles.NameContainer}>
        <View style={styles.NameTextView}>
          <Text style={styles.NameText}>Doğum Tarihiniz:</Text>
        </View>
        <View style={styles.datepickercontainer}>
          <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
            <View style={styles.DatePicker}>
              <DatePicker
                modal
                open={open}
                date={date}
                mode='date'
                onConfirm={(selectedDate) => {
                  setOpen(false);
                  handleDateChange(selectedDate);
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
              <TextInput
                style={styles.NameInput}
                value={user.dogumtarihi}
                placeholder="00/00/0000"
                editable={false}  
              />
            </View>
            <View style={styles.IconView}>
              <Icon name="arrow-down" size={24} color="black" style={styles.downIcon}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button onPress={kaydet}>KAYDET</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  picker: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  NameInput:{
    height: 50,
    marginHorizontal: '5%',
    fontSize: 18,
    fontFamily: 'Ubuntu-Italic',
  },
  NameView:{
    margin:10,
    backgroundColor:'#ffd6ff',
    borderWidth:2,
    borderColor: 'gray',
    borderRadius: 10,
    flex:1,
  },
  NameContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  NameTextView:{
    marginLeft:10

  },
  NameText:{
    fontSize:17,
    fontFamily: 'Ubuntu-Italic',
  },
  buttonView:{
    paddingTop:10,
  },
  downIcon:{
    textAlign:'right',
    marginRight:10,
  },
  DatePicker:{
    alignItems:'flex-start',
    flex:1,
    marginLeft:10,
  },
  IconView:{
    alignItems:'flex-end',
    flex:1,

  },
  dateInput:{
  },
  datepickercontainer:{
    margin:10,
    backgroundColor:'#ffd6ff',
    borderWidth:2,
    borderColor: 'gray',
    borderRadius: 10,
    flex:1,
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },

});
