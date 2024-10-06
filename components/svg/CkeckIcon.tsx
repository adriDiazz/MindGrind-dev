import React from "react";

enum buttonType {
  PURPLE = "purple",
  WHITE = "white",
}

interface SVGIconProps {
  type?: string;
}

const CheckIcon: React.FC<SVGIconProps> = ({ type = buttonType.PURPLE }) => {
  return (
    <>
      {type === buttonType.PURPLE ? (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0002 26C20.1801 26 26.0002 20.1799 26.0002 13C26.0002 5.8201 20.1801 0 13.0002 0C5.82034 0 0.000244141 5.8201 0.000244141 13C0.000244141 20.1799 5.82034 26 13.0002 26Z"
            fill="#4318FF"
          />
          <path
            d="M7.11719 13.8406L10.479 17.2024L18.8835 8.79785"
            fill="#4318FF"
          />
          <path
            d="M7.11719 13.8406L10.479 17.2024L18.8835 8.79785"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0002 26C20.1801 26 26.0002 20.1799 26.0002 13C26.0002 5.8201 20.1801 0 13.0002 0C5.82034 0 0.000244141 5.8201 0.000244141 13C0.000244141 20.1799 5.82034 26 13.0002 26Z"
            fill="white"
          />
          <path
            d="M7.11719 13.8406L10.479 17.2024L18.8835 8.79785"
            fill="white"
          />
          <path
            d="M7.11719 13.8406L10.479 17.2024L18.8835 8.79785"
            stroke="#4318FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default CheckIcon;
