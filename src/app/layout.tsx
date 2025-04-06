import type { Metadata } from "next";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "RaiderHCPlay",
  icons: "https://avatars.githubusercontent.com/u/170134946?v=4",
  description: "RaiderHCPlay's personal website",
  keywords: ["RaiderHCPlay", "github", "githubio", "portfolio", "dev"],
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
