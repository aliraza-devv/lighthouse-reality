import * as React from "react";
import { SVGProps } from "react";

const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <g data-name="Group 179">
        <path
          data-name="Path 563"
          d="M27.319 4.681a16 16 0 100 22.639 16.026 16.026 0 000-22.639zM22.6 20.717a1.334 1.334 0 11-1.886 1.886L16 17.886l-4.714 4.716A1.334 1.334 0 019.4 20.716l4.714-4.721L9.4 11.284a1.334 1.334 0 011.885-1.889L16 14.114l4.716-4.719a1.334 1.334 0 011.884 1.889l-4.714 4.711z"
          fill="#f2e849"
        />
      </g>
    </svg>
);

export default SvgCancel;
