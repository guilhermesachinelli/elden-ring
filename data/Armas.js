import axios from 'axios';

const URL_API = 'https://eldenring.fanapis.com/api/weapons'

const armas = async () => {
    try {
        const resposta = await axios.get(URL_API);
        return resposta.data;
    } catch (error) {
        throw error;
    }
}
export default armas