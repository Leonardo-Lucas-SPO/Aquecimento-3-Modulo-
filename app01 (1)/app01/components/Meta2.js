import {Text, View, StyleSheet, Image } from 'react-native';

export default function Meta2() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Não serei demitido!
      </Text>
      <Image style={styles.logo} source={require('../assets/CLT.png')} />
      <Text>(caso aconteça vou morar no interior)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
