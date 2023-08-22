"use client";
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { signIn } from "next-auth/react";
const page = () => {
	return (
		<div className="flex flex-col justify-center h-screen items-center bg-black text-gray-200 space-y-12">
			<div className="text-xl">Millions of Songs. Free on Spotify</div>
			<div>
				<FaSpotify size={42} />
			</div>
			<button
				onClick={() => signIn("spotify", { callbackUrl: "/" })}
				className="bg-green-500 text-gray-200 p-4 rounded-full w-64 font-bold outline-none border-none"
			>
				Log In
			</button>
		</div>
	);
};

export default page;
