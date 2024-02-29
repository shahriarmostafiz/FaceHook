import React from 'react';
import Field from '../common/Field';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const submitForm = async (formdata) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, formdata)
            if (res.status === 200) {
                const { token, user } = res.data
                if (token) {
                    const authToken = token?.token
                    const refreshToken = token?.refreshToken
                    console.log(`Login time auth token ${authToken}`);
                    setAuth({ user, authToken, refreshToken })
                    navigate("/")
                }
            }
            console.log(formdata);



        } catch (err) {
            setError("root.random", {
                type: "random",
                message: `User with this ${formdata.email} is not found`
            })
        }
    }
    return (
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
            onSubmit={handleSubmit(submitForm)}
        >
            <Field label={"Email"} htmlFor={"emaill"} error={errors.email} >
                <input
                    className={`auth-input ${errors.email ? "border-red-500" : "border-gray-200"}`}
                    name="email"
                    type="email"
                    id="email"
                    {...register("email", { required: "Email is required" })} />
            </Field>
            <Field label={"Password"} htmlFor={"password"} error={errors.password}>
                <input
                    className={`auth-input ${errors.password ? "border-red-500" : "border-gray-200"}`}
                    name="password"
                    type="password"
                    id="password"
                    {...register("password", {
                        required: "password is required", minLength: {
                            value: 8,
                            message: "Password must be minimum 8 characters"
                        }
                    })} />
            </Field>
            {
                errors?.random?.message && <p className='font-medium text-red-500'> errors?.random?.message </p>
            }
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
            >
                Login
            </button>

        </form>
    );
}

export default LoginForm;