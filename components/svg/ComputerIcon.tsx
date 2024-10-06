import React from "react";

interface SVGIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const ComputerIcon: React.FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00018 16H4.00018C2.34333 16 1.00018 14.6569 1.00018 13V4C1.00018 2.34315 2.34333 1 4.00018 1H16.0002C17.6571 1 19.0002 2.34315 19.0002 4V13C19.0002 14.6569 17.6571 16 16.0002 16H12.0002M8.00018 16V19M8.00018 16H12.0002M12.0002 16V19M8.00018 19H12.0002M8.00018 19H7.00018M12.0002 19H13.0002"
        stroke="#252432"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ComputerIcon;
