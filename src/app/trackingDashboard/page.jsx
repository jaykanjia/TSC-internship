import React from "react";
import Image from "next/image";
import DashBoardCard from "@/components/DashBoardCard";

const data = [
	{
		title: "Work",
		duration: "32hrs",
		lastWeek: "36hrs",
		color: "bg-[rgb(237,144,108)]",
	},
	{
		title: "Play",
		duration: "10hrs",
		lastWeek: "8hrs",
		color: "bg-[rgb(113,188,222)]",
	},
	{
		title: "Study",
		duration: "4hrs",
		lastWeek: "7hrs",
		color: "bg-[rgb(236,105,127)]",
	},
	{
		title: "Exercise",
		duration: "4hrs",
		lastWeek: "5hrs",
		color: "bg-[rgb(114,205,137)]",
	},
	{
		title: "Social",
		duration: "5hrs",
		lastWeek: "10hrs",
		color: "bg-[rgb(106,56,202)]",
	},
	{
		title: "Self Care",
		duration: "2hrs",
		lastWeek: "2hrs",
		color: "bg-[rgb(234,200,108)]",
	},
];

const gridbox = () => {
	return (
		<div className="bg-[rgb(14,19,34)] sm:flex justify-center items-center min-h-screen">
			<div className="grid sm:grid-cols-4 gap-4 max-w-5xl mx-auto m-0 px-8 py-20 cursor-pointer duration-300">
				<div className="box grid grid-rows-[65%_35%] bg-indigo-950 rounded-3xl row-span-2 overflow-hidden">
					<div className="flex flex-row sm:flex-col gap-4 justify-between sm:justify-start items-center sm:items-start bg-indigo-600 p-6 sm:p-4 lg:p-8 rounded-3xl">
						<div className="relative w-16 h-16 border-2 border-white rounded-[50%] aspect-square overflow-hidden">
							<Image
								className="object-cover"
								src="/images/user.jpeg"
								alt="user profile image"
								fill
							/>
						</div>
						<div className="flex flex-col gap-1">
							<div>
								<span className="text-base md:text-lg text-indigo-200">
									Report For
								</span>
							</div>
							<div>
								<span className="text-2xl sm:text-3xl md:text-4xl text-indigo-200">
									Jeremy Robson
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-start px-8  gap-2">
						<div>
							<span className="text-indigo-400">Daily</span>
						</div>
						<div>
							<span className="text-white">Weekly</span>
						</div>
						<div>
							<span className="text-indigo-400">Monthly</span>
						</div>
					</div>
				</div>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className={`box ${item.color} pt-10 hover:pt-0 h-full rounded-3xl cursor-pointer duration-300`}
						>
							<DashBoardCard data={item} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default gridbox;
