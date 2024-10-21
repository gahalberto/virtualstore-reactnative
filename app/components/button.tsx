import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonTxt}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#164E85',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    buttonTxt: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
})