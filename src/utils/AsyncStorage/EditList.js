import AsyncStorage from '@react-native-async-storage/async-storage';

export const EditList = async (id, yeniListe) => {
  try {
    const jsonValue = await AsyncStorage.getItem('myList');
    if (jsonValue !== null) {
      const existingLists = JSON.parse(jsonValue);
      // Belirli bir id'ye sahip listeyi bul
      const duzenlenecekListeIndex = existingLists.findIndex(liste => liste.id === id);
      if (duzenlenecekListeIndex !== -1) {
        // Listeyi bulduktan sonra yeni adı ve maddeleri ile güncelle
        existingLists[duzenlenecekListeIndex] = yeniListe;
        // Güncellenmiş listeyi tekrar kaydet
        await AsyncStorage.setItem('myList', JSON.stringify(existingLists));
        console.log('Liste başarıyla düzenlendi.');
        return true; 
      } else {
        console.log('Belirtilen id ile bir liste bulunamadı.');
        return false; 
      }
    } else {
      console.log('myList bulunamadı.');
      return false; 
    }
  } catch (error) {
    console.error('Liste düzenlenirken bir hata oluştu:', error);
    return false; 
  }
};
