import React from "react";
import NumberVarifyCard from "@/components/NumberVarifyCard";
import style from "./style.module.css";

const page = () => {
	return (
		<main
			className={`${style.bgBlur} absolute w-screen h-screen grid place-content-center`}
		>
			<NumberVarifyCard />
		</main>
	);
};

export default page;
