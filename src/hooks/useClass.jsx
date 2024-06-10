import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useClass = (endpoint = "") => {
  const axiosPublic = useAxiosPublic();
  const { data: classesData = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classes${endpoint}`);
      return res.data;
    },
  });
  return [classesData];
};

export default useClass;
