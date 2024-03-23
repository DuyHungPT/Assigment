import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DatHang = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.view1}>
        <View style={{flexDirection:'row'}}>
        <Image style={{marginRight: 10}} source={require('./images/location.png')} />
        <Text style={styles.text}>Dia Chi Nhan Hang</Text>
      </View>
      <Text style={styles.text1}> Duy Hung | 0765234589 {'\n'} So 20, Ngo 59 ,Thon Chien 1,Duc Thuong {'\n'} Huyen Hoai Duc , Ha Noi</Text>
      </View>
      <View style={{flexDirection:'row',backgroundColor:'white',marginTop: 10,padding: 7,alignItems:'center'}}>
        <Image style={styles.icon} source={require('./images/home.png')} />
        <Text style={{fontSize: 15,fontWeight:'bold',color:'black',marginLeft: 10}}>Darlin*Kids</Text>
      </View>
      <View style={{flexDirection:'row',padding: 7,}}>
      <Image style={{width: 100,height: 100,borderRadius: 10,}}  source={require('./images/quay2.jpg')} />
      <View style={{marginLeft: 15}}>
      <Text style={{fontSize:17,fontWeight:'bold',color: 'black'}}>Vit Quay Bac Kinh</Text>
       <Text style={{fontSize: 14,borderWidth:1,borderColor:'red',color:'red',alignSelf:'center',padding: 2,marginRight:200}}>Vit Van Dinh</Text>
        <Text style={{fontWeight:'bold'}}>Size S</Text>
         <Text style={{fontWeight:'bold'}}>$ 380.000</Text>
          <Text style={{marginLeft:240}}>x 1</Text>

      </View>
      </View>

      <View style={{borderTopWidth: 1,borderBottomWidth: 1,backgroundColor:'#CCFFFF',padding: 7}} >
        <Text style={{color:'#00CC00',fontSize:15,marginBottom: 10}} >Phuong thuc van chuyen</Text>
        <Text style={{fontWeight: 'bold',}}>Van Chuyen Nhanh Quoc Te</Text>
        <Text>Standard Express</Text>
        <Text style={{marginLeft:330,textDecorationLine: 'line-through',color:'gray'}}>$ 30000</Text>
        <Text style={{marginLeft:330,color:'black'}}>$ 15000</Text>
        <Text>Nhan Hang Vao 12 - 15 Thang 7</Text>
        <Text style={{color:'#00CC00',fontSize:15}}>Da ap dung ma mien phi van chuyen</Text>
       
      </View>
      <View style={{borderTopWidth: 0.5,borderBottomWidth: 0.5,backgroundColor:'#CCFFFF',padding: 7}}>
        <Text>Duoc dong kiem ?</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding: 7,backgroundColor:'white'}}>
        <Text style={{color:'black'}}>Tin Nhan</Text>
        <Text style={{color:'gray'}}>Luu y cho nguoi ban...</Text>
      </View>
      {/* <View style={{flexDirection:'row',justifyContent:'space-between',padding: 7,backgroundColor:'white',marginTop: 10}}>
        <Text style={{color:'black'}}>Tong So Tien</Text>
        <Text style={{color:'red'}}>$ 380.000</Text>
      </View> */}
      <View style={{flexDirection: 'row' ,padding: 7,backgroundColor:'white',marginTop: 5,}}>
        <View style={{flexDirection: 'row' }}>
            <Image style={{width : 25,height: 25,marginRight: 10}} source={require('./images/voucher.png')} />
            <Text style={{fontWeight: 'bold', marginRight: 120}}>Voucher Shop</Text>
        </View>
        <Text style={{fontSize: 14,borderWidth:1,borderColor:'#0099FF',color:'#0099FF',alignSelf:'center',padding: 2}}>Mien Phi Van Chuyen</Text>
      </View>
      <View style={{flexDirection: 'row' ,padding: 7,backgroundColor:'white',marginTop: 7,alignItems:'center'}}>
        <View style={{flexDirection: 'row' }}>
            <Image style={{width : 25,height: 25,marginRight: 10}} source={require('./images/coin.png')} />
            <Text style={{fontWeight: 'bold', marginRight: 47}}>Phuong Thuc Thanh Toan</Text>
        </View>
        <View style={{flexDirection:'row'}}>           
             <Text style={{fontSize: 15,alignSelf:'center',padding: 2,color:'black'}}>Thanh toan khi nhan{'\n'}                           hang</Text>
             <Image style={{alignSelf:'center',padding: 7}} source={require('./images/next.png')} />
        </View>      
      </View>
      <View style={{padding: 7,backgroundColor:'white',marginTop: 10}}>
        <View style={{flexDirection:'row'}}>
            <Image style={{width: 25,height: 25}} source={require('./images/contract.png')} />
            <Text style={{fontSize: 16}}>   Chi Tiet Thanh Toan</Text>
        </View>
        <Text>Tong tien hang                                                                     $ 380.000 </Text>
        <Text>Phi Van Chuyen                                                                    $ 0.00</Text>
        <Text style={{color:'red'}}>Tong thanh toan                                                                   $ 380.000</Text>
      </View>
      <View style={{flexDirection:'row',marginTop: 10,height: 60,backgroundColor: 'white',alignItems: 'center'}}>
        <View style={{marginLeft:150}}>
            <Text style={{color:'black'}}>Tong thanh toan</Text>
            <Text  style={{color:'red',fontWeight:'bold'}}>$ 380.000</Text>
        </View>
        <TouchableOpacity style={{width: 150,height: 60,backgroundColor: 'red',justifyContent:'center',alignItems: 'center',marginLeft:20}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize: 17}}>Dat hang</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  )
}

export default DatHang

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    text:{
        fontSize: 15,
       color:'black',
        
    },
    text1:{
        fontSize: 15,
        marginLeft: 23,
        color:'black',
    },
    view1:{
        backgroundColor:'white',
        padding: 7,
    },
    icon : {
        width: 25,
        height: 25,
    }
})