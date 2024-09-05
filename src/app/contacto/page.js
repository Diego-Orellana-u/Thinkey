import ContactForm from "@/components/ContactForm";
import { contactFormInfo } from "data/forms";

export default function Contacto() {
  return (
    <>
      <ContactForm formInfo={contactFormInfo} />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.575721324211!2d-70.62685692451103!3d-33.43430417339598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5871b78d8a9%3A0x30fdf16143723872!2sAlmte.%20Zegers%20672%2C%207500714%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1725507783771!5m2!1sen!2scl"
        width="600"
        height="450"
        className="border-0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </>
  );
}
