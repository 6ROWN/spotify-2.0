"use client";
import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import {
	BiSearch,
	BiLibrary,
	BiPlus,
	BiHeart,
	BiBookmarkAlt,
} from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdAlbums } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "@/atoms/playlistAtoms";

const Sidebar = () => {
	const { data: session } = useSession();
	const spotifyApi = useSpotify();

	const [playlists, setPlaylists] = useState();
	const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

	console.log(playlistId);

	useEffect(() => {
		if (spotifyApi.getAccessToken()) {
			spotifyApi.getUserPlaylists().then((data) => {
				setPlaylists(data.body.items);
			});
		}
	}, [session, spotifyApi]);

	return (
		<div className="text-gray-200 p-4 text-xs md:text-sm lg:text-base w-[50%] sm:w-[25%] h-screen overflow-hidden">
			<div className="bg-[#121212] rounded-lg flex flex-col space-y-4 p-6 mb-4">
				<button className="flex items-center space-x-4 group">
					<HiHome className="h-6 w-6" />
					<span className="group-hover:font-bold"> Home</span>
				</button>
				<button className="flex items-center space-x-4 group">
					<BiSearch className="h-6 w-6 " />
					<span className="group-hover:font-bold"> Search</span>
				</button>
				<button className="flex items-center space-x-4 group">
					<IoMdAlbums className="h-6 w-6 " />
					<span className="group-hover:font-bold"> Albums</span>
				</button>
				<button className="flex items-center space-x-4 group">
					<BsFillPersonFill className="h-6 w-6 " />
					<span className="group-hover:font-bold"> Artists</span>
				</button>
			</div>
			<div className="bg-[#121212] rounded-lg flex flex-col space-y-4 p-6 mb-4 overflow-y-scroll h-screen scrollbar-hide">
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
				{playlists?.map((item) => (
					<div
						onClick={() => setPlaylistId(item.id)}
						className="cursor-pointer hover:font-bold"
						key={item.id}
					>
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
