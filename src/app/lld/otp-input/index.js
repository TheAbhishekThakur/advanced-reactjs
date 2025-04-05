"use client";
import { useEffect, useRef, useState } from "react";
import "./style.css";

const OTP_DIGITS_COUNT = 6;

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const inputRefArr = useRef([]);

  useEffect(() => {
    inputRefArr?.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }

    const newValue = value.trim();
    const newInputArr = [...inputArr];
    newInputArr[index] = newValue.slice(-1);

    setInputArr(newInputArr);

    newValue && inputRefArr?.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      inputRefArr?.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Validate OTP</h1>
      <div className="flex justify-center items-center gap-2">
        {inputArr.map((input, index) => (
          <input
            className="w-10 bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            key={index}
            type="text"
            ref={(inputValue) => (inputRefArr.current[index] = inputValue)}
            value={inputArr[index]}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
