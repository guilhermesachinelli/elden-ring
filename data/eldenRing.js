import axios from "axios";
let URL = 'https://eldenring.fanapis.com/api/armors?limit=4'


export function changePage(page) {
    URL = `https://eldenring.fanapis.com/api/armors?limit=4&ppage=${page}`
    return URL;
}

const eldenBoss = async () => {
    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(error){
        throw error;
    }
}
export default eldenBoss;