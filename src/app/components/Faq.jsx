import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading2 from "./Heading2";

export default function Faq({ questions }) {
  return (
    <div className="wrapper pb-10">
      <Heading2
        title={"Preguntas frecuentes"}
        padding={"pb-5 tablet-l:pb-10"}
      />

      <div className="shadow-lg flex p-5 rounded-[20px] desktop-s:py-20 bg-yellowish-white-bg relative h-full flex-col items-center">
        {questions &&
          questions.map((question) => (
            <Accordion
              key={question.key}
              type="single"
              collapsible
              className="w-full max-w-4xl"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </div>
    </div>
  );
}