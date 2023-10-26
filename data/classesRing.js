import axios from "axios";

let URL = "https://eldenring.fanapis.com/api/classes?limit=4&page=0";

export function changePage(page) {
    URL = `https://eldenring.fanapis.com/api/classes?limit=4&page=${page}`
    return URL;
}

const classesRing = async () => {
    try {
        const resposta = await axios.get(URL);
        return resposta.data
    } catch (error) {
        throw error;
    }
}

export default classesRing;