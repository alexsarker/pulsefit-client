import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApply = (endpoint = "") => {
  const axiosSecure = useAxiosSecure();

  const { data: applyData = [], refetch } = useQuery({
    queryKey: ["apply", endpoint],
    queryFn: async () => {
      const res = await axiosSecure.get(`/apply${endpoint}`);
      return res.data;
    },
  });

  return [applyData, refetch];
};

export default useApply;
