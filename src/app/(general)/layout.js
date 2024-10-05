import { Header } from "../components/Header";
import { generalSans } from "../fonts";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";
import { footerInfo } from "data/footer";

export const metadata = {
  title: "Thinkey | Experiencias y Eventos Científicos Para Niños",
  description: "",
};

export default function GeneralLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-[#fff] font-sans antialiased relative",
          generalSans.variable
        )}
      >
        <Header />
        {children}
        <Footer footerInfo={footerInfo} />
      </body>
    </html>
  );
}
