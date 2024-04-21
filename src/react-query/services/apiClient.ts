import axios from "axios";
import AppRouter from "next/dist/client/components/app-router";

const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return apiInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return apiInstance.post<T>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
