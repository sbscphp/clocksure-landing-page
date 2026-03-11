import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((res) => res.data),
  });
};

const usePost = (url: string) => {
  return useMutation({
    mutationKey: [url],
    mutationFn: (data: any) => axios.post(url, data).then((res) => res.data),
  });
};

export { useFetch, usePost };
