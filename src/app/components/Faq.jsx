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
      <div className="relative faq-shadow ">
        <span
          class={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-accent-800/80 rounded-lg`}
        ></span>
        <div className="flex p-5 desktop-s:py-20 bg-yellowish-white-bg relative h-full border-2 border-accent-800/80 flex-col items-center">
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
    </div>
  );
}
