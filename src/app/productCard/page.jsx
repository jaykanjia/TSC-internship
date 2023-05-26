import React from "react";
import Image from "next/image";

const ProductCardPage = () => {
	return (
		<div className="min-h-screen w-full bg-[rgb(241,235,229)] grid place-content-center p-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto rounded-xl overflow-hidden">
				<div className="relative min-h-[300px] overflow-hidden">
					<Image
						className="object-cover hover:scale-105 duration-300 cursor-pointer"
						src="/images/perfume.jpg"
						alt="picture of perfume"
						fill
					/>
				</div>
				<div className="bg-white p-8 flex flex-col gap-6">
					<div>
						<span className="tracking-[5px] text-sm text-gray-400 font-semibold">
							PERFUME
						</span>
					</div>
					<div>
						<span className="font-extrabold text-4xl font-serif">
							Lorem ipsum dolor sit amet.
						</span>
					</div>
					<div>
						<span className="text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Quam officia eum atque. Libero sed eaque
							perspiciatis velit exercitationem nesciunt laborum.
						</span>
					</div>
					<div className="flex gap-4 items-center">
						<span className="text-4xl font-extrabold font-serif text-[rgb(80,128,105)]">
							$149.99
						</span>
						<span className="text-gray-500">
							<del>$169.99</del>
						</span>
					</div>
					<button className="flex gap-4 text-sm justify-center items-center bg-[rgb(80,128,105)] rounded-md w-full py-3 hover:scale-105 duration-300">
						<span className="text-white">
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
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
								/>
							</svg>
						</span>
						<span className="text-white">Add to Cart</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCardPage;
