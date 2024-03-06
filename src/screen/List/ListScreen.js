import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import GetListDetails from '../../components/List/GetListDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddListButton from '../../components/List/AddListButton';
import ListDetailOptionsModal from '../../components/molecules/ListDetailOptionsModal';
import { DeleteListById } from '../../utils/AsyncStorage/DeleteListById';
//onPress={() => navigation.navigate("ADD LİST")}

export default function ListScren() {
  const navigation = useNavigation();
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try { 
        const jsonValue = await AsyncStorage.getItem('myList');
        if(jsonValue !== null) {
          const parsedList = JSON.parse(jsonValue);
                const reversedList = parsedList.reverse(); 
                setMyList(reversedList);
        } 
        const jsNesne = JSON.parse(jsonValue);

      } catch(e) {
        console.error('myList alınırken hata oluştu:', e);
      }
    };

    getData();
  });
 
  return (
 
    <ScrollView contentContainerStyle={styles.container} >
      <TouchableOpacity style={styles.MainAddView} onPress={() => navigation.navigate("ADD LİST", {screen: "Liste Ekle"})}>
      {/* <TouchableOpacity style={styles.MainAddView} onPress={DeleteListById(21)}> */}
          <View style={styles.addView}>
            <AddListButton/>
          </View>
      </TouchableOpacity>
      {myList.map((liste, index) => (
        <TouchableOpacity key={index} style={styles.MainView} onPress={() => navigation.navigate("Liste Detayı", { liste: liste })}>
          <GetListDetails liste={liste} />
        </TouchableOpacity>
      ))}
        <TouchableOpacity style={styles.MainView} onPress={() => navigation.navigate("ADD LİST", {screen: "Liste Ekle"})}>

      <View>
        <View>
        <Text style={styles.MainText}  numberOfLines={1} ellipsizeMode="tail">Liste</Text>
        </View>
        <View style={styles.listeekle}>
            <Text style={styles.listeklemekicintikla} >
              Eklemek İçin Tıklayınız
            </Text>
        </View>
      </View>
      </TouchableOpacity>

    </ScrollView>
    )
}

const styles = StyleSheet.create({
  listeklemekicintikla:{
    textAlign:'center',
    fontSize: 20,

  },
  listeekle:{
    paddingLeft:5,
    paddingTop:30,

  },
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingBottom:20,

  },
  MainView:{
    margin: 15,
    backgroundColor: "#ffd6ff",
    height: 200,
    width:'42%',
    borderRadius:10,
  },
  MainAddView:{
    width:'100%',
    padding:10,

  },
  MainText:{
    textAlign: "center",
    marginTop:10,
    fontSize: 20,
    borderBottomWidth:5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    paddingLeft:5,
    fontFamily: 'Ubuntu-Italic',
  },
  ListView:{
    padding:5,
    backgroundColor:'blue',
    maxHeight:'90%',
  },
  ListText:{
    fontSize: 18,
  },
  addView:{
    // paddingBottom:10,
  },
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
  
})