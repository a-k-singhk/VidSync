import { useDispatch } from "react-redux";
import axios from "axios";
import {toast} from 'react-toastify';
import toastConfig from "../../utils/toast";

import {login as authLogin} from '../../store/authSlice.js';
import { useNavigate } from "react-router-dom";

const useLogin=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const login=async(data)=>{
        try {
            const response=await axios.post(import.meta.env.VITE_LOGIN_API,data);
            toast.success(response.data.message,toastConfig);
            dispatch(authLogin(response.data));
            navigate("/home")
            return response.data;
        } catch (error) {
            toast.error("User does not exist",toastConfig);
        }
    };
    return {login}
}
export default useLogin;