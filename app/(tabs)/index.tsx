import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Register from './Register';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SanPhamCT from './SanPhamCT';
import 'react-native-gesture-handler';
import GioHang from './GioHang';
import ThanhToan from './ThanhToan';
import HomeC from './HomeScreen';
import HomeCome from './HomeC';


const DrawerDEMO = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <DrawerDEMO.Navigator initialRouteName="Home"  >
      <DrawerDEMO.Screen name="Login" component={Login}  />
      <DrawerDEMO.Screen name="Register" component={Register}  />
     
      <DrawerDEMO.Screen name="Home" component={HomeScreen} />
      <DrawerDEMO.Screen name="GioiThieu" component={ProfileScreen} />
      <DrawerDEMO.Screen name="SanPhamCT" component={SanPhamCT} />
      <DrawerDEMO.Screen name="GioHang" component={GioHang} />
      <DrawerDEMO.Screen name="ThanhToan" component={ThanhToan} />
      <DrawerDEMO.Screen name="HomeC" component={HomeCome} />
    </DrawerDEMO.Navigator>
  );
};

export default function App() {
  return (
    <MyDrawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
