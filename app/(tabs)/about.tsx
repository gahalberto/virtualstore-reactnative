import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";

export default function About() {
    const handleLogout = () => {
        alert("SAIU")
    }
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/fotoperfil.png')} />
            <Text style={styles.name}>Gabriel Alberto</Text>
            <Text style={styles.email}>gahalberto@icloud.com</Text>
                <Button title="Sair" onPress={handleLogout} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    img:{ 
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#CCCCCC',
        marginBottom: 40,
        marginRight: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        elevation: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 13,
        color: '#555555',
        marginBottom: 30
    },

})