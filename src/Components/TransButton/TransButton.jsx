import { useLanguage } from "../../hooks/useLanguage";
import { useState, useRef, useEffect } from "react";

const TransButton = () => {
  const { language, changeLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "EN", label: "English" },
    { code: "AR", label: "Arabic" },
  ];

  const handleLanguageChange = (code) => {
    if (code !== language) {
      changeLanguage(code);
    }
    setIsDropdownOpen(false);
  };

  const isArabic = language.toLowerCase().startsWith("ar");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="position-relative" ref={dropdownRef}>
      <button
        className="btn btn-light d-flex align-items-center gap-2 border-0"
        onClick={() => setIsDropdownOpen((open) => !open)}
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          padding: "8px 12px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.4853 3.51469C18.2188 1.24823 15.2053 0 12 0C8.79469 0 5.78123 1.24823 3.51469 3.51469C1.24823 5.78123 0 8.79469 0 12C0 15.2053 1.24823 18.2188 3.51469 20.4853C5.78123 22.7518 8.79469 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79469 22.7518 5.78123 20.4853 3.51469ZM7.51837 2.40239C7.12842 3.05161 6.77883 3.81633 6.47705 4.68637C6.31556 5.15189 6.17198 5.63906 6.04458 6.14278C5.20055 5.9647 4.39589 5.74842 3.64364 5.49609C4.66809 4.1828 5.99489 3.11667 7.51837 2.40239ZM2.82881 6.70237C3.73373 7.02591 4.71417 7.29825 5.74772 7.51645C5.53102 8.71205 5.40347 9.98306 5.36986 11.2969H1.43016C1.5398 9.63183 2.03536 8.07061 2.82881 6.70237ZM2.82609 17.2931C2.03423 15.926 1.5397 14.3663 1.43016 12.7031H5.36986C5.40342 14.0158 5.53078 15.2858 5.74711 16.4805C4.71295 16.6982 3.73177 16.9701 2.82609 17.2931ZM3.6405 18.4998C4.39355 18.2478 5.199 18.0319 6.04378 17.8542C6.17133 18.3591 6.31523 18.8473 6.47705 19.3137C6.77883 20.1837 7.12842 20.9484 7.51837 21.5976C5.99334 20.8826 4.66542 19.815 3.6405 18.4998ZM11.2969 22.5698C10.9012 22.5438 10.5113 22.4967 10.1286 22.4282C9.09802 21.7926 8.06878 20.092 7.42566 17.603C8.66522 17.4117 9.96792 17.2983 11.2969 17.2688V22.5698ZM11.2969 15.8622C9.86695 15.8926 8.46262 16.0166 7.12589 16.2271C6.93342 15.1584 6.8092 13.9784 6.77555 12.7031H11.2969V15.8622ZM11.2969 11.2969H6.77555C6.8092 10.0207 6.93356 8.83988 7.12627 7.77052C8.46262 7.98173 9.86677 8.10633 11.2969 8.13745V11.2969ZM11.2969 6.73078C9.96783 6.70073 8.66536 6.58678 7.42622 6.39483C8.06939 3.90703 9.09834 2.20716 10.1287 1.57177C10.5113 1.50328 10.9013 1.45622 11.2969 1.43016V6.73078ZM21.1739 6.70687C21.9658 8.07408 22.4603 9.6337 22.5698 11.2969H18.6301C18.5966 9.98419 18.4692 8.7142 18.2528 7.5195C19.287 7.30177 20.2682 7.02994 21.1739 6.70687ZM20.3595 5.50017C19.6064 5.75217 18.801 5.96812 17.9562 6.14578C17.8286 5.64098 17.6847 5.15283 17.523 4.68637C17.2212 3.81633 16.8716 3.05161 16.4816 2.40239C18.0067 3.11737 19.3346 4.185 20.3595 5.50017ZM12.7031 1.43016C13.0987 1.45622 13.4887 1.50328 13.8713 1.57177C14.9019 2.20734 15.9312 3.90802 16.5743 6.39703C15.3348 6.58833 14.0321 6.70172 12.7031 6.73116V1.43016ZM12.7031 8.13783C14.133 8.10736 15.5374 7.98342 16.8741 7.77286C17.0666 8.84161 17.1908 10.0216 17.2245 11.2969H12.7031V8.13783ZM12.7031 12.7031H17.2245C17.1908 13.9793 17.0664 15.1601 16.8737 16.2295C15.5374 16.0183 14.1333 15.8937 12.7031 15.8625V12.7031ZM13.8714 22.4282C13.4887 22.4967 13.0988 22.5438 12.7031 22.5698V17.2692C14.0322 17.2993 15.3347 17.4132 16.5738 17.6052C15.9306 20.093 14.9017 21.7928 13.8714 22.4282ZM16.4816 21.5976C16.8716 20.9484 17.2212 20.1838 17.523 19.3137C17.6844 18.8482 17.8281 18.361 17.9555 17.8572C18.7995 18.0352 19.6042 18.2516 20.3564 18.5039C19.3319 19.8172 18.0051 20.8833 16.4816 21.5976ZM21.1712 17.2976C20.2663 16.9741 19.2858 16.7017 18.2523 16.4835C18.469 15.288 18.5965 14.0169 18.6301 12.7031H22.5698C22.4602 14.3682 21.9646 15.9294 21.1712 17.2976Z"
            fill="#2E344D"
          />
        </svg>
        <span className="small fw-medium">{language}</span>
      </button>

      {isDropdownOpen && (
        <div
          className={`position-absolute ${
            isArabic ? "start-0" : "end-0"
          } shadow-lg rounded bg-white border`}
          style={{
            padding: "1rem",
            marginTop: "0.5rem",
            minWidth: "200px",
            zIndex: 1050,
          }}
        >
          {languages.map(({ code, label }) => (
            <button
              key={code}
              className={`btn w-100 text-start d-flex align-items-center gap-2 ${
                code === language ? "btn-light" : "btn-outline-light"
              }`}
              onClick={() => handleLanguageChange(code)}
              disabled={code === language}
              style={{
                padding: "0.5rem",
                marginBottom: "0.25rem",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransButton;
