import {useCallback} from 'react'
import { toast } from 'react-toastify';

export const useMessage = () => {
  return useCallback( text => {
    if (text) {
      toast.info(text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }, [])
}