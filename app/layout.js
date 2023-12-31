"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/Providers/AuthProvider";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<RecoilRoot>{children} </RecoilRoot>
				</AuthProvider>
			</body>
		</html>
	);
}
