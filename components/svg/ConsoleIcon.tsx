import React from "react";

interface SVGIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const ConsoleIcon: React.FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00018 9L9.53372 10.5201C10.7289 11.2372 10.8425 12.9262 9.75412 13.7968L7.00018 16M12.0002 16H17.0002M6.00018 21H18.0002C19.6571 21 21.0002 19.6569 21.0002 18V6C21.0002 4.34315 19.6571 3 18.0002 3H6.00018C4.34333 3 3.00018 4.34315 3.00018 6V18C3.00018 19.6569 4.34333 21 6.00018 21Z"
        stroke="#252432"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ConsoleIcon;
