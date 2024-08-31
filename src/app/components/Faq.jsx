import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading2 from "./Heading2";

export default function Faq({ questions, sectionPadding, title, desc }) {
  return (
    <section
      className={` ${
        sectionPadding ? sectionPadding : "py-20"
      } bg-main-200 text-white flex flex-col tablet-l:flex-row`}
    >
      <div className="wrapper text-left tablet-l:w-3/4">
        <Heading2
          orientation="text-left"
          color="text-white"
          title={title}
          padding={"pb-5 tablet-l:pb-10"}
        />
        <p className="">{desc}</p>
      </div>
      <div className="flex wrapper py-5 tablet-l:py-0 tablet-l:pl-0 desktop-s:py-10 relative h-full flex-col items-center w-full">
        {questions &&
          questions.map((question, index) => (
            <Accordion
              key={question.key}
              type="single"
              collapsible
              className="w-full max-w-4xl"
            >
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
      </div>
    </section>
  );
}
