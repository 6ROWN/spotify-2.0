/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
				// port: "",
				// pathname: "/image/*",
			},
			{ protocol: "https", hostname: "images-ak.spotifycdn.com" },
			{ protocol: "https", hostname: "mosaic.scdn.co" },
		],
	},
};

module.exports = nextConfig;
