import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";
import api from "../axios/axios";


 function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>

      

   
      <Button title="Cadastro de Evento" onPress={() => navigation.navigate("Evento")}/>
      <Button title="Cadastro de Organizador" onPress={() => navigation.navigate("Organizador")}/>
      <Button title="Cadastro de Ingresso" onPress={() => navigation.navigate("Ingresso")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input:{
    width:'100%',
    height:40,
    borderBottomWidth:1,
    marginBottom:20,
    paddingHorizontal:10
  },
  button:{
    backgroundColor: 'gray',
    padding:10,
    borderRadius:5
  },
});

export default Home