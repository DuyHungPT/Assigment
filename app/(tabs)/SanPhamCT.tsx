import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';
const SanPhamCT = () => {
  return (
    <View>
       <StatusBar hidden={true} />
     <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems:'center',padding: 10}}>
        <Image source={require('./images/next.png')} /> 

        <Text>ProfileScreen</Text>

        <Image source={require('./images/giohang copy.png')} style={{width: 30,height: 30}}/>
      </View>
   <View>
    <Image source={require('./images/coffe5.png')} style={{width: 400,height: 300, }} />
   </View>
   <View style={{width:320,height:300,marginLeft:40}}>
    

         <View style={{flexDirection:'row',alignItems: 'center',padding: 10}}>
    <TouchableOpacity style={{backgroundColor: 'green',padding: 5,borderRadius: 5,width:70,alignContent: 'center',marginRight: 5,alignItems:'center'}}>
        <Text>Ngon</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor: 'green',padding: 5,borderRadius: 5,width:70,alignContent: 'center',marginRight: 5,alignItems: 'center'}}>
        <Text>Ngon</Text>
    </TouchableOpacity>

   </View>
   <Text style={{fontSize:25,color: 'red',}}>50.000d</Text>
   <Text style={{borderBottomWidth: 1}}> Chi Tiet San Pham </Text>
   <View>
    <View style={{flexDirection: 'row',padding: 7,borderBottomWidth: 0.5}}>
        <Text style={{marginRight: 200}}>kich thuoc</Text>
        <Text>Size S</Text>
    </View>
    <View style={{flexDirection: 'row',padding: 7,borderBottomWidth: 0.5}}>
        <Text style={{marginRight: 200}}>kich thuoc</Text>
        <Text>Size S</Text>
    </View>
    <View style={{flexDirection: 'row',padding: 7,borderBottomWidth: 0.5}}>
        <Text style={{marginRight: 200}}>kich thuoc</Text>
        <Text>Size S</Text>
    </View>
  
    </View>
   <View style={{flexDirection: 'row'}}>
    <Text style={{marginRight:120}}>Da chon 1 san pham</Text>
    <Text>Tam Tinh</Text>
   </View>
   <View style={{flexDirection:'row',padding: 5}}>
    <TouchableOpacity style={{borderWidth: 1,width: 20,height: 20}}>
         <Image source={require('./images/minus.png')} />
    </TouchableOpacity>
    <Text style={{marginLeft:15,marginRight: 15}}>1</Text>
    <TouchableOpacity style={{borderWidth: 1,width: 20,height: 20}}>
         <Image source={require('./images/add.png')} />
    </TouchableOpacity>
   <Text style={{marginLeft:170,color:'red'}}>400.000</Text>
   </View>
   <TouchableOpacity style={{backgroundColor:'green',width:320,height:50,borderRadius:10,alignItems: 'center',justifyContent:'center'}}>
    <Text>Pay</Text>
   </TouchableOpacity>
  
   </View>
   

    </View>
  )
}

export default SanPhamCT

const styles = StyleSheet.create({})