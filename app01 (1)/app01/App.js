import { Text, SafeAreaView, StyleSheet,ScrollView,View,ImageBackground} from 'react-native';
import { Card } from 'react-native-paper';
import Meta1 from './components/Meta1';
import Meta2 from './components/Meta2';
import Meta3 from './components/Meta3';
import fundo from './assets/fundo.jpg'

1
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      <View>
      
        <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
        
            <ScrollView>
            
                  <Text style={styles.paragraph}>Olá Mundão Do Desenvolvimento Mobile</Text>
                  <Text style={styles.center}>Metas 2024</Text>
                  
                  <Card style={styles.card}>
                    < Meta1/>
                  </Card>
                  <Card style={styles.card}> 
                    < Meta2/>
                  </Card>
                    <Card style={styles.card}> 
                    < Meta3/>
                  </Card>
              
            </ScrollView>
          
          </ImageBackground>

        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0
      },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  center: {
        color: "white",
    textAlign: 'center',
  },
  card: {
    borderRadius: 5,
    margin: 18,
  },
});
