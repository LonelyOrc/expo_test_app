import { Text, View, StyleSheet } from 'react-native';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({ // constant variable of styles
  container: {
    flex: 1,
    backgroundColor: '#f0fff0', //honeydew
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000', //black
    fontSize: 26,
    fontWeight: 'bold',
  },
});
