import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroEvento")}>
        <Text style={styles.buttonText}>Cadastrar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroIngresso")}>
        <Text style={styles.buttonText}>Cadastrar Ingresso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CadastroOrganizador")}>
        <Text style={styles.buttonText}>Cadastrar Organizador</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EventoScreen")}>
        <Text style={styles.buttonText}>Lista de Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,         // Deixa arredondado
    marginVertical: 10,       // Espaçamento entre os botões
    width: 250,               // Largura fixa
    alignItems: 'center',     // Centraliza o texto dentro do botão
    elevation: 3,             // Sombreamento no Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
