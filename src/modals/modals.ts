import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const showErrorModal = (message: string) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showSuccessModal = (message: string): void => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showLogoutSuccessModal = () => {
  toast.success("You have successfully logged out.", {
    position: "top-center",
    autoClose: 2000,
  });
};
