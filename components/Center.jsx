"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import { shuffle } from "lodash";
import useSpotify from "@/hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "@/atoms/playlistAtoms";
import Image from "next/image";

const colors = [
	"from-indigo-500",
	"from-red-500",
	"from-green-500",
	"from-yellow-500",
	"from-purple-500",
	"from-green-500",
	"from-brown-500",
	"from-teal-500",
	"from-blue-500",
];

const Center = () => {
	const { data: session } = useSession();

	const spotifyApi = useSpotify();

	const [color, setColor] = useState(null);
	const playlistId = useRecoilValue(playlistIdState);
	const [playlist, setPlaylists] = useRecoilState(playlistState);

	useEffect(() => {
		setColor(shuffle(colors).pop());
	}, [playlistId]);

	useEffect(() => {
		spotifyApi
			.getPlaylist(playlistId)
			.then((data) => setPlaylists(data.body))
			.catch((error) => console.log("something went wrong:", error));
	}, [spotifyApi, playlistId]);

	console.log(playlist);

	return (
		<div className={` flex-grow text-white `}>
			<div className={`bg-gradient-to-b ${color} to-black h-48`}>
				<div className="p-6">
					<Header />
				</div>
			</div>
			<section
				className={`flex items-end space-x-2 md:space-x-8 px-2 md:px-8`}
			>
				<Image
					src={playlist?.images?.[0]?.url}
					alt="playlist image"
					width={100}
					height={100}
					className="w-32 h-32 rounded-lg"
				/>
				<div>
					<h1 className="text-xs">PLAYLIST</h1>
					<h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
						{playlist?.name}
					</h1>
				</div>
			</section>
			<div></div>
		</div>
	);
};

export default Center;
