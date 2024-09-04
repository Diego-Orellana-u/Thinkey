import ContactForm from "@/components/ContactForm";
import { colegiosFormInfo } from "data/forms";

export default function Contacto() {
  return (
    <>
      <ContactForm formInfo={colegiosFormInfo} />
    </>
  );
}
