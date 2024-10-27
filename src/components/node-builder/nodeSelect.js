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
      className={`px-2 rounded-lg p-1 relative ${
        isOpen ? "border border-[#36C2CE]" : "border"
      }`}
    >
      <label className="text-[#7D7D7D]">{label}</label>
      <div className="">
        <div
          onClick={toggleOpen}
          className="flex justify-between cursor-pointer"
        >
          <p> Select Option</p>
          <IoIosArrowDropdown />
        </div>
        {isOpen && (
          <div className="absolute left-0 top-full translate-y-[2px] w-full text-center z-50 bg-white border-2 rounded-lg">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleChange(option)}
                className="hover:bg-[#7D7D7D]/10 cursor-pointer py-1"
              >
                {" "}
                {option}{" "}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // not using select
  // return (
  //     <div>
  //         <label>
  //             {label}
  //             <select value={value} onChange={handleChange}>
  //                 { options.map(option => (
  //                 <option key={option} value={option}>{option}</option>
  //                 ))}
  //             </select>
  //         </label>
  //     </div>
  // )
};
