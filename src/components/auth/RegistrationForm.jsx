import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Field from '../common/Field';
import axios from 'axios';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm()
    const navigate = useNavigate()
    const submitForm = async (formdata) => {
        console.log(formdata);
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`, formdata)
            if (res.status === 201) {
                navigate("/login")
            }
        } catch (error) {
            setError(root.random, {
                type: "random",
                message: `Something went wrong ${error.message}`
            })
        }
    }

    return (
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
            onSubmit={handleSubmit(submitForm)}
        >
            <Field label={"First Name"} htmlFor={"firstName"} error={errors.firstName} >
                <input
                    className={`auth-input ${errors.firstName ? "border-red-500" : "border-gray-200"}`}
                    name="firstName"
                    type="firstName"
                    id="firstName"
                    {...register("firstName", { required: "First Name is required" })} />
            </Field>
            <Field label={"Last Name"} htmlFor={"lastName"} error={errors.lastName} >
                <input
                    className={`auth-input ${errors.lastName ? "border-red-500" : "border-gray-200"}`}
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    {...register("lastName", { required: "Last Name is required" })} />
            </Field>
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
};

export default RegistrationForm;