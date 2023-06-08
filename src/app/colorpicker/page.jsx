import React from "react";
import ColorPicker from "@/components/ColorPicker";

const colors = [
	{ color: "#E8F5E9" },
	{ color: "#00CED1" },
	{ color: "#FFA07A" },
	{ color: "#C0C0C0" },
	{ color: "#FFD700" },
	{ color: "#7FFFD4" },
	{ color: "#FF1493" },
	{ color: "#00FF7F" },
	{ color: "#FF0000" },
	{ color: "#0000FF" },
	{ color: "#7CFC00" },
	{ color: "#00FFEF" },
	{ color: "#FFD700" },
	{ color: "#00FFFF" },
	{ color: "#FF4500" },
	{ color: "#8A2BE2" },
	{ color: "#32CD32" },
	{ color: "#FF69B4" },
	{ color: "#00FFFF" },
	{ color: "#FFA500" },
	{ color: "#FFC0CB" },
	{ color: "#008000" },
];

const page = () => {
	return (
		<main
			className={`absolute w-screen h-screen grid place-content-center`}
		>
			<div className="max-w-[500px]">
				<ColorPicker colors={colors} />
			</div>
		</main>
	);
};

export default page;
