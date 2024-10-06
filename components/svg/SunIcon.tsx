import React from "react";

interface SVGIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const StarIcon: React.FC<SVGIconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.24438 1.86962C9.00238 0.479739 10.9981 0.479739 11.7561 1.86962L12.9725 4.09999C13.2601 4.62744 13.7696 4.99764 14.3602 5.10823L16.8573 5.57585C18.4134 5.86725 19.0301 7.76533 17.9424 8.91573L16.1971 10.7617C15.7844 11.1983 15.5897 11.7973 15.667 12.3931L15.994 14.9125C16.1977 16.4824 14.5831 17.6555 13.1529 16.9766L10.8579 15.8871C10.3151 15.6295 9.68528 15.6295 9.14258 15.8871L6.8475 16.9766C5.41731 17.6555 3.80275 16.4824 4.00647 14.9125L4.33338 12.3931C4.41069 11.7973 4.21606 11.1983 3.80331 10.7617L2.05799 8.91573C0.970371 7.76533 1.58707 5.86725 3.14317 5.57585L5.64025 5.10823C6.23078 4.99764 6.74032 4.62744 7.02797 4.09999L8.24438 1.86962Z"
        stroke="#252432"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
