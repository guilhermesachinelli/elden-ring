import axios from "axios";
const eldenRingBoss = 'https://eldenring.fanapis.com/api/armors?limit=100'
const eldenBoss = async () => {
    try{
        const response = await axios.get(eldenRingBoss);
        return response.data;
    }catch(error){
        throw error;
    }
}
export default eldenBoss;