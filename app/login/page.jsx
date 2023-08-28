"use client";
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const page = () => {
	const { status } = useSession();

	return (
		<div className="flex flex-col justify-center h-screen items-center bg-black text-gray-200 space-y-12">
			<div className="text-xl">Millions of Songs. Free on Spotify</div>
			<div>
				<FaSpotify size={42} />
			</div>
			<button
				disabled={status == "loading"}
				onClick={() => signIn("spotify", { callbackUrl: "/" })}
				className="text-center bg-green-500 text-gray-200 p-4 rounded-full w-64 font-bold outline-none border-none"
			>
				{status === "loading" ? (
					<AiOutlineLoading3Quarters
						size={24}
						className="animate-spin mx-auto "
					/>
				) : (
					"Log In"
				)}
			</button>
		</div>
	);
};

export default page;
