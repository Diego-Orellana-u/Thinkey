import ContactForm from "@/components/ContactForm";
import BusinessInfo from "@/components/BusinessInfo";
import { contactFormInfo } from "data/forms";
import { businessInfo } from "data/businessInfo";

export const metadata = {
  title: "Contacta Con Nosotros",
  description: "",
};

export default function Contacto() {
  return (
    <>
      <ContactForm formInfo={contactFormInfo} />
      <BusinessInfo businessInfo={businessInfo} />
    </>
  );
}
