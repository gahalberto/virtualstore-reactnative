import { router, Stack, useLocalSearchParams } from "expo-router"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../components/button"
import { getProductById } from "../../services/product";

export default function Screen(){
    const { id } = useLocalSearchParams();
    const productId = parseInt(id as string);

    const product = getProductById(productId)
    if(!product) router.back();

    const handleBuyButton = () => {
        alert(`Voce comprou o item ${id}`);
    }
    return(
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
            <Image source={{ uri: product?.image }} style={styles.img} 
            resizeMode="cover"
            />
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.description}>{product?.description}</Text>
            <View style={styles.priceArea}>
            <Text style={styles.price}>R$ {product?.price}</Text>
            </View>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button title="Comprar Agora" onPress={handleBuyButton} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area:{
        flex: 1,
        padding: 10,
        marginTop: -40    
    },
    buttonArea: {
        padding: 10
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15
    },
    description: {
        fontSize: 14,
        color: '#FF5555',
        marginBottom: 15
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#CCCCCC',
    },
    price: {
        fontSize: 30,
        textAlign: 'center'
    }
})