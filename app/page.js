import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";
import { getSession } from "next-auth/react";

export default async function Home() {
	return (
		<main className="bg-black ">
			<section className="flex ">
				<Sidebar />
				<Center />
			</section>
		</main>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
