import AsyncStorage from '@react-native-async-storage/async-storage';

export async function GetEndListId() {
    try {
        const jsonValue = await AsyncStorage.getItem('myList');
        if (jsonValue !== null) {
            const parsedList = JSON.parse(jsonValue);
            const reversedList = parsedList.reverse(); 
            return reversedList[0].id; 
        } else {
            return 0;
        }
    } catch (error) {
        console.error('myList alınırken hata oluştu:', error);
        return null;
    }
}