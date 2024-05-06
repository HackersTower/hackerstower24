import axios from 'axios';
export class workshopHelper{
    async getAllWorkshop(){
        try {
            const data = await axios.get(`${process.env.NEXT_PUBLIC_URL!}/api/getWorkshop`);
            
        return {data:data}
        } catch (error) {
            return {error:error}
        }
        
    }
}

const workshophelper = new workshopHelper;
export default workshophelper;