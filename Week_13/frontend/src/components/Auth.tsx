import axios from "axios";

import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@100xdevs/medium-common";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    async function sendDetails(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            // console.log(postInputs)
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = res.data.jwt;
            // console.log("Res is: ", res);
            // console.log("JWT is: ", jwt);
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (error) {
            alert("Error while signing up")
        }
    }

  return (
    <div className="flex items-center justify-center">
        <div className="min-w-96">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Create an account</h2>
                <p className="text-lg text-slate-600 font-semibold">
                    {type === "signup" ? "Already have an account? " : "Don't have an account? "}
                    <Link to={type === "signup" ? "/signin" : "/signup"} className="underline">
                        {type === "signup" ? "Login" : "Register"}
                    </Link>
                </p>
            </div>

            <form className="mt-6" onSubmit={sendDetails}>
                {type === "signup" && (
                    <LabelledInput 
                        id="Name"
                        label="Name" 
                        placeholder="Harkirat Singh" 
                        value={postInputs.name} 
                        onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value
                            })) 
                        }} 
                    />
                )}
                <LabelledInput 
                    id="Username"
                    label="Username" 
                    placeholder="username" 
                    value={postInputs.username} 
                    onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value
                        })) 
                    }} 
                />
                <LabelledInput 
                    id="Password"
                    label="Password" 
                    placeholder="Password" 
                    value={postInputs.password} 
                    type="password"
                    onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        })) 
                    }} 
                />

                <button 
                    type="submit"
                    // onClick={sendDetails}
                    className="w-full bg-black text-white text-base font-semibold rounded-lg cursor-pointer py-2 mt-8"
                >
                    {type === "signup" ? "Sign Up" : "Sign In"}
                </button>
            </form>
        </div>
    </div>
  )
}


interface LabelledInputProps {
    id: string
    label: string;
    placeholder: string;
    type?: string;
    value: string | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({ id, label, placeholder,type ,value, onChange }: LabelledInputProps) => {
    return (
        <div className="mt-4">
            <label className="block mb-2 text-base font-bold text-gray-900">{label}</label>
            <input 
                id={id}
                type={type || "text"} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder={placeholder} 
                required 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

