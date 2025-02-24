import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Cadastro from './screens/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
     <Cadastro></Cadastro>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ADD8E6",
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
    },
    box1:{
      width:50,
      height:50,
      backgroundColor:"red"
    }, 
    box2:{
      width:50,
      height:50,
      backgroundColor:"purple"
    }, 
    box3:{
      width:50,
      height:50,
      backgroundColor:"blue"
    },
    box4:{
      width:50,
      height:50,
      backgroundColor:"grey"
    },
    row:{
      flexDirection:"row",
      text:{
        fontSize:28,
        fontWeight:"bold"
    },
   
    },
    input:{
      borderWidth:2,
      borderColor:"gray",
      width:"80%",
      padding:10,
      marginVertical:10
    }
});
