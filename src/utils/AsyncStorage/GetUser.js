import AsyncStorage from '@react-native-async-storage/async-storage';

export async function GetUser() {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Kullanıcı alınırken bir hata oluştu:', error);
    return null;
  }
}
