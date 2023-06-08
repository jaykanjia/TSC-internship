"use client";
import React, { useState, useRef, useEffect } from "react";
// import style from "./style.module.css";

let currentOtpIndex = 0;

const NumberVarifyCard = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const [activeOtpIndex, setActiveOtpIndex] = useState(0);
	const inputRef = useRef(null);

	const handleOnChange = ({ target }) => {
		const { value } = target;
		const newOtp = [...otp];
		if (newOtp[currentOtpIndex] === "")
			newOtp[currentOtpIndex] = value.substring(value.length - 1);
		if (!value) setActiveOtpIndex(currentOtpIndex - 1);
		else setActiveOtpIndex(currentOtpIndex + 1);
		setOtp(newOtp);
	};

	const handleOnKeyDown = ({ key }, index) => {
		currentOtpIndex = index;
		if (key === "Backspace") {
			const newOtp = [...otp];
			if (otp[index] !== "") {
				newOtp[index] = "";
			} else {
				setActiveOtpIndex(currentOtpIndex - 1);
				newOtp[index] = "";
				newOtp[index - 1] = "";
			}
			setOtp(newOtp);
		}
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, [activeOtpIndex]);

	return (
		<div className="flex flex-col gap-6 bg-white p-10 rounded-2xl">
			<div>
				<h2 className="text-3xl text-center font-semibold text-blue-700">
					Phone Verification
				</h2>
			</div>
			<div className="flex justify-center text-blue-700 animate-pulse">
				<svg
					className="h-32"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={0.5}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
					/>
				</svg>
			</div>
			<div>
				<p className="text-blue-500">
					Please enter 4 digit code sent to you
				</p>
			</div>
			<div className="flex flex-col gap-4 items-center justify-center">
				<div className="flex gap-4">
					{otp.map((_, index) => {
						return (
							<input
								className={`border-2 border-blue-700 text-blue-700 rounded-2xl h-12 w-12 text-center`}
								type="number"
								ref={index === activeOtpIndex ? inputRef : null}
								key={index}
								id={`otp${index}`}
								name={`otp${index}`}
								value={otp[index]}
								onKeyDown={(e) => handleOnKeyDown(e, index)}
								onChange={handleOnChange}
								placeholder=" "
							/>
						);
					})}
				</div>
				<div>
					<button className="text-blue-700 underline">
						Resend OTP
					</button>
				</div>
			</div>
			<div className="flex justify-center">
				<button className="bg-blue-600 text-white px-8 py-2 rounded-full">
					Verify Now
				</button>
			</div>
		</div>
	);
};

export default NumberVarifyCard;
