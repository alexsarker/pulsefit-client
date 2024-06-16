import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = (endpoint = "") => {
  const axiosSecure = useAxiosSecure();

  const { data: userData = [] } = useQuery({
    queryKey: ["user", endpoint],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users${endpoint}`);
      return res.data;
    },
  });

  return [userData];
};

export default useUser;
