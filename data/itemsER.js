import axios from "axios";

const  itemsER = async () => {
    try {
        const resposta = await axios.get("https://eldenring.fanapis.com/api/items");
        return resposta.data
    } catch (error) {
        throw error;
    }
}

export default itemsER;