import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';

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
          <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems:'center',alignContent: 'center',marginBottom: 10}}>
         <Image source={require('./images/next.png')} /> 

        <Text style={styles.header}>Danh Sách Sản Phẩm</Text>

      <Image source={require('./images/giohang copy.png')} style={{width: 30,height: 30}}/>
      </View>
           
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



