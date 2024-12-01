"use client";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import REGISTER from "../../constants/graphql/mutations/register.graphql";
import { useRouter } from "next/navigation";
export default function FormPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const router = useRouter();
    const [register, { loading, error }] = useMutation(REGISTER, {
        onCompleted: (data) => {
            localStorage.setItem("token", data.register.data);
            router.push("/");
        },
    });
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            console.log('form name', formData.name);
            console.log('form email', formData.email);
            await register({
                variables: {
                    user: {
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                    },
                },
            });
            console.log('here');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-400"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-gray-700 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-600"
                            placeholder="Your Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out duration-150"
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                    {error && (
                        <p className="text-red-500 text-sm mt-2">Error: {error.message}</p>
                    )}
                </form>
            </div>
        </div>
    );
}