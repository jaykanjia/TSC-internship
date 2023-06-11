import ImagePicker from "@/components/ImagePicker";
import React from "react";

const page = () => {
	return (
		<main className="w-screen h-screen grid place-items-center">
			<div className="max-w-[400px] p-4">
				<ImagePicker />
			</div>
		</main>
	);
};

export default page;
