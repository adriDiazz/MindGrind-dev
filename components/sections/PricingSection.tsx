import CheckIcon from "@/components/svg/CkeckIcon";
import { FreeTierIcon } from "@/components/svg/FreeTierIcon";
import { MindgrindTierIcon } from "@/components/svg/MindgrindTierIcon";
import { ProTierIcon } from "@/components/svg/ProTierIcon";
import { useTranslations } from "next-intl";

interface PricingCardProps {
  icon: React.ComponentType;
  planType: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  bgColor: string;
  textColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  icon: Icon,
  planType,
  price,
  description,
  features,
  buttonLabel,
  bgColor,
  textColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const t = useTranslations();
  return (
    <div
      className={`p-8 sm:p-10 lg:p-12 flex flex-col items-start justify-center lg:rounded-lg shadow-lg w-full lg:w-1/3 ${bgColor}`}
    >
      <div className="flex items-center gap-3">
        <Icon />
        <div>
          <span className={`${textColor}`}>For individuals</span>
          <h2 className={`${textColor} text-xl font-extrabold`}>{planType}</h2>
        </div>
      </div>

      <p className={`${textColor} mt-4 sm:mt-5`}>{description}</p>

      <h2 className={`${textColor} text-4xl sm:text-5xl mt-4 mb-4 sm:mb-5`}>
        {price}
      </h2>
      <span className={`${textColor} font-extrabold`}>
        {t("Pricing.free.incluido")}
      </span>

      <div className="mt-4 flex-col gap-2">
        {features.map((feature, idx) => (
          <div className="flex items-center justify-start gap-2 mt-2" key={idx}>
            <CheckIcon type={textColor === "text-white" ? "white" : "purple"} />
            <span className={`${textColor}`}>{feature}</span>
          </div>
        ))}
      </div>

      <div className="w-full">
        <button
          className={`${buttonBgColor} ${buttonTextColor} font-bold text-lg mt-8 sm:mt-10 p-3 rounded-lg w-full hover:bg-purple-blue-100`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  const t = useTranslations();
  const freeFeatures = [
    `${t("Pricing.free.funcion1")}`,
    `${t("Pricing.free.funcion2")}`,
    `${t("Pricing.free.funcion3")}`,
    `${t("Pricing.free.funcion4")}`,
    `${t("Pricing.free.funcion5")}`,
  ];

  const proFeatures = [
    `${t("Pricing.pro.funcion1")}`,
    `${t("Pricing.pro.funcion2")}`,
    `${t("Pricing.pro.funcion3")}`,
    `${t("Pricing.pro.funcion4")}`,
    `${t("Pricing.pro.funcion5")}`,
  ];

  const mindGrindFeatures = [
    `${t("Pricing.mindgrind.funcion1")}`,
    `${t("Pricing.mindgrind.funcion2")}`,
    `${t("Pricing.mindgrind.funcion3")}`,
    `${t("Pricing.mindgrind.funcion4")}`,
    `${t("Pricing.mindgrind.funcion5")}`,
  ];
  return (
    <section className="xl:mt-32 p-5 md:p-10 md:mt-32 xl:p-10" id="pricing">
      <div className="text-center">
        <h3
          className="text-randomgrey font-extralight xl:mb-32 mb-10 text-[30px] xl:text-[60px]"
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          Pricing
        </h3>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 relative">
        {/* Free Tier Card */}
        <PricingCard
          icon={FreeTierIcon}
          planType={t("Pricing.free.tier")}
          price={t("Pricing.free.price")}
          description={t("Pricing.free.description")}
          features={freeFeatures}
          buttonLabel="Get started"
          bgColor="bg-white"
          textColor="text-[#6F6C90]"
          buttonBgColor="bg-[#7756F9]"
          buttonTextColor="text-white"
        />

        {/* Pro Tier Card - elevated */}
        <PricingCard
          icon={ProTierIcon}
          planType={t("Pricing.pro.tier")}
          price={t("Pricing.pro.price")}
          description={t("Pricing.pro.description")}
          features={proFeatures}
          buttonLabel="Get started"
          bgColor="bg-[#7756F9]"
          textColor="text-white"
          buttonBgColor="bg-white"
          buttonTextColor="text-[#7756F9]"
        />

        {/* Mindgrind Tier Card */}
        <PricingCard
          icon={MindgrindTierIcon}
          planType={t("Pricing.mindgrind.tier")}
          price={t("Pricing.mindgrind.price")}
          description={t("Pricing.mindgrind.description")}
          features={mindGrindFeatures}
          buttonLabel="Get started"
          bgColor="bg-white"
          textColor="text-[#6F6C90]"
          buttonBgColor="bg-[#7756F9]"
          buttonTextColor="text-white"
        />
      </div>
    </section>
  );
};
