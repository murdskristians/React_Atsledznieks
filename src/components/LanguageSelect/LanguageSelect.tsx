"use client";
import { LOCALE } from "@/constants/types";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import "./LanguageSelectStyles.css";
import { useState, useRef, useEffect } from "react";

export const LanguageSelect = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const defaultLocale = typeof params?.locale === 'string' 
    ? params.locale 
    : Array.isArray(params?.locale) 
      ? params.locale[0] 
      : "en";
  
  const [selectedLocale, setSelectedLocale] = useState<string>(defaultLocale);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (locale: LOCALE) => {
    setSelectedLocale(locale);
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-language-select" ref={dropdownRef}>
      <button 
        className="language-select-button" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {selectedLocale.toUpperCase()}
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {["lv", "en", "ru"].map((locale) => (
            <button
              key={locale}
              className={`language-option ${selectedLocale === locale ? 'active' : ''}`}
              onClick={() => handleLocaleChange(locale as LOCALE)}
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
