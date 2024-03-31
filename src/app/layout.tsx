import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import ReduxProvider from "@/redux/ReduxProvider";
import { MovieProvider } from "@/components/MovieContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MovieProvider>
                    <ReduxProvider>
                        <TopMenu />
                        {children}
                    </ReduxProvider>
                </MovieProvider>
            </body>
        </html>
    );
}
