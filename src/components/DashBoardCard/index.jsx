import React from "react";

const DashBoardCard = ({ data }) => {
	return (
		<div className="bg-indigo-950 flex h-full flex-col gap-4 p-4 lg:p-8 rounded-3xl">
			<div className="flex justify-between items-center">
				<span className="text-base md:text-lg text-white">
					{data.title}
				</span>
				<span className="text-base md:text-lg text-white">
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
							d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
						/>
					</svg>
				</span>
			</div>
			<div className="flex gap-4 flex-row sm:flex-col justify-between items-center sm:items-start">
				<div>
					<span className="text-4xl md:text-5xl font-light text-white">
						{data.duration}
					</span>
				</div>
				<div>
					<span className="text-xs md:text-sm text-indigo-400">
						Last Week - {data.lastWeek}
					</span>
				</div>
			</div>
		</div>
	);
};

export default DashBoardCard;
