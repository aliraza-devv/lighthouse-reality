import * as React from "react";
import { SVGProps } from "react";

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      {...props}
    >
      <path
        d="M38 19a19 19 0 10-19 19c.111 0 .223 0 .334-.007V23.208h-4.082v-4.757h4.082v-3.5c0-4.06 2.479-6.271 6.1-6.271a33.159 33.159 0 013.659.186v4.245H26.6c-1.967 0-2.353.935-2.353 2.308v3.028h4.713l-.616 4.753h-4.1v14.065A19.006 19.006 0 0038 19z"
        fill="#b28451"
      />
    </svg>
);

export default SvgFacebook;
