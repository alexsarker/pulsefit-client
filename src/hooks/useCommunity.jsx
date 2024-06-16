import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCommunity = (endpoint = "") => {
  const axiosPublic = useAxiosPublic();
  const { data: forumsData = [], refetch } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/community${endpoint}`);
      return res.data;
    },
  });
  return [forumsData, refetch];
};

export default useCommunity;
