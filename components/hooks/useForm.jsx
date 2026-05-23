"use client";
import { useState } from "react";
import formValidationSchema from "@/validation/zod";
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
      formValidationSchema.parse(formData);
      // If validation passes, you can proceed with form submission logic here
      console.log("Form data is valid:", formData);
    } catch (error) {
      console.error("Form validation error:", error);
    }
  };
};

export { handleSubmit, formData };
