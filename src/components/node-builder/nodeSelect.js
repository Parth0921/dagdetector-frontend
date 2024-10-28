// Select Wrapper for nodes
// Takes options as array of strings

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export const NodeSelectWrapper = ({ label, value, options, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`px-2 my-2 rounded-lg p-1 flex justify-between items-center relative cursor-pointer border-2 dark:text-white ${
        isOpen ? "border-accent" : ""
      }`}
      onClick={toggleOpen}
    >
      <div>
        <label className="text-text_secondary">{label}</label>
        <div className="">
          <div className="flex justify-between cursor-pointer">
            <p> {value}</p>
          </div>
          {isOpen && (
            <div className="absolute left-0 top-full w-full text-center z-50 bg-white border-2 border-black/20 rounded-lg dark:bg-black dark:text-white dark:border-2 dark:border-white/30">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    handleChange(option);
                    toggleOpen();
                  }}
                  className="hover:bg-[#7D7D7D]/10 cursor-pointer py-1 dark:hover:bg-[#7D7D7D]/40"
                >
                  {" "}
                  {option}{" "}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <IoIosArrowDropdown />
    </div>
  );
};
