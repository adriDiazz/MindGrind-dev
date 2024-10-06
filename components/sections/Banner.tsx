import { useTranslations } from "next-intl";
import styles from "./CTABanner.module.css";

export const Banner = () => {
  const t = useTranslations();

  return (
    <div className="mt-40 flex items-center justify-center max-w-7xl mx-auto p-5 md:p-0">
      <div className={styles.container}>
        <span className={`${styles.circulo} ${styles.circulo1}`}></span>
        <span className={`${styles.circulo} ${styles.circulo25}`}></span>
        <span className={`${styles.circulo} ${styles.circulo2}`}></span>
        <span className={`${styles.circulo} ${styles.circulo3}`}></span>

        {/* <!-- Contenedor para el texto --> */}
        <div className={styles.texto}>
          <h1>{t("Banner.title")}</h1>
          <div className="flex-col items-center justify-center">
            <p className="hidden md:block">{t("Banner.description")} </p>
            <div className="w-full flex justify-center">
              <button className="bg-white text-[#7756F9] font-bold text-lg w-1/2 h-1/2 p-0 m-0 sm:rounded-lg w-[50%] md:p-3 mt-8">
                {t("Banner.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
