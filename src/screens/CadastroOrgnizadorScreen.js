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


export default function Organizador({navigation}) {
  onst [organizador, setOrganizador] = useState({
    telefone: "",
    senha: "",
    email: "",
    nome:"",
  
  });

  async function handleOrganizador() {
    await api.postCadastroOrganizador(organizador).then(
      (response) => {
        //console.log(response.data.message);
        Alert.alert("Cadastro realizado com sucesso!!",response.data.message);
      },
      (error) => {
        Alert.alert('Erro',error.response.data.error);
        //console.log(error);
      }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Seu Cadastro</Text>
      <TextInput 
      style={styles.input}
        placeholder="Nome"
        value={organizador.telefone}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, telefone: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Email"
        value={organizador.senha}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, senha: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="CPF"
        value={organizador.email}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, email: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Senha"
        value={organizador.nome}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, nome: value });
        }}
      />
   

      <TouchableOpacity onPress={handleOrganizador} style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

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

