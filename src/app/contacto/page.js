import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { contactFormInfo } from "data/forms";

export default function Contacto() {
  return (
    <>
      <ContactForm formInfo={contactFormInfo} />
      <Map />
    </>
  );
}
