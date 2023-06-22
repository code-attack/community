import { SvgPropsType } from ".";

export const Write = ({ className = "", onClick, size = 40 }: SvgPropsType) => (
  <svg
    viewBox="0 0 48 48"
    fill="#121619"
    width={size}
    height={size}
    className={className}
    onClick={onClick}
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#121619">
      <path d="M37 37.2H11V35h26v2.2ZM27.771 11.716l3.395 3.295.012.011c.456.457.622 1.066.622 1.59 0 .533-.167 1.108-.541 1.575a1.09 1.09 0 0 1-.085.094l-11.8 11.7a1.1 1.1 0 0 1-.558.298l-4.479.895c-.829.195-1.598-.13-2.09-.621-.491-.491-.816-1.261-.621-2.09l.895-4.479a1.1 1.1 0 0 1 .301-.562l11.7-11.7a2.299 2.299 0 0 1 1.628-.697c.616 0 1.186.258 1.621.69Zm-1.626 1.512a.229.229 0 0 0-.067.05L14.613 24.742l-.834 4.174a1.455 1.455 0 0 1-.008.036.15.15 0 0 0 .032.045.15.15 0 0 0 .045.032.942.942 0 0 1 .036-.008l4.176-.835 11.5-11.402a.4.4 0 0 0 .034-.234l-3.36-3.26-.012-.012a.23.23 0 0 0-.067-.05l-.005-.002c-.001 0-.003 0-.005.002Z"></path>
    </g>
    <defs>
      <clipPath>
        <path
          fill="#fff"
          transform="translate(11 11)"
          d="M0 0h26v26.2H0z"
        ></path>
      </clipPath>
    </defs>
  </svg>
);
