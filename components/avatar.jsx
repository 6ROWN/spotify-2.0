"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi";

const Avatar = () => {
	const { data: session } = useSession();
	console.log(session);

	return (
		<div>
			<div className="flex space-x-2 justify-center items-center px-2 py-1 bg-gray-700 rounded-full hover:opacity-75 cursor-pointer">
				<Image
					src={session?.user?.image}
					alt="user avatar"
					width={100}
					height={100}
					className="h-10 w-10 rounded-full"
				/>
				<h1 className="text-sm font-medium">{session?.user?.name}</h1>
				<HiOutlineChevronDown size={18} />
			</div>
		</div>
	);
};

export default Avatar;
