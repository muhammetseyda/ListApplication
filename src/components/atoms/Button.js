import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({onPress, children}) {
    const {buttonStyle,textStyle} = styles;
  return (
    <TouchableOpacity onPress={ onPress} style ={buttonStyle}>
      <Text style ={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#c8b6ff',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: 'Ubuntu-Italic',
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbd0ff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c8b6ff',
    height: 40,
    width: '50%',
    textAlign: 'center',
    paddingHorizontal: 10,
    margin: 5,
  },

})