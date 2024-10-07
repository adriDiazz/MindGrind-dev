import BagIcon from "@/components/svg/BagIcon";
import ComputerIcon from "@/components/svg/ComputerIcon";
import ConsoleIcon from "@/components/svg/ConsoleIcon";
import IaImagePurple from "@/components/svg/IaImagePurple";
import IaRedIcon from "@/components/svg/IaRedIcon";
import MindGrindIcon from "@/components/svg/MindGrindIcon";
import SunIcon from "@/components/svg/StarIcon";
import StarIcon from "@/components/svg/SunIcon";
import { useTranslations } from "next-intl";

export const WhatWeDoSection = () => {
  const t = useTranslations();

  return (
    <section className="xl:mt-[-103px]" id="features">
      <div className="text-center">
        <h3
          className="text-randomgrey font-extralight mb-10 text-[30px] mt-10  md:text-[35px] xl:mb-32 xl:mt-0 xl:text-[60px] "
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          {t("whatWeDo.title")}
        </h3>
      </div>

      {/* Grid para las cards */}
      <div className="hidden xl:block">
        <div
          className="parent max-w-7xl mx-auto hidden md:block"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gridColumnGap: "20px",
            gridRowGap: "20px",
          }}
        >
          <div
            className="div1 bg-white p-6 rounded-lg shadow-lg"
            style={{
              gridArea: "1 / 1 / 2 / 2",
            }}
          >
            <div className="mb-4">
              <SunIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description2.title")}
            </h4>
            <p className="text-[#8987A1] font-extralight">
              {t("whatWeDo.description2.content")}
            </p>
          </div>
          <div
            className="div2 bg-white p-6 rounded-lg shadow-lg"
            style={{
              gridArea: "1 / 2 / 2 / 3",
            }}
          >
            <div className="mb-4">
              <StarIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description5.title")}
            </h4>
            <p className="text-[#8987A1]">
              {t("whatWeDo.description5.content")}
            </p>
          </div>
          <div
            className="div3 bg-white p-6 rounded-lg shadow-lg flex"
            style={{
              gridArea: " 2 / 1 / 3 / 3",
            }}
          >
            <div className="">
              <div className="mb-4">
                <MindGrindIcon />
              </div>
              <h4 className="font-bold text-lg mb-2 text-randomgrey">
                {t("whatWeDo.description1.title")}
              </h4>
              <p className="text-[#8987A1]">
                {t("whatWeDo.description1.content")}
              </p>
            </div>

            <div className="">
              <IaImagePurple />
            </div>
          </div>
          <div
            className="div4 bg-white p-6 rounded-lg shadow-lg"
            style={{
              gridArea: "1 / 3 / 2 / 4",
            }}
          >
            <div className="mb-4">
              <ComputerIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description6.title")}
            </h4>
            <p className="text-[#8987A1]">
              {t("whatWeDo.description6.content")}
            </p>
          </div>
          <div
            className="div5 bg-white p-6 rounded-lg shadow-lg"
            style={{
              gridArea: "2 / 3 / 3 / 4",
            }}
          >
            <div className="mb-4">
              <ConsoleIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description3.title")}
            </h4>
            <p className="text-[#8987A1]">
              {t("whatWeDo.description3.content")}
            </p>
          </div>
          <div
            className="div6 bg-white p-6 rounded-lg shadow-lg flex-col justify-between items-center"
            style={{
              gridArea: "1 / 4 / 3 / 5",
            }}
          >
            <div className="">
              <div className="mb-4">
                <BagIcon />
              </div>
              <h4 className="font-bold text-lg mb-2 text-randomgrey">
                {t("whatWeDo.description4.title")}
              </h4>
              <p className="text-[#8987A1]">
                {t("whatWeDo.description4.content")}.
              </p>
            </div>

            <div className="div mt-10">
              <IaRedIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="block xl:hidden">
        <div className="max-w-4xlxl p-5 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <SunIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description2.title")}
            </h4>
            <p className="text-[#8987A1] font-extralight">
              {t("whatWeDo.description2.content")}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <StarIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              W{t("whatWeDo.description5.title")}
            </h4>
            <p className="text-[#8987A1]">
              {t("whatWeDo.description5.content")}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center">
            <div className="">
              <div className="mb-4">
                <MindGrindIcon />
              </div>
              <h4 className="font-bold text-lg mb-2 text-randomgrey">
                {t("whatWeDo.description1.title")}
              </h4>
              <p className="text-[#8987A1]">
                {t("whatWeDo.description1.content")}
              </p>
            </div>

            <div className="mt-10">
              <img src="/images/Imagen 48.svg" alt="" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <ComputerIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description6.title")}
            </h4>
            <p className="text-[#8987A1]">
              {t("whatWeDo.description6.content")}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <ConsoleIcon />
            </div>
            <h4 className="font-bold text-lg mb-2 text-randomgrey">
              {t("whatWeDo.description3.title")}
            </h4>
            <p className="text-[#8987A1]">
              {t("whatWeDo.description3.content")}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center">
            <div className="">
              <div className="mb-4">
                <BagIcon />
              </div>
              <h4 className="font-bold text-lg mb-2 text-randomgrey">
                {t("whatWeDo.description4.title")}
              </h4>
              <p className="text-[#8987A1]">
                {t("whatWeDo.description4.content")}
              </p>
            </div>

            <div className="mt-10">
              <img src="/images/Imagen 34.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
