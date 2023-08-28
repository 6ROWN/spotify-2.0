import React from "react";
import Avatar from "./avatar";
import { FiMoreHorizontal } from "react-icons/fi";

const Header = () => {
	return (
		<header className="flex justify-between items-center min-w-full">
			<FiMoreHorizontal size={24} className="cursor-pointer" />

			<Avatar />
		</header>
	);
};

export default Header;
