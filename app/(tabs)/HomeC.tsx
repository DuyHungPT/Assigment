import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image,TextInput } from 'react-native';


const HomeCome = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch('http://192.168.0.100:3000/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderProduct = ({ item }) => {
        return (
            <View style={styles.productContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productPrice}>Giá: {item.price}</Text>
                <Text style={styles.productPrice}>Mo Ta: {item.mota}</Text>
            </View>
        );
    };

    return (

        <View style={styles.container}>

             <View style={ {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
       
       }}>

     <View>

      <Image style = {{width: 30,height: 30}} source={require('./images/coffe5.png')}/>

     </View>

     <View >
  
     <Image style={{ width: 30,height: 30}} source={require('./images/logo-quan-cafe-7.jpg')}/>   
     </View>
</View>
<Text style= {{fontSize : 15,
           fontWeight : 'bold',
           color: 'green' }}>Find the best {'\n'}food for you</Text>
<View style={{ marginTop : 5,
           flexDirection : 'row',
           backgroundColor  :'white',
           borderRadius : 10,
           justifyContent : 'space-around',
           alignItems : 'center' }}>
 <TextInput style={{flex :1,marginLeft :10}} placeholder='Enter yoir key search'/>
 <Image style={{ width : 20,
           height : 20,
          marginRight : 10,}} source={require('./images/search.png')}/>
</View>
<View>
<Image style={{width : 390, height : 200,marginTop : 10,marginBottom :  10,justifyContent: 'center'}} source={require('./images/banerrr.jpg')}/>
</View>


           <View >
         
            <Text style={styles.header}>Danh Sách Sản Phẩm</Text>
            {isLoading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (
                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderProduct}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </View> 
        </View>
      
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    header: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    listContent: {
        paddingHorizontal: 5,
    },
    productContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 10,
        marginBottom: 10,
        marginRight: 10, // Khoảng cách giữa các mục ngang
        flexBasis: '50%', // Chiếm 50% chiều rộng của mỗi hàng
    },
    productName: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    productImage: {
        width: '100%',
        height: 100,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
    },
    
});

export default HomeCome;
