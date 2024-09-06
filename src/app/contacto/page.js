import ContactForm from "@/components/ContactForm";
import BusinessInfo from "@/components/BusinessInfo";
import { contactFormInfo } from "data/forms";

export default function Contacto() {
  return (
    <>
      <ContactForm formInfo={contactFormInfo} />
      <BusinessInfo />
    </>
  );
}
