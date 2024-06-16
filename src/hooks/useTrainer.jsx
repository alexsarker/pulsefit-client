import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = (endpoint = "") => {
  const axiosPublic = useAxiosPublic();
  const { data: trainersData = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers${endpoint}`);
      return res.data;
    },
  });
  return [trainersData, refetch];
};

export default useTrainer;
