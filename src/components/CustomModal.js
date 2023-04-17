import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

function CustomModal({
  text1,
  text2,
  text3,
  btn1,
  btn2,
  btn3,
  isVisible

}) {
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isVisible}
        
        >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.containerV}>
            <TouchableOpacity style={styles.btnV} onPress={btn1}>
              <Text style={{fontSize: 20, color: '#000'}}>{text1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnV} onPress={btn2}>
              <Text style={{fontSize: 20, color: 'red'}}>{text2}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnV} onPress={btn3}>
              <Text style={{fontSize: 20, color: 'green'}}>{text3}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  containerV: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  btnV: {},
});
export default CustomModal;
