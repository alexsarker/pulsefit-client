import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBooked = (endpoint = "") => {
  const axiosSecure = useAxiosSecure();
  const { data: bookedData = [], refetch } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked${endpoint}`);
      return res.data;
    },
  });
  return [bookedData, refetch];
};

export default useBooked;
