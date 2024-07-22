import "./globals.css";
import { Header } from "./components/Header";
import InfoBar from "./components/InfoBar";
import { generalSans } from "./fonts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          generalSans.variable
        )}
      >
        <InfoBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
