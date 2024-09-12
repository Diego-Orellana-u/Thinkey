import ServicesForm from "../components/services/ServicesForm";

export default function Popup({ formInfo }) {
  return (
    <ServicesForm formFields={formInfo.formFields} btnText={formInfo.btnText} />
  );
}
