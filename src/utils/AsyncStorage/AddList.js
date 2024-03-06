import AsyncStorage from '@react-native-async-storage/async-storage';

export async function AddList(newList) {
    try {
        const jsonValue = await AsyncStorage.getItem('myList');
        let parsedList = [];
        if (jsonValue !== null) {
            parsedList = JSON.parse(jsonValue);
        }
        
        parsedList.push(newList);
        
        await AsyncStorage.setItem('myList', JSON.stringify(parsedList));
    } catch (error) {
        console.error('myList ekleme hatası:', error);
    }
}