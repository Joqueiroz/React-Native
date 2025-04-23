import { useEffect, useState } from "react";
import api from "../axios/axios";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function EventosScreen() {
  const [eventos, setEventos] = useState([]);
  const [ingressos, setIngressos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [eventoSelecionado, setEventoSelecionado] = useState("");

  useEffect(() => {
    getEventos();
  });

  async function getEventos() {
    try {
      const response = await api.getEventos();
      console.log(response.data);
      setEventos(response.data.events);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  async function abrirModalComIngressos(evento){
    setEventoSelecionado(evento);
    setModalVisible(true);

    try {
      const response = await api.getIngressosPorEvento(evento.id_evento);
      setIngressos(response.data.ingressos);
    } catch (error) {
      console.log("Error ao buscar ingressos", error.response);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Dísponiveis</Text>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id_evento.toString()}
          renderItem={({ item }) => <TouchableOpacity style={styles.eventCard} onPress={()=> abrirModalComIngressos(item)}>
            <Text style={styles.eventName}>{item.nome}</Text>
            <Text>{item.local}</Text>
            <Text>{new Date(item.data_hora).toLocaleString}</Text>
          </TouchableOpacity>}
        />
      )}
      <Modal 
      visible={modalVisible}
      onRequestClose={()=>setModalVisible(false)}
      animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text>
            Ingressos para: {eventoSelecionado.nome}
          </Text>
          {ingressos.length === 0 ? (
            <Text>Nenhum ingresso encontrado</Text>
          ) : (
            <FlatList
            data = {ingressos}
            keyExtractor={(item) =>item.id_ingresso.toString()}
            renderItem={({item})=>(
              <View>
                <Text>Tipo: {item.tipo}</Text>
                <Text>Preço: R${item.preco}</Text>
              </View>
            )}
            />
          )}
          <TouchableOpacity style={styles.closeButton} onPress={()=>setModalVisible(false)}>
            <Text style={{color:"white"}}>Fechar</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f9f9f9', // Fundo mais claro
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center', // Centraliza o título
  },
  eventCard: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 12,
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b6cb0',
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  ingressoItem: {
    width: '100%',
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 30,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

