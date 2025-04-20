"use client";
import { Select } from "@/components/Select";
import { LOCALE } from "@/constants/types";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import "./LanguageSelectStyles.css";

export const LanguageSelect = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: event.target.value as LOCALE });
  };

  return (
    <div className="language-select-wrapper">
      <Select 
        value={params?.locale || "en"} 
        onChange={handleChange}
        className="language-select"
      >
        <option value={"lv"}>LV</option>
        <option value={"en"}>EN</option>
        <option value={"ru"}>RU</option>
      </Select>
    </div>
  );
};
