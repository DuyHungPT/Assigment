import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
const Toi = () => {
  return (
    <View style={styles.container}>
       <StatusBar hidden={true} />
     <View style={styles.header}>
        <View style={{flexDirection:'row',marginTop: 80}}>
            <Image style={{width: 50,height: 50,marginLeft:20}} source={require('./images/user.png')} />
            <View style={{marginLeft:15}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Duy Hung</Text>
                <Text style={{color:'white'}}>Thanh Vien</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:14}}>Follow 100</Text>
                <Text style={{color:'white',fontSize:14}}> | Dang theo doi 10</Text>

            </View>
            </View>
        </View>
        <View style={{ position: 'relative' }}>
      {/* <Image
        source={require('./images/capuchino.jpg')}
        style={{ width: '100%', height: 380 }} // Điều chỉnh kích thước của hình ảnh theo yêu cầu
      /> */}
      <Image
        source={require('./images/share-arrow.png')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        //   backgroundColor : 'white',
          borderRadius :10,
          transform: [{ translateX: -180 }, { translateY: -120 }], // Điều chỉnh vị trí của biểu tượng theo yêu cầu
          width: 30,
          height: 30, // Điều chỉnh kích thước của biểu tượng theo yêu cầu
          zIndex: 1, // Đảm bảo biểu tượng nằm phía trước hình ảnh
        }}
      />
       <Image
        source={require('./images/share-arrow.png')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        //   backgroundColor : 'white',
          borderRadius :10,
          transform: [{ translateX: 60 }, { translateY: -120 }], // Điều chỉnh vị trí của biểu tượng theo yêu cầu
          width: 30,
          height: 30, // Điều chỉnh kích thước của biểu tượng theo yêu cầu
          zIndex: 1, // Đảm bảo biểu tượng nằm phía trước hình ảnh
        }}
      />
       <Image
        source={require('./images/giohang.png')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        //   backgroundColor : 'white',
          borderRadius :10,
          transform: [{ translateX: 120 }, { translateY: -120 }], // Điều chỉnh vị trí của biểu tượng theo yêu cầu
          width: 30,
          height: 30, // Điều chỉnh kích thước của biểu tượng theo yêu cầu
          zIndex: 1, // Đảm bảo biểu tượng nằm phía trước hình ảnh
        }}
      />
      <Image
        source={require('./images/points.png')}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        //   backgroundColor : 'white',
          borderRadius :10,
          transform: [{ translateX: 165 }, { translateY: -120 }], // Điều chỉnh vị trí của biểu tượng theo yêu cầu
          width: 30,
          height: 30, // Điều chỉnh kích thước của biểu tượng theo yêu cầu
          zIndex: 1, // Đảm bảo biểu tượng nằm phía trước hình ảnh
        }}
      />
    </View>
     </View>
     <View style={styles.body}>
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#CCCCFF',padding:10,marginTop:7}}>
        <View style={{flexDirection:'row',padding:'10'}}>
            <Image style={{width: 20,height: 20,padding:'10'}} source={require('./images/contract.png')} />
            <Text style={{fontSize:16,marginLeft:10,}}>Don Mua</Text>
        </View>
        <Text>Xem Lich Su Mua Hang </Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/contract.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>Cho xac nhan</Text>
        </View>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/gift.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>Cho lay hang</Text>
        </View>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/delivery-truck.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>Cho giao hang</Text>
        </View>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/star.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>Danh gia</Text>
        </View>

    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#CCCCFF',padding:10,marginTop:7}}>
        <View style={{flexDirection:'row',padding:'10'}}>
            <Image style={{width: 20,height: 20,padding:'10'}} source={require('./images/contract.png')} />
            <Text style={{fontSize:16,marginLeft:10,}}>Tien ich cua toi</Text>
        </View>

    </View>
    <View style={{flexDirection:'row'}}>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/zalopay.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>Zalo Pay</Text>
        </View>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/coin.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>Xu</Text>
        </View>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/wallet.jpg')} />
            <Text style={{fontSize:12,marginTop: 12}}>SPayLater</Text>
        </View>
        <View style={{width: 100,height: 80,justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Image style={{width: 25,height: 25,padding:'10'}} source={require('./images/voucher.png')} />
            <Text style={{fontSize:12,marginTop: 12}}>kho voucher</Text>
        </View>

    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding: 10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30,height: 30,marginRight: 10}} source={require('./images/bank.jpg')} />
           <Text>Khach hang than thiet</Text>
        </View>
        <Text>Thanh vien</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding: 10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30,height: 30,marginRight: 10}} source={require('./images/like.png')} />
           <Text>Da thich</Text>
        </View>

    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding: 10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30,height: 30,marginRight: 10}} source={require('./images/gift.png')} />
           <Text>San qua cua shop</Text>
        </View>
        <Text style={{color:'red'}}>$ 100000</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding: 10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30,height: 30,marginRight: 10}} source={require('./images/clock.png')} />
           <Text>SP xem gan day</Text>
        </View>

    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding: 10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30,height: 30,marginRight: 10}} source={require('./images/user.png')} />
           <Text>Thiet lap tai khoan</Text>
        </View>

    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding: 10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:30,height: 30,marginRight: 10}} source={require('./images/ask.png')} />
           <Text>Trung tam tro giup</Text>
        </View>

    </View>
     </View>
    </View>
  )
}

export default Toi

const styles = StyleSheet.create({
    container : {
        flex: 1,

    },
    header:{
        flex:2,
        backgroundColor:'#CC00CC',
    },
    body:{
        flex:8,

    },


})