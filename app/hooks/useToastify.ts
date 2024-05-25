import { toast, ToastOptions } from "react-toastify";

export default function useToastify() {
  const props: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: "0.8rem",
      background: "#ffffff",
      fontFamily: "inherit",
      borderRadius: 2,
    },
  };
  function success(message: string) {
    toast.success(message, props);
  }

  function error(message: string) {
    toast.error(message, props);
  }

  function info(message: string) {
    toast.info(message, props);
  }

  return { success, error, info };
}
