
import axios from "axios"

const api=axios.create({

    //apinin adresi
    baseURL:import.meta.env.VITE_API_URL,

    //cookie ile saklanan verileri her istekte api'a gönder
    withCredentials:true,

    //api gönderilen verinin formatı
    headers:{
        "Content-Type":"application/json"
    },
});

export default api;