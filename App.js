import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import MyTabs from './src/navigation/bottomTabs/Index';
import RNBootSplash from "react-native-bootsplash";


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <MyTabs/>
    </View>
  );
};

export default App;
