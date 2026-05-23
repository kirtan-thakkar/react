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
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const result = formValidationSchema.parse(formData);
      if (!result.success) {
      console.log(result.error.format());
      return;
    }
    console.log("Form data is valid:", result); 
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
  return { handleSubmit, handleChange, formData };
};
export default useForm;
