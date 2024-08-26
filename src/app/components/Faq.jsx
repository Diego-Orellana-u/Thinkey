import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading2 from "./Heading2";

export default function Faq({ questions, sectionPadding, title }) {
  return (
    <div
      className={` ${
        sectionPadding ? sectionPadding : "py-20"
      } bg-main-100 text-white flex flex-col tablet-l:flex-row`}
    >
      <div className="wrapper text-left">
        <Heading2
          orientation="text-left"
          color="text-white"
          title={title}
          padding={"pb-5 tablet-l:pb-10"}
        />
      </div>
      <div className="flex wrapper py-5 tablet-l:py-0 desktop-s:py-10  relative h-full flex-col items-center w-full tablet-l:w-4/5">
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
