import React from "react";
import Image from "next/image";

const gridBox2 = () => {
	return (
		<div className="bg-[rgb(254,253,250)]">
			<div className="sm:gridBox2 flex flex-col gap-8 sm:grid max-w-5xl mx-auto py-10 px-4 min-h-screen">
				<header className="flex justify-between items-center">
					<div>
						<span className="text-6xl font-extrabold font-serif">
							W.
						</span>
					</div>
					<nav
						className={`absolute sm:relative hidden sm:flex gap-8`}
					>
						<span className="text-gray-500">Home</span>
						<span className="text-gray-500">New</span>
						<span className="text-gray-500">Popular</span>
						<span className="text-gray-500">Trending</span>
						<span className="text-gray-500">Categories</span>
					</nav>
					<button className="sm:hidden grid place-content-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</header>
				<main className="bg-[rgb(16,22,33)] relative h-full w-full min-h-[200px] overflow-hidden">
					<Image
						className="object-contain hover:scale-110 duration-300 cursor-pointer"
						src="/images/banner2.avif"
						alt="banner image"
						fill
					/>
				</main>

				<section className="">
					<h2 className="text-6xl font-extrabold">
						The Bright Future Of Web 3.0?
					</h2>
				</section>
				<section className="flex flex-col gap-4 items-start justify-between">
					<p className="text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ullam placeat esse quibusdam tenetur illo itaque
						dignissimos laboriosam, odio odit ex commodi eveniet
						maxime ipsum consectetur dolores similique neque
						molestias asperiores.
					</p>
					<button className="capitalize px-10 py-3 bg-[rgb(222,102,87)] text-white tracking-widest">
						READ MORE
					</button>
				</section>
				<aside className="bg-[rgb(0,0,25)] p-6">
					<h2 className="text-yellow-500 text-4xl">New</h2>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-6">
							<h3 className="text-white text-xl">
								Lorem ipsum dolor sit.
							</h3>
							<p className="text-gray-300 text-xs">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Odit, quam!
							</p>
						</div>
						<div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-6">
							<h3 className="text-white text-xl">
								Lorem ipsum dolor sit.
							</h3>
							<p className="text-gray-300 text-xs">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Odit, quam!
							</p>
						</div>
						<div className="flex flex-col gap-2 border-b-[1px] border-gray-300 py-6">
							<h3 className="text-white text-xl">
								Lorem ipsum dolor sit.
							</h3>
							<p className="text-gray-300 text-xs">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Odit, quam!
							</p>
						</div>
					</div>
				</aside>
				<div
					id="item1"
					className="item1 grid grid-cols-[30%_70%] gap-4 content-center items-center"
				>
					<div className="relative aspect-[3/4] overflow-hidden">
						<Image
							className="hover:scale-110 duration-300 cursor-pointer"
							src="/images/item1.jpg"
							alt="item1"
							quality={50}
							fill
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="text-4xl font-extrabold text-gray-300">
							01
						</h2>
						<h3 className="text-xl font-extrabold">
							Lorem, ipsum dolor.
						</h3>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Esse, quia!
						</p>
					</div>
				</div>
				<div
					id="item1"
					className="item1 grid grid-cols-[30%_70%] gap-4 content-center items-center"
				>
					<div className="relative aspect-[3/4] overflow-hidden">
						<Image
							className="hover:scale-110 duration-300 cursor-pointer"
							src="/images/item2.jpg"
							alt="item2"
							quality={50}
							fill
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="text-4xl font-extrabold text-gray-300">
							02
						</h2>
						<h3 className="text-xl font-extrabold">
							Lorem, ipsum dolor.
						</h3>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Esse, quia!
						</p>
					</div>
				</div>
				<div
					id="item1"
					className="item1 grid grid-cols-[30%_70%] gap-4 content-center items-center"
				>
					<div className="relative aspect-[3/4] overflow-hidden">
						<Image
							className="hover:scale-110 duration-300 cursor-pointer"
							src="/images/item3.jpg"
							alt="item3"
							quality={50}
							fill
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h2 className="text-4xl font-extrabold text-gray-300">
							03
						</h2>
						<h3 className="text-xl font-extrabold">
							Lorem, ipsum dolor.
						</h3>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Esse, quia!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default gridBox2;
