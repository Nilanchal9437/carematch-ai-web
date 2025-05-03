import Axios from "@/lib/Axios";
import { toast } from "react-toastify";
import { FormData } from "@/features/home/components/IntakeForm";

const create = async (payload: FormData) => {
  try {
    const response = await Axios.put("/api/chat", {
      ...payload,
    }).then((res) => res.data);

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

export default create;
