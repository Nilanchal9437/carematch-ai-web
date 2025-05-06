import Axios from "@/lib/Axios";
import { toast } from "react-toastify";
import { useApi } from "@/hook/useApi";

const useLogin = () => {
  const { callApi } = useApi();

  const login = async (payload: { email: string; password: string }) => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.post("/api/auth/login", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return result.data;
      });

      if (response.status) {
        toast.success(response.message, { position: "top-right" });
        window.location.href = "/admin";
      } else {
        toast.warning(response.message, { position: "top-right" });
      }
    } catch (err: any) {
      console.error("error in login API ", err);
      toast.error(err?.response ? err?.response?.data?.message : err?.message, {
        position: "top-right",
      });
    }
  };

  return { login };
};

export default useLogin;
