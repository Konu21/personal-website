import React from "react";
import { useLanguage } from "./LanguageContext"; // Adjust the path based on where your context is located

const LanguageTest = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div>
      <h2>Current Language: {lang}</h2>
      <button onClick={() => setLang(lang === "EN" ? "RO" : "EN")}>
        Switch Language
      </button>
      <div>
        <h3>Translation Example:</h3>
        <p>{t?.welcomeMessage || "Translation not available"}</p>{" "}
        {/* Assuming "welcomeMessage" exists in your translations */}
      </div>
    </div>
  );
};
export default LanguageTest;
