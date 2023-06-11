"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddIcon from "@/public/plus.svg";
import CrossIcon from "@/public/cross.svg";
import style from "./style.module.css";

const ImagePicker = () => {
	const [file, setFile] = useState(null);
	const [previewURL, setPreviewURL] = useState(null);
	const [showFullscreen, setShowFullscreen] = useState(false);

	const handleFileSelect = (event) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);
		// Preview image
		const reader = new FileReader();
		reader.onload = () => {
			setPreviewURL(reader.result);
		};
		reader.readAsDataURL(selectedFile);
	};

	const handleOnClickPreview = () => {
		if (previewURL) return setShowFullscreen(true);
	};
	const handleExitFullscreen = () => {
		return setShowFullscreen(false);
	};

	useEffect(() => {}, [showFullscreen]);

	if (showFullscreen) {
		return (
			<div
				className={`${style.bgBlur} absolute top-0 left-0 w-screen h-screen p-10 grid items-center`}
				onClick={handleExitFullscreen}
			>
				<div className={`z-50 relative w-full h-full`}>
					<Image
						className={`${style.animateZoom} object-contain object-center`}
						src={previewURL}
						alt="Preview"
						fill
					/>
					<button className="absolute -top-8 -right-8 w-8 h-8 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg p-1">
						<CrossIcon />
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="flex gap-2 flex-col sm:flex-row justify-between items-center">
				<div className="relative w-full sm:w-[400px] aspect-square rounded-xl flex justify-center items-center overflow-hidden border-2 border-indigo-500 shadow-lg">
					{!previewURL && (
						<span className="text-center">
							No any Image for Preview
						</span>
					)}
					{previewURL && (
						<Image
							className="object-cover object-center cursor-pointer hover:scale-110 duration-300"
							src={previewURL}
							alt="Preview"
							fill
							onClick={handleOnClickPreview}
						/>
					)}
				</div>
				<button className="relative bg-indigo-500 w-full rounded-xl text-white px-4 py-2 cursor-pointer capitalize shadow-lg">
					pick Image
					<input
						className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
						type="file"
						accept="image/*"
						onChange={handleFileSelect}
						placeholder="pick image"
					/>
				</button>
			</div>
			{file && (
				<div className="flex gap-2 justify-between items-center">
					<span className="w-[70%]">
						<p className="truncate hover:text-clip">{file.name}</p>
					</span>
					<p>{`(${(file.size / 1024 ** 2).toFixed(3)})MB`} </p>
				</div>
			)}
		</div>
	);
};

export default ImagePicker;
