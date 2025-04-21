import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000', //black
        fontSize: 26,
        fontWeight: 'bold',
    },
});