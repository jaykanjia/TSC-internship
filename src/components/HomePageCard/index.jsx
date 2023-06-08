import React from "react";
import Image from "next/image";

const HomePageCard = ({ data }) => {
	return (
		<div className="group z-0 bg-indigo-950  h-full rounded-3xl relative overflow-hidden duration-300">
			<div className="absolute top-[500px] w-full h-full -z-10 group-hover:top-0 group-hover:bg-indigo-700 duration-300 ">
				{/* <Image
					className="object-cover rounded-3xl"
					src={data.thumbnailUrl}
					alt=""
					fill
				/> */}
			</div>
			<div className="flex flex-col justify-between gap-4 p-4 lg:p-8">
				<div className="">
					<span className="text-base md:text-lg font-light text-white capitalize">
						{data.linkName}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-3xl md:text-4xl font-light text-white capitalize">
						{data.title}
					</span>
				</div>
				<div className="flex gap-4 items-center text-xs md:text-sm text-indigo-400">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
							/>
						</svg>
					</span>
					<span>{data.date}</span>
				</div>
			</div>
		</div>
	);
};

export default HomePageCard;
