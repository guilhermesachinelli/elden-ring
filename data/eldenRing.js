import axios from "axios";
let URL = 'https://eldenring.fanapis.com/api/armors?'

const eldenBoss = async () => {
    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(error){
        throw error;
    }
}
export default eldenBoss;