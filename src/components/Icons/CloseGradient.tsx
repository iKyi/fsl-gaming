import { SvgIconProps, SvgIcon } from "@mui/material";

const CloseGradient: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill="url(#paint0_linear_908_3099)"
        d="M13.214 12l6.153-7.334a.186.186 0 00-.143-.307h-1.87c-.11 0-.216.05-.289.134l-5.074 6.05-5.074-6.05a.375.375 0 00-.289-.134h-1.87a.186.186 0 00-.143.307L10.767 12l-6.152 7.334a.187.187 0 00.143.307h1.87c.11 0 .216-.05.289-.134l5.074-6.05 5.074 6.05c.07.084.176.134.288.134h1.87c.16 0 .247-.185.144-.307L13.214 12z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_908_3099"
          x1="4.742"
          x2="3.74"
          y1="4.764"
          y2="6.566"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00F5F5"></stop>
          <stop offset="1" stopColor="#008EF5"></stop>
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default CloseGradient;
