import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button
 from '../../components/atoms/Button';


export default function SaveDataByKey() {
  // Rasgele sayıda maddeler oluşturma fonksiyonu
  function rasgeleMaddeOlustur(sira,id,listItemId) {
    return {
        listid:id,
        id:listItemId,
        sira,
        aciklama: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, justo eu convallis scelerisque, velit eros vestibulum sem, nec finibus purus tortor eget purus.`
    };
  }

  // Verileri AsyncStorage'ye kaydetme fonksiyonu
  async function kaydetMyList() {
    try {
  //     const listeAdlari = ["Alışveriş Listesi", "Yapılacaklar Listesi", "Seyahat Planı", "Eğlenceli Aktiviteler", "Öğrenilecek Konular", "Kitap Okuma Listesi", "Film İzleme Listesi", "Yemek Tarifleri", "Spor Programı", "Hediye Fikirleri", "Ev İşleri"];
  //     const listeler = [];
  //     for (let i = 0; i < 20; i++) {
  //       const listeAdi = listeAdlari[Math.floor(Math.random() * listeAdlari.length)];
  //       const maddeSayisi = Math.floor(Math.random() * 26) + 5; // 5 ile 30 arasında rasgele sayı
  //       const maddeler = [];
  //       for (let j = 1; j <= maddeSayisi; j++) {
  //         maddeler.push(rasgeleMaddeOlustur(j,i,j));
  //       }
  //       listeler.push({ id:i,listeAdi, listeMaddeleri: maddeler });
  //     }
  //     await AsyncStorage.setItem('myList', JSON.stringify(listeler));
  //     console.log('myList kaydedildi.');
  //   } catch (error) {
  //     console.error('myList kaydedilirken hata oluştu:', error);
  //   }
  // }
  const listeler = [
    {
      id: 1,
    listeAdi: "Market Alışverişi",
    listeMaddeleri: [
      { listid: 1, id: 1, sira: 1, aciklama: "Süt, yoğurt, peynir ve tereyağı alınacak." },
      { listid: 1, id: 2, sira: 2, aciklama: "Taze ekmek, simit ve poğaça alınacak." },
      { listid: 1, id: 3, sira: 3, aciklama: "Yumurta, domates, salatalık ve biber alınacak." },
      { listid: 1, id: 4, sira: 4, aciklama: "Pirinç, makarna, bulgur ve mercimek alınacak." },
      { listid: 1, id: 5, sira: 5, aciklama: "Kırmızı et, tavuk eti ve balık alınacak." }
    ]
  },
  {
    id: 2,
    listeAdi: "Ev Temizliği",
    listeMaddeleri: [
      { listid: 2, id: 1, sira: 1, aciklama: "Oturma odası temizlenecek. Halılar yıkanacak, mobilyalar silinecek." },
      { listid: 2, id: 2, sira: 2, aciklama: "Mutfak temizlenecek. Tüm tezgahlar, dolaplar ve fırın temizlenecek." },
      { listid: 2, id: 3, sira: 3, aciklama: "Banyo temizlenecek. Duşakabin, lavabo ve tuvalet temizlenecek." },
      { listid: 2, id: 4, sira: 4, aciklama: "Yatak odası temizlenecek. Yatak çarşafları değiştirilecek, tozlar alınacak." }
    ]
  },
  {
    id: 3,
    listeAdi: "Yemek Planı",
    listeMaddeleri: [
      { listid: 3, id: 1, sira: 1, aciklama: "Pazartesi: Tavuklu sebzeli pilav ve cacık." },
      { listid: 3, id: 2, sira: 2, aciklama: "Salı: Patates püresi ve köfte." },
      { listid: 3, id: 3, sira: 3, aciklama: "Çarşamba: Ispanaklı börek ve yoğurt." },
      { listid: 3, id: 4, sira: 4, aciklama: "Perşembe: Mercimek çorbası ve ızgara somon." },
      { listid: 3, id: 5, sira: 5, aciklama: "Cuma: Makarna salatası ve tavuk kanat." }
    ]
  },
  {
    id: 4,
    listeAdi: "Spor Rutini",
    listeMaddeleri: [
      { listid: 4, id: 1, sira: 1, aciklama: "Pazartesi: 30 dakika koşu, 20 dakika kardiyo." },
      { listid: 4, id: 2, sira: 2, aciklama: "Salı: Pilates egzersizleri." },
      { listid: 4, id: 3, sira: 3, aciklama: "Çarşamba: Yoga ve esneme hareketleri." },
      { listid: 4, id: 4, sira: 4, aciklama: "Perşembe: Yüzme antrenmanı." },
      { listid: 4, id: 5, sira: 5, aciklama: "Cuma: Hafif tempolu yürüyüş." }
    ]
  },
  {
    id: 5,
    listeAdi: "Öğrenim Planı",
    listeMaddeleri: [
      { listid: 5, id: 1, sira: 1, aciklama: "Matematik dersi için problemler çözülecek." },
      { listid: 5, id: 2, sira: 2, aciklama: "Tarih dersi için kitap okunacak." },
      { listid: 5, id: 3, sira: 3, aciklama: "Bilim dersi için deneyler yapılacak." }
    ]
  },
  {
    id: 6,
    listeAdi: "Bahçe Bakımı",
    listeMaddeleri: [
      { listid: 6, id: 1, sira: 1, aciklama: "Çimler biçilecek, bahçe sulanacak." },
      { listid: 6, id: 2, sira: 2, aciklama: "Çiçekler budanacak, toprakları yenilenecek." },
      { listid: 6, id: 3, sira: 3, aciklama: "Sebzelerin bakımı yapılacak, hasat edilecek." }
    ]
  },
  {
    id: 7,
    listeAdi: "Evcil Hayvan Bakımı",
    listeMaddeleri: [
      { listid: 7, id: 1, sira: 1, aciklama: "Köpek için yürüyüş yapılacak, mama ve su yenilenecek." },
      { listid: 7, id: 2, sira: 2, aciklama: "Kedi için kum değiştirilecek, tüyleri taranacak." }
    ]
  },
  {
    id: 8,
    listeAdi: "Kendini Geliştirme",
    listeMaddeleri: [
      { listid: 8, id: 1, sira: 1, aciklama: "Yabancı dil öğrenme uygulaması kullanılacak." },
      { listid: 8, id: 2, sira: 2, aciklama: "Kişisel gelişim kitabı okunacak." }
    ]
  },
  {
    id: 9,
    listeAdi: "Gezi Planı",
    listeMaddeleri: [
      { listid: 9, id: 1, sira: 1, aciklama: "Gezilecek yerler araştırılacak." },
      { listid: 9, id: 2, sira: 2, aciklama: "Ulaşım ve konaklama düzenlenecek." }
    ]
  },
  {
    id: 10,
    listeAdi: "Proje Yönetimi",
    listeMaddeleri: [
      { listid: 10, id: 1, sira: 1, aciklama: "Proje hedefleri belirlenecek." },
      { listid: 10, id: 2, sira: 2, aciklama: "Proje planı oluşturulacak, görevler atanacak." },
      { listid: 10, id: 3, sira: 3, aciklama: "Proje takip edilecek, ilerleme raporlanacak." }
    ]
  },
  {
    id: 11,
    listeAdi: "Alışveriş Listesi",
    listeMaddeleri: [
      { listid: 11, id: 1, sira: 1, aciklama: "Marketten 2 litre süt alınacak. Ürünün son kullanma tarihine dikkat edilmeli." },
      { listid: 11, id: 2, sira: 2, aciklama: "Taze ve çıtır ekmeklerden 3 adet alınacak. Ekmeklerin tazeliğine dikkat edilmeli." },
      { listid: 11, id: 3, sira: 3, aciklama: "Organik ve kafes dışı yumurtalardan 1 karton alınacak. Paketlerin sağlam ve çatlak olmadığı kontrol edilmeli." }
    ]
  },
  {
    id: 12,
    listeAdi: "Ev Temizliği Listesi",
    listeMaddeleri: [
      { listid: 12, id: 1, sira: 1, aciklama: "Yatak odası: Yatak çarşafları ve kılıfları değiştirilecek, yerler süpürülecek ve toz alınacak." },
      { listid: 12, id: 2, sira: 2, aciklama: "Mutfak: Tüm tezgahlar ve dolaplar silinecek, bulaşıklar yıkanacak ve mutfak gereçleri yerleştirilecek." },
      { listid: 12, id: 3, sira: 3, aciklama: "Banyo: Duş kabini temizlenecek, lavabo ve tuvalet fırçalanacak ve banyo halıları değiştirilecek." }
    ]
  },
  {
    id: 13,
    listeAdi: "Haftalık Yemek Planı",
    listeMaddeleri: [
      { listid: 13, id: 1, sira: 1, aciklama: "Pazartesi: Zeytinyağlı enginar ve bulgur pilavı yapılacak." },
      { listid: 13, id: 2, sira: 2, aciklama: "Salı: Sebzeli karnabahar graten ve haşlanmış patates hazırlanacak." },
      { listid: 13, id: 3, sira: 3, aciklama: "Çarşamba: Izgara köfte, yeşil salata ve fırın patates pişirilecek." },
      { listid: 13, id: 4, sira: 4, aciklama: "Perşembe: Tavuk sote ve pilav yapılacak." },
      { listid: 13, id: 5, sira: 5, aciklama: "Cuma: Fırında somon balığı ve sebzeler hazırlanacak." }
    ]
  },
  {
    id: 14,
    listeAdi: "Spor Programı",
    listeMaddeleri: [
      { listid: 14, id: 1, sira: 1, aciklama: "Pazartesi: 30 dakika kardiyo egzersizi yapılacak. (Koşu veya bisiklet sürme tercih edilebilir)" },
      { listid: 14, id: 2, sira: 2, aciklama: "Salı: Pilates veya yoga dersi alınacak. Esneme ve nefes egzersizlerine odaklanılacak." }
    ]
  },
  {
    id: 15,
    listeAdi: "Alışveriş Listesi",
    listeMaddeleri: [
      { listid: 15, id: 1, sira: 1, aciklama: "Süt, yoğurt ve peynir alınacak." },
      { listid: 15, id: 2, sira: 2, aciklama: "Taze ekmek ve simit alınacak." },
      { listid: 15, id: 3, sira: 3, aciklama: "Yumurta alınacak." }
    ]
  },
  {
    id: 16,
    listeAdi: "Yapılacaklar Listesi",
    listeMaddeleri: [
      { listid: 16, id: 1, sira: 1, aciklama: "Ev temizliği yapılacak. Tüm odalar düzenlenecek." },
      { listid: 16, id: 2, sira: 2, aciklama: "Faturalar ödenecek. Elektrik, su ve doğalgaz faturaları kontrol edilecek ve ödenecek." }
    ]
  },
  {
    id: 17,
    listeAdi: "Haftalık Yemek Planı",
    listeMaddeleri: [
      { listid: 17, id: 1, sira: 1, aciklama: "Pazartesi: Mercimek çorbası ve ızgara tavuk." },
      { listid: 17, id: 2, sira: 2, aciklama: "Salı: Sebzeli kıymalı makarna." },
      { listid: 17, id: 3, sira: 3, aciklama: "Çarşamba: Fırında somon balığı ve ızgara sebzeler." },
      { listid: 17, id: 4, sira: 4, aciklama: "Perşembe: Mantarlı ve sebzeli pilav." },
      { listid: 17, id: 5, sira: 5, aciklama: "Cuma: Ispanaklı ve peynirli börek." }
    ]
  },
  // Diğer listeler buraya eklenebilir...
  {
    id: 18,
    listeAdi: "Haftalık Program",
    listeMaddeleri: [
      { listid: 18, id: 1, sira: 1, aciklama: "Pazartesi: Spor yap." },
      { listid: 18, id: 2, sira: 2, aciklama: "Salı: Kitap oku. Gelişim kitapları tercih edilmeli." },
      { listid: 18, id: 3, sira: 3, aciklama: "Çarşamba: Yemek yap. Sağlıklı ve dengeli beslenmeye özen gösterilmeli." },
      { listid: 18, id: 4, sira: 4, aciklama: "Perşembe: Arkadaşlarla buluş. Güzel bir akşam yemeği organize edilmeli." }
    ]
  }
];

  await AsyncStorage.setItem('myList', JSON.stringify(listeler));
  console.log('myList kaydedildi.');
} catch (error) {
  console.error('myList kaydedilirken hata oluştu:', error);
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SaveDataByKey</Text>
      <Button onPress={kaydetMyList} >Kaydet</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
