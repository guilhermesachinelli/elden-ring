import axios from "axios";

let apiUrl = "https://eldenring.fanapis.com/api/classes";

const classesRing = async () => {
    try {
        const resposta = await axios.get(apiUrl);
        return resposta.data
    } catch (error) {
        throw error;
    }
}

export default classesRing;