import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";

import "@/app/globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: "Next.JS Starter Template",
		template: "%s | Superior Software Solutions",
	},
	description: "Starter template for Next.JS projects using Tailwind CSS, ShadCN UI and Aceternity UI.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
		</html>
	);
};

export default RootLayout;
