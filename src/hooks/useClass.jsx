import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClass = (endpoint = "") => {
  const axiosSecure = useAxiosSecure();
  const { data: classesData = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes${endpoint}`);
      return res.data;
    },
  });
  return [classesData];
};

export default useClass;
