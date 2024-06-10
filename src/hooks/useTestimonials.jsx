import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosSecure";

const useTestimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonialsData = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosPublic.get("/testimonials");
      return res.data;
    },
  });
  return [testimonialsData];
};

export default useTestimonials;
