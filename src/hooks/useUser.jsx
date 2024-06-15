import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["apply", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/${user.email}`);
      return res.data;
    },
    enabled: !!user.email,
  });

  return { userData, refetch };
};

export default useUser;
