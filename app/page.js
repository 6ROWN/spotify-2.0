import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<main className="bg-black h-screen overflow-hidden">
			<section className="flex ">
				<Sidebar />
				<Center />
			</section>
		</main>
	);
}
