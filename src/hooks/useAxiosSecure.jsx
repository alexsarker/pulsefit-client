import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://pulsefit-server-mu.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
