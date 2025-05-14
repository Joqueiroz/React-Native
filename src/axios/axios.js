import axios from "axios"
import * as SecureStore from "expo-secure-store";
const api = axios.create({
    baseURL:"http://10.89.240.76:5000/api/v1/",
    headers: {
        'accept':'application/json'
    }
})

 api.interceptors.request.use(
    async (config) =>{
         const token = await SecureStore.getItemAsync("token");
         if(token){
             config.headers.Authorization= `${token}`
         }
        return config; 
    },(error)=> Promise.reject(error)
 );

const sheets = {
    getIngressosPorEvento:(idEvento)=> api.get (`ingresso/evento/${idEvento}`),
    postLogin:(user)=> api.post("/login", user),
    postCadastro:(user)=> api.post("/user", user),
    postEvento:(evento)=> api.post("/evento", evento),
    postIngresso:(ingresso)=> api.post("/ingresso", ingresso),
    postOrganizador:(organizador)=> api.post("/org", organizador),
    getIngressos:()=> api.get("ingresso"),
    getEventos:()=> api.get("evento"),
}
export default sheets;