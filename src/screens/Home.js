// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import  React,{useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import CustomModal from '../components/CustomModal';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
      <CustomModal
      // animationIn={'zoomin'}
      // animationOut={'zoomout'}
        text1={'text1 1'}
        text2={'text1 2'}
        text3={'text1 3'}
        btn1={() => console.warn('Press 1')}
        btn2={() => console.warn('Press 2')}
        btn3={toggleModal}
        isVisible={isModalVisible}
      /> 
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Home Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate(
                'SettingsStack', { screen: 'Settings' }
              )}>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Details')
            }>
            <Text>Open Details Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal} style={styles.button}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
        </View>
  
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Bottom Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default HomeScreen;