import Link from "next/link";

const LogoSvg = () => (
  <svg
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.9628 34.9492H38.5134L28.053 24.5474H35.5017L45.9628 34.9492Z"
      className="fill-black dark:fill-white"
    />
    <path
      d="M48.9683 21.8922C48.9694 23.5726 48.4309 25.2094 47.431 26.564C46.4312 27.9187 45.0224 28.9205 43.4099 29.4233L38.51 24.5474H41.0331C41.7413 24.5474 42.4204 24.2676 42.9212 23.7697C43.422 23.2717 43.7033 22.5963 43.7033 21.8922C43.7033 21.188 43.422 20.5126 42.9212 20.0146C42.4204 19.5167 41.7413 19.237 41.0331 19.237H33.1676L27.9011 14H41.031C42.0735 13.9993 43.1059 14.2029 44.0691 14.5993C45.0323 14.9956 45.9076 15.577 46.6447 16.31C47.3818 17.043 47.9664 17.9133 48.365 18.8711C48.7636 19.829 48.9684 20.8555 48.9676 21.8922H48.9683Z"
      className="fill-black dark:fill-white"
    />
    <path
      d="M26.2185 14V34.9492H10.4184L15.6848 29.7116H20.9513V21.5229L7.44938 34.9492H0L20.9513 14.1153L21.0672 14H26.2185Z"
      className="fill-black dark:fill-white"
    />
  </svg>
);

const Logo = ({ href = "" }: { href?: string }) => {
  return href.length > 0 ? (
    <Link
      href={href}
      className="text-lg font-bold text-gray-900 dark:text-white"
    >
      <LogoSvg />
    </Link>
  ) : (
    <LogoSvg />
  );
};

export default Logo;
