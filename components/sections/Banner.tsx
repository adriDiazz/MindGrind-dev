import { useTranslations } from "next-intl";
import styles from "./CTABanner.module.css";

export const Banner = () => {
  const t = useTranslations();

  return (
    <div className="md:mt-40 flex items-center justify-center max-w-7xl mx-auto p-5 md:p-5">
      <div className={styles.container}>
        <span className={`${styles.circulo} ${styles.circulo1}`}></span>
        <span className={`${styles.circulo} ${styles.circulo25}`}></span>
        <span className={`${styles.circulo} ${styles.circulo2}`}></span>
        <span className={`${styles.circulo} ${styles.circulo3}`}></span>

        {/* <!-- Contenedor para el texto --> */}
        <div className={styles.texto}>
          <h1 className="md:text-[50px]">{t("Banner.title")}</h1>
          <div className="flex-col items-center justify-center">
            <p
              className="hidden md:block"
              style={{
                marginLeft: "3rem",
              }}
            >
              {t("Banner.description")}{" "}
            </p>
            <div className="w-72 md:w-full flex justify-center">
              <button className="bg-white text-[#7756F9] font-bold text-lg w-1/2 h-1/2 p-1 m-0 rounded-lg md:p-3 md:mt-8 mt-2 hover:bg-purple-blue-100 ">
                {t("Banner.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
