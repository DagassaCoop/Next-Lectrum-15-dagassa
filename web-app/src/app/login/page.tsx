"use client";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LOGIN } from "@/src/constants/graphql/queries/login";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const [login, { loading, error }] = useLazyQuery(LOGIN, {
        onCompleted: (data) => {
            localStorage.setItem("token", data.login.data);
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login({
                variables: {
                    credentials: {
                        email: formData.email,
                        password: formData.password,
                    },
                },
            });
            router.push("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Log In
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        {loading ? "Logging In..." : "Log In"}
                    </button>

                    {error && (
                        <p className="text-red-500 text-sm mt-2">Error: {error.message}</p>
                    )}
                </form>

                {/* Link to the Register Page */}
                <p className="mt-4 text-center text-gray-400">
                    Do not have an account?{" "}
                    <Link
                        href="/register"
                        className="text-indigo-500 hover:text-indigo-400"
                    >
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}