import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Modal,TouchableWithoutFeedback } from 'react-native';

const ModalError = ({ title, message, onClose }) => {
  return (
    <Modal transparent={true} style={styles.container}>
        <View style={styles.container}>
        <View style={styles.modal}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Kapat</Text>
            </TouchableOpacity>
        </View>
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackground}></View>
            </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6347', // Kapatma düğmesi rengi
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalError;
