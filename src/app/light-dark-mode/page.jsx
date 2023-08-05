"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const MoonSvg = () => {
	return (
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
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);
};

const SunSvg = () => {
	return (
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
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);
};

const Page = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	// const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return (
		<div className={styles.wrapper}>
			<header className={`${styles.header} bg-red-200 dark:bg-red-800 `}>
				{theme === "dark" ? (
					<button
						className="border-[1px] p-2 border-black dark:border-white rounded-md"
						onClick={() => setTheme("light")}
					>
						<SunSvg />
					</button>
				) : (
					<button
						className="border-[1px] p-2 border-black dark:border-white rounded-md"
						onClick={() => setTheme("dark")}
					>
						<MoonSvg />
					</button>
				)}
			</header>
			<div className="lg:w-[60%] flex flex-col gap-8">
				<h1 className="text-4xl font-semibold">
					{theme === "dark" ? "Dark" : "Light"} Mode On
				</h1>
				<div className="flex flex-col gap-4">
					<div>
						<h3>
							<b>Step1:</b> install next-themes
						</h3>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>
								$&gt; npm install next-themes
							</code>
						</p>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>
								$&gt; yarn add next-themes
							</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 2:</b> add &apos; darkMode: &quot;class&quot; &apos; in
							tailwind.config.js,
						</h3>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`module.exports = { ..., darkMode: "class", theme: { ... }, plugins: [],};`}</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 3:</b> import ThemeProvider in parent component
						</h3>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`import {ThemeProvider} from 'next-themes'`}</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 4:</b> wrap parent component(layout.js) with ThemeProvider
						</h3>

						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`return <ThemeProvider attribute="class">{children}</ThemeProvider>;`}</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 5:</b> import useTheme hook in header component for theme
							controll and make client component (&apos;use client&apos;)
						</h3>

						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`import { useTheme } from "next-themes";`}</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 6:</b> destructure useTheme hook inside componet
						</h3>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`return { const {theme, setTheme} = useTheme(); }`}</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 7:</b> set onClick event on theme toggler
						</h3>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`{theme === "dark" ? (
					<button
						onClick={() => setTheme("light")}
					>
						<SunSvg />
					</button>
				) : (
					<button
						onClick={() => setTheme("dark")}
					>
						<MoonSvg />
					</button>
				)}`}</code>
						</p>
					</div>
					<div>
						<h3>
							<b>Step 8:</b> use your theme in tailwind class
						</h3>
						<p>
							<code
								className={`${styles.code} bg-slate-700 px-4 py-1 leading-7 dark:bg-slate-300`}
							>{`className="bg-white dark:bg-black"`}</code>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
