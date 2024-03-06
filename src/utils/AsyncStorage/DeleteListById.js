import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeleteListById = async (id) => {
  try {
    const jsonValue = await AsyncStorage.getItem('myList');
    if (jsonValue !== null) {
      const existingLists = JSON.parse(jsonValue);
      const updatedLists = existingLists.filter((list) => list.id !== id);
      await AsyncStorage.setItem('myList', JSON.stringify(updatedLists));
      console.log('Liste başarıyla silindi.');
      return true; 
    } else {
      console.log('myList bulunamadı.');
      return false; 
    }
  } catch (error) {
    console.error('Liste silinirken bir hata oluştu:', error);
    return false; 
  }
};
