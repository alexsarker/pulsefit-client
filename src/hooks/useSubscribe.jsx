import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSubscribe = (endpoint = "") => {
  const axiosSecure = useAxiosSecure();

  const { data: subsData = [] } = useQuery({
    queryKey: ["subscribe", endpoint],
    queryFn: async () => {
      const res = await axiosSecure.get(`/subscribes${endpoint}`);
      return res.data;
    },
  });

  return [subsData];
};

export default useSubscribe;
