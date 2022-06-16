import axios from 'axios';

const clienteAxios = axios.create({
    // http://localhost:4000
    baseURL : `${import.meta.env.VITE_BACKEND_URL}/veterinario/`
})

export default clienteAxios