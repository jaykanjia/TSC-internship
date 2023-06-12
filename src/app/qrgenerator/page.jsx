"use client";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import React, { useEffect, useState } from "react";

const page = () => {
	const [qrData, setQrData] = useState("Welcome!");
	useEffect(() => {}, [qrData]);

	const handleOnChange = ({ target }) => {
		const { value } = target;
		console.log(value);
		setQrData(value);
	};

	return (
		<main className="w-screen h-screen grid place-items-center bg-black text-white">
			<div className="flex flex-col justify-center items-center gap-4">
				<h1 className="text-xl p-4">QR Code Generator</h1>
				<input
					className="bg-black border-2 border-gray-300 outline-none px-4 py-2 rounded-full"
					type="text"
					placeholder="Enter text here"
					onChange={handleOnChange}
				/>
				<QRCodeGenerator data={qrData} />
				<p className="text-gray-400">Text: {qrData}</p>
			</div>
		</main>
	);
};

export default page;
