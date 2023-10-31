import * as React from "react";
import { SVGProps } from "react";

const SvgWorkLink = (props: SVGProps<SVGSVGElement>) => (
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 6.5a1 1 0 01-1-1V4h-4v1.5a1 1 0 01-2 0V4c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v1.5a1 1 0 01-1 1zM12.71 15.38a2.191 2.191 0 01-1.48-.02L0 11.62v7.63C0 20.77 1.23 22 2.75 22h18.5c1.52 0 2.75-1.23 2.75-2.75v-7.63z" />
      <path d="M24 7.75v2.29l-11.76 3.92c-.08.03-.16.04-.24.04s-.16-.01-.24-.04L0 10.04V7.75C0 6.23 1.23 5 2.75 5h18.5C22.77 5 24 6.23 24 7.75z" />
    </svg>
);

export default SvgWorkLink;
