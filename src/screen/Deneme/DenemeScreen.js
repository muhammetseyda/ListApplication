import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
// import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import { AdMobBanner } from 'react-native-google-mobile-ads';
 
export default function DenemeScreen() {
  // const didFailToReceiveAdWithError = (error) => {
  //   console.error("Ad failed to load with error:", error);
  // };
  return (
    <View style={{ justifyContent:'center', alignItems:'center',}}>
        
    </View>
  )
}

const styles = StyleSheet.create({
    bottomBanner: {
        position: "absolute",
        bottom: 0
      },
})