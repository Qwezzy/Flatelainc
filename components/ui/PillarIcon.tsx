import { PillarIcon as PillarIconType } from "@/lib/pillars";

interface PillarIconProps {
  icon: PillarIconType;
  className?: string;
}

export default function PillarIcon({ icon, className = "" }: PillarIconProps) {
  const props = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "house":
      return (
        <svg {...props}>
          <path
            d="M8 22L24 8L40 22V40H30V30H18V40H8V22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M33 8V14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M33 6H37"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "circuit":
      return (
        <svg {...props}>
          <circle cx="12" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="36" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="36" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M15 24H24M24 24L33 14M24 24L33 34"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "package":
      return (
        <svg {...props}>
          <rect
            x="8"
            y="14"
            width="32"
            height="26"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 22H40"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M24 14V22"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M17 8C17 8 20 10 24 10C28 10 31 8 31 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "compass":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M24 8V16M24 32V40M8 24H16M32 24H40"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M24 18L20 24L24 30L28 24L24 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "sun":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M24 8V12M24 36V40M8 24H12M36 24H40M12.69 12.69L15.52 15.52M32.48 32.48L35.31 35.31M35.31 12.69L32.48 15.52M15.52 32.48L12.69 35.31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sprout":
      return (
        <svg {...props}>
          <path
            d="M8 36H40"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M24 36V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M24 28C24 28 18 28 14 22C14 22 20 16 24 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 24C24 24 30 22 34 16C34 16 28 10 24 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
