import * as React from "react";
import { SVGProps } from "react";

const SvgBuyLink = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 26.375 20.68"
      {...props}
    >
      <g data-name="Group 62" transform="translate(-408 -37)" fill="#c69963">
        <path
          data-name="Path 1"
          d="M434.375 39.221h-19.451L414.367 37h-4.929c-.795 0-1.438.441-1.438.986v.985h3.943l2.537 10.111a.712.712 0 00.7.4h17.037c.8 0 1.439-.441 1.439-.987v-.985h-16.65l-.351-1.4h13.165c1.589 0 3.089-.871 3.351-1.944z"
        />
        <circle
          data-name="Ellipse 1"
          cx={3.208}
          cy={3.208}
          r={3.208}
          transform="translate(416.526 51.264)"
        />
        <path
          data-name="Path 2"
          d="M423.321 54.471a3.208 3.208 0 103.206-3.209 3.207 3.207 0 00-3.206 3.209z"
        />
      </g>
    </svg>
);

export default SvgBuyLink;
