import { toast } from "react-toastify";

export const toastError = (errorName) => {
    return toast.error(errorName)
}

export const toastSuccess = (successName) => {
    return toast.success(successName)

}