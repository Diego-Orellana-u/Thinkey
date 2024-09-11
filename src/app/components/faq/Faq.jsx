import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading2 from "../Heading2";

export default function Faq({ faqInfo }) {
  return (
    <section
      className={` ${
        faqInfo.sectionPadding ? faqInfo.sectionPadding : "py-20"
      } ${faqInfo.bgColor ? faqInfo.bgColor : "bg-main-200"} ${
        faqInfo.textColor ? faqInfo.textColor : "text-white"
      } ${
        faqInfo.sectionMargin && faqInfo.sectionMargin
      } flex flex-col tablet-l:flex-row`}
    >
      <div className="wrapper text-left tablet-l:w-3/4">
        <Heading2
          orientation="text-left"
          color={faqInfo.titleColor ? faqInfo.titleColor : "text-white"}
          title={faqInfo.title}
          padding={"pb-5 tablet-l:pb-10"}
        />
        <p className="">{faqInfo.desc}</p>
      </div>
      <div className="flex wrapper py-5 tablet-l:py-0 tablet-l:pl-0 desktop-s:py-10 relative h-full flex-col items-center w-full">
        {faqInfo.questions &&
          faqInfo.questions.map((question, index) => (
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
