import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  return (
    <div>
      <h2 className=" text-4xl text-purple-700 font-semibold">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What kinds of questions can I ask?
          </AccordionTrigger>
          <AccordionContent>
            You can ask about anything related to your legal situation, such as
            questions about a specific process, documents or forms related to
            your legal matter, or about the meaning of specific terms or
            phrases. You can ask for advice, strategic coaching, or insight into
            possible outcomes. Advice sessions and document review services are
            also a good way to get a second opinion about your legal issue.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I keep my identity private while asking questions?
          </AccordionTrigger>
          <AccordionContent>
            Your query and lawyer responses will be published on our website,
            without your details. We do NOT publish your name or contact
            details. Lawyers who answer your query may contact you to discuss
            your query in detail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            When can I expect a reply to my question?
          </AccordionTrigger>
          <AccordionContent>
            Lawyers on LawRato have different and unique expertise. We work to
            serve your question to the right lawyer for a quick and useful
            response. You can expect to get a response in 24 working hours after
            posting your question. Lawyers on LawRato are active and are
            passionate about helping you solve your legal problems, meaning you
            won’t have to wait very long to get answers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How can I find if my question was answered?
          </AccordionTrigger>
          <AccordionContent>
            We will notify you by Email and SMS whenever your question receives
            an answer. If at any time you wish to see the question you have
            posted, you can view My Questions tab in your account.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
