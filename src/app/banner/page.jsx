import React from "react";
import Image from "next/image";

const BannerPage = () => {
	return (
		<div className="flex sm:flex-row flex-col justify-center items-center min-h-screen gap-10 md:p-20 p-10">
			<div className="flex flex-col justify-center gap-8 grow-1 basis-96">
				<h1 className="text-3xl md:text-4xl">
					Lorem ipsum dolor sit amet.
				</h1>
				<p className="text-xl md:text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vitae, consequatur?
				</p>
				<button className="border-2 border-black rounded-md hover:bg-black hover:text-white duration-300 px-6 py-2">
					Lorem, ipsum.
				</button>
			</div>
			<div className="flex justify-center items-center grow-1 overflow-hidden sm:basis-96 rounded-lg shadow-lg">
				<Image
					className="hover:scale-110 duration-300 aspect-[9/13]"
					alt="banner image"
					src="/images/banner.jpg"
					width={600}
					height={600}
				/>
			</div>
		</div>
	);
};

export default BannerPage;
