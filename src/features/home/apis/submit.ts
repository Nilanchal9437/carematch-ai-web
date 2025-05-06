import Axios from "@/lib/Axios";
import { toast } from "react-toastify";
import { FormData } from "@/features/home/components/IntakeForm";
import { useApi } from "@/hook/useApi";

const useCreate = () => {
  const { callApi } = useApi();

  const create = async (payload: FormData) => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.put("/api/chat", {
          ...payload,
        });
        return result.data;
      });

      if (response?.status) {
        toast.success(response.message, { position: "top-right" });
      } else {
        toast.warning(response.message, { position: "top-right" });
      }
    } catch (err: any) {
      console.log("error in submitting chat :: ", err);
      toast.error(err?.response ? err?.response?.data?.message : err?.message, {
        position: "top-right",
      });
    }
  };

  return { create };
};

export default useCreate;
