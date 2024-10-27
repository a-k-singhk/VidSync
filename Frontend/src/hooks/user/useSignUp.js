import axios from "axios";
import { toast } from "react-toastify";
import toastConfig from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useSignUp=()=>{
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);

    const suignUp=async(data)=>{
        setLoading(true);

        const formData=new FormData();

        formData.append("fullName",data.fullName);
        formData.append("email",data.email);
        formData.append("username",data.usename);
        formData.append("password",data.password);
        formData.append("avatar",data.avatar);

        if(data.coverImage?.[0]){
            formData.append("coverImage",data.coverImage[0]);
        }

        try {
            const response=await axios.post(
                import.meta.env.VITE_SIGN_UP_API,
                formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data",
                    },
                }
            );
            toast.success(response.data.message,toastConfig);
            navigate("/");
        } catch (error) {
            
        }
    }
}