import { useState } from "react";
import {StyleSheet, Text, View, Button} from "react-native";

export default function App(){
    const[count, setCount] = useState(0);

    return(
        <View style={styles.conteiner}>
            <Text style={styles.text}>Clique para contar {count}</Text>
            <Button
            title="Clique"
            onPress={()=> setCount(count + 1)}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: '#2C4CC3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:40
    }
})