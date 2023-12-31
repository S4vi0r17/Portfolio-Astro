import { useState } from "react";

const LanguageButton = () => {
  const [language, setLanguage] = useState(false);

  const toggleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <div className="relative flex justify-center items-center h-full ">
      <button onClick={toggleLanguage} className="relative">
        <span className="sr-only">Language</span>
        x
      </button>

      {language && (
        <div className="absolute flex flex-col top-8 right-0 bg-[#141414] p-2 rounded-lg">
          <a
            href="/"
            onClick={toggleLanguage}
            className="py-2 px-4 bg-[#141414]"
          >
            en
          </a>
          <a
            href="/"
            onClick={toggleLanguage}
            className="py-2 px-4 bg-[#141414]"
          >
            es
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
