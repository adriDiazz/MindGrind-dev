import { memo, SVGProps } from "react";

const SvgBanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1146 464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={670.326}
      cy={231.846}
      rx={231.846}
      ry={230.36}
      transform="rotate(90 670.326 231.846)"
      fill="url(#paint0_linear_301_308)"
    />
    <ellipse
      cx={914.934}
      cy={231.846}
      rx={231.846}
      ry={230.36}
      transform="rotate(90 914.934 231.846)"
      fill="url(#paint1_linear_301_308)"
      fillOpacity={0.37}
    />
    <ellipse
      cx={450.575}
      cy={231.846}
      rx={231.846}
      ry={230.36}
      transform="rotate(90 450.575 231.846)"
      fill="url(#paint2_linear_301_308)"
    />
    <ellipse
      cx={230.823}
      cy={231.846}
      rx={231.846}
      ry={230.36}
      transform="rotate(90 230.823 231.846)"
      fill="url(#paint3_linear_301_308)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_301_308"
        x1={672.487}
        y1={42.0245}
        x2={693.822}
        y2={490.795}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7756F9" />
        <stop offset={1} stopColor="#B9C6F6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_301_308"
        x1={917.095}
        y1={42.0245}
        x2={938.43}
        y2={490.795}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7756F9" />
        <stop offset={1} stopColor="#B9C6F6" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_301_308"
        x1={452.736}
        y1={42.0245}
        x2={474.071}
        y2={490.795}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7756F9" />
        <stop offset={1} stopColor="#B9C6F6" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_301_308"
        x1={232.984}
        y1={42.0245}
        x2={254.319}
        y2={490.795}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7756F9" />
        <stop offset={1} stopColor="#B9C6F6" />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(SvgBanner);
export { Memo as SvgBanner };
