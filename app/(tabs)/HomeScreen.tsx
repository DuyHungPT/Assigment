import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from "@react-navigation/native"
const ThanhToan = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
         <StatusBar hidden={true} />
     <View style={styles.view1}>
        <View style={styles.next}>
         <Image  source={require('./images/next.png')} />
        </View>

         <Text style={styles.text}>Pay</Text>
     </View>
     <View style={styles.view2}>
        <Text style={styles.text2}>Credit Card</Text>
        <Image style={styles.banner} source={require('./images/theden2.webp')} />
     </View>
     <TouchableOpacity style={styles.button} >
        <Image style={styles.icon} source={require('./images/wallet.jpg')} />
        <Text style={styles.text2}>wallet</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} >
        <Image style={styles.icon} source={require('./images/iconapple.jpg')} />
        <Text style={styles.text2}>Aplle Pay</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} >
        <Image style={styles.icon} source={require('./images/zalopay.png')} />
        <Text style={styles.text2}>Zalo Pay</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} >
        <Image style={styles.icon} source={require('./images/bank.jpg')} />
        <Text style={styles.text2}>Banking</Text>
     </TouchableOpacity>

      <View style={styles.view3}>
        <View style={{marginLeft: 15}}>
            <Text style={{color:'white',fontWeight: 'bold'}}>Price</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#FF9900',fontWeight:'bold'}}>$</Text>
                <Text  style={{color:'white',marginLeft: 7,fontWeight: 'bold'}} >4.20</Text>
            </View>
        </View>
        <TouchableOpacity  style={styles.button2} >

       <Text style={styles.text4}>Pay</Text>
      </TouchableOpacity>

      </View>

    </View>
  )
}

export default ThanhToan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },
    view1:{
    flexDirection: 'row',

    },
    next: {
     backgroundColor: '#222222',
    width:30,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 50,
    },
    text:{
        color:'white',
     alignSelf: 'center',
     marginLeft: 160,
     fontWeight: 'bold',
     fontSize:20,
    },
    view2:{
       borderWidth: 2,
       borderColor:'white',
       marginTop: 20,
       padding: 10,
       borderRadius: 10,
    },
    text2:{
        color:'white',
        fontWeight: 'bold',
     fontSize:16,
    },
    banner:{
        width: "100%",
        height: 300,
        padding:  10,
    },
    button : {
        width: 385,
        height: 50,
        backgroundColor:'#111111',
        borderRadius: 10,
        marginTop: 10,
       flexDirection: 'row',

       alignItems:'center',

    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 15,
    },
    button2:{
        width: 200,
        height: 50,
        backgroundColor:'#FF9900',
        borderRadius: 10,
        marginLeft:130,
        alignItems: 'center',
        justifyContent:'center',
    },
    view3:{
        marginTop: 70,
        flexDirection: 'row',
    },
    text4:{
        color:'white',
        fontWeight: 'bold',
     fontSize:16,

    },

})