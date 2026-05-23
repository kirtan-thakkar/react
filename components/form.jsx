import {useForm} from "../hooks/useForm";
const formPage = ()=>{
    const {handleSubmit, formData} = useForm();
    
    return(
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default formPage;