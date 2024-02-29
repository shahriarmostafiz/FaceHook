import React from 'react';
import Field from '../common/Field';
import { useForm } from "react-hook-form"

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const submitForm = formdata => {
        console.log(formdata);
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