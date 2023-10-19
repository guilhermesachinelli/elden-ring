import axios from 'axios';

const URL_API = `https://eldenring.fanapis.com/api/locations`;

const locations = async () => {
    try{
        const resposta = await axios.get(URL_API);
        return resposta.data;
    } catch (error) {
        throw error;
    }
} 

export default locations;