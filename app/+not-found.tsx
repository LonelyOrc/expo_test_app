import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: 'Sorry, that page does not exist!' }} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
            Go back to Home Screen!
            </Link>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0', //honeydew
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: '#000000', //black
    },
});