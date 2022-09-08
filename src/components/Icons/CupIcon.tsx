import { SvgIconProps, SvgIcon } from "@mui/material";

const CupIcon: React.VFC<SvgIconProps> = (props) => {
  // *************** RENDER *************** //
  return (
    <SvgIcon viewBox="0 0 27 26" {...props}>
      <path
        fill="url(#paint0_linear_839_6339)"
        d="M25.245 3h-3.908V1.75c0-.332-.138-.65-.382-.884A1.331 1.331 0 0020.034.5H7.006c-.345 0-.677.132-.921.366a1.225 1.225 0 00-.382.884V3H1.795c-.346 0-.677.132-.921.366a1.225 1.225 0 00-.382.884V8c0 5.387 2.344 8.637 6.278 8.765a7.63 7.63 0 002.304 2.392 8.005 8.005 0 003.143 1.23V23H9.612v2.5h7.816V23h-2.605v-2.613a8.016 8.016 0 003.142-1.23 7.643 7.643 0 002.305-2.392c3.934-.128 6.278-3.378 6.278-8.765V4.25c0-.332-.138-.65-.382-.884A1.331 1.331 0 0025.245 3zM3.098 8V5.5h2.605v8.537C3.38 13.098 3.098 9.624 3.098 8zM13.52 18c-2.874 0-5.211-2.242-5.211-5V3H18.73v10c0 2.758-2.337 5-5.211 5zm7.817-3.963V5.5h2.605V8c0 1.624-.281 5.098-2.605 6.037z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_839_6339"
          x1="2.893"
          x2="18.834"
          y1="2.436"
          y2="13.428"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B048FD"></stop>
          <stop offset="0.315" stopColor="#6216D2"></stop>
          <stop offset="0.63" stopColor="#3E4ECC"></stop>
          <stop offset="1" stopColor="#3E75D5"></stop>
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default CupIcon;
