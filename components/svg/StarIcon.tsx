import React from "react";

interface SVGIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const SunIcon: React.FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00018 1V2M8.00018 16V17M1.07196 5L1.93798 5.5M14.0624 12.5L14.9284 13M14.9284 4.99999L14.0624 5.49999M1.93799 12.5L1.07196 13M12.0002 9C12.0002 6.79086 10.2093 5 8.00018 5C5.79102 5 4.00016 6.79086 4.00016 9C4.00016 11.2091 5.79102 13 8.00018 13C10.2093 13 12.0002 11.2091 12.0002 9Z"
        stroke="#252432"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SunIcon;
