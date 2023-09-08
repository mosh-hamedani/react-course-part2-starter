import axios from "axios";

// Make default axios instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endpoint: string;
  // initialize it once in the constructor
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // In front of getAll and post I should use generic type description, but I can do that for my class to stop duplication in my code.

  getAll = () => {
    return (
      axiosInstance
        // getAll method first return a promise of any BUT I WANNA work with typed objects. So, after .get I provide a generic type argument. Because I wanna this method be generic I only add T[]
        .get<T[]>(this.endpoint)
        .then((res) => res.data)
    );
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
