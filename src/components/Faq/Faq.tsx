import { useTranslations } from "@/hooks/useTranslations";
import clsx from "clsx";

export const Faq = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="px-6 max-w-screen-xl py-6 flex gap-16 flex-col md:flex-row">
      <h2 className="text-5xl font-mono font-light">FAQ</h2>
      <ul>
        <li>
          <h3 className="text-3xl font-mono font-light">{t("faq1")}</h3>
          <p>{t("faq1Text")}</p>
        </li>
      </ul>
    </section>
  );
};
