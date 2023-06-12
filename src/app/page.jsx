import HomePageCard from "@/components/HomePageCard";

export default function Home() {
	const data = [
		{
			title: "task-1",
			linkName: "Banner",
			link: "/banner",
			thumbnailUrl: "/images/day-1.webp",
			date: "22/5/2023",
		},
		{
			title: "task-2",
			linkName: "Tracking Dashboard",
			link: "/trackingDashboard",
			thumbnailUrl: "/images/day-2.webp",
			date: "23/5/2023",
		},
		{
			title: "task-3",
			linkName: "News Home Page",
			link: "/newsHomePage",
			thumbnailUrl: "/images/day-3.webp",
			date: "24/5/2023",
		},
		{
			title: "task-4",
			linkName: "Product Card",
			link: "/productCard",
			thumbnailUrl: "/images/day-4.webp",
			date: "25/5/2023",
		},
		{
			title: "task-5",
			linkName: "Stats preview card",
			link: "/statsPreviewCard",
			thumbnailUrl: "/images/day-5.webp",
			date: "26/5/2023",
		},
		{
			title: "task-6",
			linkName: "OTP Verification",
			link: "/verifynumber",
			thumbnailUrl: "/images/day-5.webp",
			date: "3/6/2023",
		},
		{
			title: "task-7",
			linkName: "Color Picker",
			link: "/colorpicker",
			thumbnailUrl: "/images/day-5.webp",
			date: "9/6/2023",
		},
		{
			title: "task-8",
			linkName: "Image Picker",
			link: "/imagepicker",
			thumbnailUrl: "/images/day-5.webp",
			date: "10/6/2023",
		},
		{
			title: "task-9",
			linkName: "QR Generator",
			link: "/qrgenerator",
			thumbnailUrl: "/images/day-5.webp",
			date: "12/6/2023",
		},
	];
	return (
		<main className="min-h-screen bg-[rgb(14,19,34)] font-mono">
			<div className="max-w-5xl mx-auto p-8">
				<section className="sticky top-0 py-8 z-10 bg-[rgb(14,19,34)]	">
					<h1 className="text-4xl font-semibold text-indigo-400 border-b-[1px] border-indigo-400 pb-6">
						Daily Dashboard
					</h1>
				</section>
				<section className="z-0 grid homeCardGrid flex-wrap gap-4">
					{data.map((item, index) => {
						return (
							<a key={index} href={item.link}>
								<HomePageCard data={item} />
							</a>
						);
					})}
				</section>
			</div>
		</main>
	);
}
