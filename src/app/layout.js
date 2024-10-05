import "./globals.css";
import { generalSans } from "./fonts";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-[#fff] font-sans antialiased relative",
          generalSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
