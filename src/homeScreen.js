import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    handleCam = () => {
        navigation.navigate("Cam");
    }

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Button title="Abrir camera" onPress={handleCam} color="red"/>
            <View style={{marginBottom: 20}}>
                <Button title="Listar Eventos" onPress={()=> navigation.navigate("Eventos")}/>
            </View>
        </View>
        
    )
}
export default HomeScreen;