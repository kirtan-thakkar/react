import {z} from 'zod';

export const formValidationSchema = z.object({
    name: z.string().min(1,"Name is required, please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    password : z.string().min(6,"Password must be at least 6 characters long").check("passwordStrength", "Password must contain at least one uppercase letter, one lowercase letter, and one number", (value) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        return hasUpperCase && hasLowerCase && hasNumber;
    }),
    confirmPassword: z.string().min(6,"Confirm Password must be at least 6 characters long").refine((value) => {        return value === z.ref("password");    }, "Passwords do not match"),
})