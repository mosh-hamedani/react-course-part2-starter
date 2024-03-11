import axios, {CanceledError} from "axios";

const axiosInstance =  axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = () =>{
        return axiosInstance
            .get<T[]>(this.endpoint)
            .then(res=>res.data);
    }

    post = (data: T) => {
        return axiosInstance
            .post(this.endpoint, data)
            .then(res=>res.data);
    }
}

export default APIClient;
