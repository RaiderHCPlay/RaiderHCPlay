import type { Metadata } from "next";
import "@/styles/main.scss";

export const metadata: Metadata = {
	title: "RaiderHCPlay's website",
	verification: {
		google: "0ElUOcTRwi3dAAmnocu9z-7CzQ6YFJHdDZ3TCV16sjo",
	},
	icons: {
		icon: "https://avatars.githubusercontent.com/u/170134946?v=4",
	},

	description: "Dev portfolio of RaiderHCPlay - a web developer and a gamer.",
	authors: [
		{
			name: "RaiderHCPlay",
			url: "https://github.com/RaiderHCPlay",
		},
	],
	openGraph: {
		title: "RaiderHCPlay's website",
		type: "website",
		url: "https://raiderhcplay.vercel.app/",
		description: "Dev portfolio of RaiderHCPlay - a web developer and a gamer.",
		images: [
			{
				url: "https://avatars.githubusercontent.com/u/170134946?v=4",
				width: 800,
				height: 600,
				alt: "RaiderHCPlay's avatar",
			},
		],
		siteName: "RaiderHCPlay",
		locale: "en_US",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={"smooth-scroll"}>{children}</body>
		</html>
	);
}
