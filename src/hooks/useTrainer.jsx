import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = (endpoint = "") => {
  const axiosPublic = useAxiosPublic();
  const { data: trainersData = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers${endpoint}`);
      return res.data;
    },
  });
  return [trainersData];
};

export default useTrainer;
