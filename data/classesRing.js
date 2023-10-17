import axios from "axios";

const classesRing = async () => {
    try {
        const resposta = await axios.get("https://eldenring.fanapis.com/api/classes");
        return resposta.data
    } catch (error) {
        throw error;
    }
}

export default classesRing;