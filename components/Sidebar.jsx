"use client";
import React from "react";
import { HiHome } from "react-icons/hi";
import {
	BiSearch,
	BiLibrary,
	BiPlus,
	BiHeart,
	BiBookmarkAlt,
} from "react-icons/bi";
import { signOut } from "next-auth/react";

const Sidebar = () => {
	return (
		<div className="text-gray-200 p-4 text-sm md:text-base w-[50%] sm:w-[25%] overflow-y-hidden h-screen">
			<div className="bg-[#121212] rounded-lg flex flex-col space-y-4 p-6 mb-4">
				<button className="flex items-center space-x-4 group">
					<HiHome className="h-6 w-6" />
					<span className="group-hover:font-bold"> Home</span>
				</button>
				<button className="flex items-center space-x-4 group">
					<BiSearch className="h-6 w-6 " />
					<span className="group-hover:font-bold"> Search</span>
				</button>
			</div>
			<div className="bg-[#121212] rounded-lg flex flex-col space-y-4 p-6 mb-4">
				<div className="flex justify-between items-center">
					<button className="flex items-center space-x-4 group">
						<BiLibrary className="h-6 w-6" />
						<span className="group-hover:font-bold">
							{" "}
							Your Library
						</span>
					</button>
					<button onClick={() => signOut()}>
						<BiPlus className="w-6 h-6" />
					</button>
				</div>

				<button className="flex items-center space-x-4 group">
					<BiHeart className="h-6 w-6" />
					<span className="group-hover:font-bold"> Liked Songs</span>
				</button>
				<button className="flex items-center space-x-4 group">
					<BiBookmarkAlt className="h-6 w-6" />
					<span className="group-hover:font-bold">
						{" "}
						Your Episodes
					</span>
				</button>
				{/* Playlists */}
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
				<p className="cursor-pointer hover:font-bold">Playlists</p>
			</div>
		</div>
	);
};

export default Sidebar;
