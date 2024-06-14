import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useApply = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: applyData = [], refetch } = useQuery({
    queryKey: ["apply", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/apply/email/${user.email}`);
      return res.data;
    },
    enabled: !!user.email,
  });

  return { applyData, refetch };
};

export default useApply;
