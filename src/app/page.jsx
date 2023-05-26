export default function Home() {
	const data = [
		{
			title: "Day-1",
			linkName: "Banner",
			link: "/banner",
		},
		{
			title: "Day-2",
			linkName: "TrackingDashboard",
			link: "/trackingDashboard",
		},
	];
	return (
		<main className="min-h-screen grid place-items-center">
			<section>
				{data.map((item) => {
					return (
						<div className="flex gap-8 items-center">
							<span className="text-2xl font-extrabold">
								{item.title}
							</span>
							<span className="text-blue-500 text-2xl">
								<a href={item.link}>{item.linkName}</a>
							</span>
						</div>
					);
				})}
			</section>
		</main>
	);
}
