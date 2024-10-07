"use client";
import { useState } from "react";
import AddIcon from "@/components/svg/AddIcon";
import { useTranslations } from "next-intl";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center p-4">
        <h4
          className="text-randomgrey font-semibold sm:text-lg md:text-lg xl:text-lg"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          {question}
        </h4>
        <button onClick={onToggle}>
          <AddIcon />
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 p-4">
          <p className="text-randomgrey sm:text-md md:text-md xl:text-md">
            {answer}
          </p>
        </div>
      )}
      <div className="w-full h-[1px] bg-black opacity-[30%]"></div>
    </div>
  );
};

interface FAQProps {}

interface FAQData {
  question: string;
  answer: string;
}

export const FAQ: React.FC<FAQProps> = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const t = useTranslations();

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs: FAQData[] = [
    {
      question: `${t("FAQ.questions.howInfo")}`,
      answer: `${t("FAQ.answers.howInfo")}`,
    },
    {
      question: `${t("FAQ.questions.howHelp")}`,
      answer: `${t("FAQ.answers.howHelp")}`,
    },
    {
      question: `${t("FAQ.questions.whenReady")}`,
      answer: `${t("FAQ.answers.whenReady")}`,
    },
  ];

  return (
    <section
      className="md:mt-40 flex items-center justify-center max-w-7xl mx-auto"
      id="company"
    >
      <div className="w-full">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openQuestionIndex === index}
            onToggle={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </section>
  );
};
