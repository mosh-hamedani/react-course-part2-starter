// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useData = (url, key) => {
//   const fetchData = () => axios.get<Todo[]>({url}).then((res) => res.data);

//   return useQuery<key, Error>({
//     queryKey: ["todos"],
//     queryFn: fetchData,
//     staleTime: 10 * 1000, //10s it is not globally configured
//   });
// };
// export default useData;
