"use client";
import { useState } from "react";
import {formValidationSchema} from "@/validation/zod";
const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [result,setResult]= useState(null);
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const result = formValidationSchema.safeParse(formData); // safeParse does not throw an error, it returns an object with sucess and error properties!
      if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    console.log("Form data is valid:", result);
    setResult(result);
    setErrors({});  
    } catch (error) {
      console.error("Form validation error:", error);
    }
  };
  const handleChange = (e)=>{
    const { name, value} = e.target;
    setFormData((prevData)=>{
        return{...prevData,[name]: value}
    })
  }
  return { handleSubmit, handleChange, formData , errors , result};
};
export default useForm;
