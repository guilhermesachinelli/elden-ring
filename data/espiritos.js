import axios from 'axios';

const URL_API = 'https://eldenring.fanapis.com/api/spirits';

const espiritos = async () => {
    try {
        const resposta = await axios.get(URL_API);
        return resposta.data;
    } catch (error) {
        throw error;
    }
}

export default espiritos;