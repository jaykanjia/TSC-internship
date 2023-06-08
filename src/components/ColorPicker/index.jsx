"use client";
import React, { useState, useEffect } from "react";
import PlusIcon from "@/public/plus.svg";

const ColorPicker = ({ colors }) => {
	const [currentColor, setCurrentColor] = useState("#ffffff");
	useEffect(() => {}, [currentColor]);

	const handleOnChance = ({ target }) => {
		setCurrentColor(target.value);
		console.log(target.value);
	};
	const handleOnClick = (color) => {
		setCurrentColor(color);
	};

	return (
		<div className="flex gap-2 w-full overflow-x-scroll noScrollbar p-2">
			{/* color picker */}
			<div>
				<div
					className={`relative w-12 h-12 rounded-full overflow-hidden bg-gray-400 text-white cursor-pointer grid place-content-center`}
				>
					<PlusIcon className="w-6 h-6" />
					<input
						className="absolute top-0 w-full h-full border-none outline-none box-border opacity-0 cursor-pointer"
						type="color"
						onChange={handleOnChance}
					/>
				</div>
			</div>
			{/* color review */}
			<div>
				<div
					className={`w-12 h-12 rounded-full flex justify-center shadow-md items-center`}
					style={{ backgroundColor: currentColor }}
				>
					<span className="block w-2 h-2 bg-black rounded-full"></span>
				</div>
			</div>
			{/* color oprions */}
			<div className="flex gap-2">
				{colors?.map((item, index) => {
					const style = `bg-[${item?.color}]`;
					return (
						<div
							key={index}
							className={`block w-12 h-12 rounded-full cursor-pointer`}
							style={{ backgroundColor: item.color }}
							onClick={() => handleOnClick(item.color)}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default ColorPicker;
