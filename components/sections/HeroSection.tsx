import DrawingLine from "@/components/svg/DrawingLine";
import HeaderImage from "@/components/svg/HeaderImage";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations();

  return (
    <>
      {/* Sección del subtítulo con icono */}
      <section>
        <div className="flex w-full justify-center items-center gap-2 pt-8 sm:pt-14">
          <img src="/images/icon.png" alt="Icono" width={20} height={20} />
          <h2
            className="text-primary font-light sm:text-sm md:text-lg"
            style={{
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            {t("trendyPlatform")}
          </h2>
        </div>

        {/* Título principal */}
        <h1
          className="mt-12 text-dark-grey-900 font-light text-center relative text-4xl mb-20 2xl:mb-0 sm:text-5xl md:text-6xl lg:text-[70px]"
          style={{
            fontFamily: "Playwrite US Modern",
            lineHeight: "1.2",
          }}
        >
          {t("betterWay")}{" "}
          <span className="text-primary inline-block relative">
            {t("productive")}
            <span className="absolute left-20 top-full">
              <DrawingLine width={194} height={30} />
            </span>
          </span>{" "}
          {t("withAI")}
        </h1>

        {/* Imagen de encabezado */}
        <div className="flex w-full justify-center mt-10">
          {/* Mostrar solo en móviles */}
          <div className="block 2xl:hidden">
            <Image
              src="/images/heroImage.png"
              width={1400} // Ancho ajustado para pantallas menores a 1650px
              height={1147}
              alt="Hero"
            />
          </div>

          {/* Mostrar solo en pantallas más grandes */}
          <div className="hidden 2xl:block">
            <HeaderImage width={1736} height={1147} />
          </div>
        </div>
      </section>
    </>
  );
};
