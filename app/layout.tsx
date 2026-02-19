import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-sans"
});

const jetMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-mono"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={`${spaceGrotesk.variable} ${jetMono.variable}`}>
        <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        </body>
        </html>
    );
}