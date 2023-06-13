import React from "react";
import Image from "next/image";

const StatsPreviewCard = () => {
	return (
		<div className="bg-[rgb(10,12,26)] min-h-screen flex justify-center items-center p-8">
			<div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto rounded-2xl sm:rounded-none overflow-hidden">
				<div className="bg-[rgb(27,24,53)] p-8 sm:p-20 text-white grid sm:grid-cols-3 justify-items-center sm:justify-items-between gap-6">
					<div className="text-3xl font-bold col-span-full">
						<h1 className="text-center sm:text-start">
							Lorem <span className="text-purple-700">ipsum</span>{" "}
							dolor sit amet consectetur.
						</h1>
					</div>
					<div className="col-span-full text-gray-400">
						<p className="text-center sm:text-start">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aut consequatur blanditiis dolore expedita
							voluptatum at nihil incidunt maiores nemo illum.
						</p>
					</div>
					<div className="flex flex-col gap-2 items-center sm:items-start">
						<span className="text-3xl font-extrabold">10k+</span>
						<span className="uppercase font-light text-gray-400">
							companies
						</span>
					</div>
					<div className="flex flex-col gap-2 items-center sm:items-start">
						<span className="text-3xl font-extrabold">314</span>
						<span className="uppercase font-light text-gray-400">
							templates
						</span>
					</div>
					<div className="flex flex-col gap-2 items-center sm:items-start">
						<span className="text-3xl font-extrabold">12M+</span>
						<span className="uppercase font-light text-gray-400">
							queries
						</span>
					</div>
				</div>
				<div className="relative w-full bg-purple-800 min-h-[300px] overflow-hidden">
					<Image
						className="object-cover opacity-40 hover:scale-105 duration-300 grayscale"
						src="/images/office.jpg"
						alt="office image"
						fill
					/>
				</div>
			</div>
		</div>
	);
};

export default StatsPreviewCard;
