import React from "react";

interface SVGIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const MindGrindIcon: React.FC<SVGIconProps> = ({
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
      <mask
        id="mask0_236_576"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <circle cx="12.0002" cy="12" r="12" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_236_576)">
        <circle
          cx="6.29137"
          cy="-2.1311"
          r="9.9559"
          transform="rotate(-22 6.29137 -2.1311)"
          fill="#4318FF"
        />
        <path
          d="M26.9411 22.4011C29.0009 27.4992 26.5379 33.3019 21.4397 35.3616C16.3416 37.4214 10.539 34.9583 8.47924 29.8602C6.41947 24.7621 8.88253 18.9595 13.9806 16.8997C19.0788 14.84 24.8814 17.303 26.9411 22.4011Z"
          fill="#4A3AFF"
        />
        <circle
          cx="-2.13014"
          cy="17.7092"
          r="9.9559"
          transform="rotate(-22 -2.13014 17.7092)"
          fill="#9328FF"
        />
        <circle
          cx="25.8698"
          cy="5.64343"
          r="9.9559"
          transform="rotate(-22 25.8698 5.64343)"
          fill="#9328FF"
        />
      </g>
    </svg>
  );
};

export default MindGrindIcon;
