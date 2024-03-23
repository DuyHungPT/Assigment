import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const GioHang = () => {
  return (
    <View>
     
      <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems:'center',padding: 10}}>
        <Image source={require('./images/next.png')} /> 

        <Text>Gio Hang</Text>

        <Image source={require('./images/giohang copy.png')} style={{width: 30,height: 30}}/>
      </View>
  
     <View >
        <View style={{flexDirection:'row',justifyContent:'space-around',padding: 10,backgroundColor: 'pink',borderRadius:10}}>
            <Image source={require('./images/capuchino.jpg')} style={{width:100,height:100,borderRadius: 10}} />
            <View>
                <Text>Ten San Pham</Text>
                <Text style={{color:'red',marginBottom:10,marginTop: 10}}>50.000</Text>
                <View style={{flexDirection:'row',padding: 5}}>
             <TouchableOpacity style={{borderWidth: 1,width: 20,height: 20}}>
                <Image source={require('./images/minus.png')} />
            </TouchableOpacity>
                <Text style={{marginLeft:15,marginRight: 15}}>1</Text>
            <TouchableOpacity style={{borderWidth: 1,width: 20,height: 20}}>
                   <Image source={require('./images/add.png')} />
           </TouchableOpacity>
   
              </View>
            </View>
            <View >
                <TouchableOpacity>
                    <Image source={require('./images/delivery-truck.png')} style={{width:30,height: 30,marginBottom:15}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./images/ask.png')} style={{width:30,height: 30}} />
                </TouchableOpacity>
            </View>
        </View>
     </View>

    </View>
  )
}

export default GioHang

const styles = StyleSheet.create({})