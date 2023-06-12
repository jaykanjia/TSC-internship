import React from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = ({ data }) => {
	return (
		<div className="p-4 border-4 border-gray-300">
			<QRCode value={data} bgColor="#000" fgColor="rgb(209 213 219)" />
			{/* <QRCode value={data} bgColor="#000" fgColor="rgb(134 239 172)" /> */}
			{/* <QRCode value={data} bgColor="#000" fgColor="#FFD700" />
			<QRCode value={data} bgColor="#000" fgColor="#B87333" /> */}
		</div>
	);
};

export default QRCodeGenerator;
