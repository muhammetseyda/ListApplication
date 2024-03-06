import AsyncStorage from '@react-native-async-storage/async-storage';

export async function AddUser(newUser) {
    try {
        // Mevcut kullanıcıları kaldır
        await AsyncStorage.removeItem('user');

        // Yeni kullanıcıları ekle
        const parsedList = [newUser];
        await AsyncStorage.setItem('user', JSON.stringify(parsedList));
    } catch (error) {
        console.error('user ekleme hatası:', error);
    }
}
