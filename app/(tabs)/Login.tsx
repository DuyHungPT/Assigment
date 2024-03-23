import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
const Login = () => {
  // const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState("");

  const onSubmit = () => {
    let formData = {
      _email: email,
      _password: password,
    }
    formData._password === '' ? setCheckPassword('Khong Duoc de trong') : setCheckPassword('');
    const RegexP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!RegexP.test(formData._email)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }

  //   let url_check_login = "http://localhost:3000/posts?username=" + email;

  //   fetch(url_check_login)
  //     .then((res) => res.json())
  //     .then(async (res_login) => {
  //       if (res_login.length !== 1) {
  //         Alert.alert("Sai uername hoac loi trung du lieu");
  //         return;
  //       } else {
  //         let objU = res_login[0];
  //         if (objU.password !== password) {
  //           Alert.alert("Sai Password");
  //           return;
  //         } else {
  //           try {
  //             await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
  //             navigation.navigate('HomeScreen');
  //           } catch (e) {
  //             console.log(e);
  //           }
  //         }
  //       }
  //     });
   }

  // const Click = () => {
  //   navigation.navigate('Register');
  // }

  return (
    <View style={styles.container}>
       <StatusBar hidden={true} />
      <Image style={styles.images} source={require('./images/images.png')} />
      <Text style={styles.title}>Restaurant</Text>
      <Text style={styles.text1}>Username</Text>
      <TextInput style={styles.textInput} onChangeText={(value) => setEmail(value)} />
      <Text style={{ color: 'red' }}>{!checkEmail ? 'Sai Dinh Dang Email' : ''}</Text>
      <Text style={styles.text1}>Password</Text>
      <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
      <Text style={{ color: 'red' }}>{checkPassword}</Text>
      <View style={[styles.remember, { justifyContent: 'space-between' }, { marginTop: 7 }]}>
        <View style={styles.remember}>
          <BouncyCheckbox fillColor='blue' />
          <Text>Remember me</Text>
        </View>
        <Text style={styles.textfogot}>Forgot the password ?</Text>
      </View>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} >
        <Text style={styles.textLogin}>Register</Text>
      </Pressable>

      <View style={[styles.remember , {justifyContent: 'space-between'}]}>
    <Pressable style={styles.buttonSosial}>
        <Image style={styles.imagesSosial} source={require('./images/facebook.png')}/>
        <Text>FaceBook</Text>
    </Pressable>
    <Pressable style={styles.buttonSosial}>
        <Image style={styles.imagesSosial} source={require('./images/google.png')}/>
        <Text>Google</Text>
    </Pressable>
    </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
    marginEnd: 10,
    flexDirection: 'column',
  },
  images: {
    width: 70,
    height: 70,
    marginTop: 20,
    alignSelf: 'center',
  },
  title: {
   
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#050505',
    marginBottom: 50,
  },
  text1: {
   
    fontSize: 15,
    fontWeight: 'bold',
    color: '#050505',
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  button: {
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  remember: {
    flexDirection: 'row',
  },
  textfogot: {
    color: 'orange',
  },
  imagesSosial : {
    width : 20,
    height : 20,
    marginEnd : 10,
  },
  buttonSosial : {
    flexDirection : 'row',
    width : 174,
    height : 48,
    backgroundColor : 'gray',
    marginTop : 15,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },

});


