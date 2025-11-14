import React from 'react';

interface IconProps {
  className?: string;
}

export const FootballIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m16.32 7.68-1.8-2.76" />
      <path d="M5.48 10.68 2.72 9.5" />
      <path d="m2.72 14.5 2.76-1.18" />
      <path d="m7.68 16.32-2.76 1.8" />
      <path d="m10.68 5.48-1.18-2.76" />
      <path d="m14.5 2.72-1.18 2.76" />
      <path d="m16.32 16.32 1.8 2.76" />
      <path d="m18.52 13.32 2.76 1.18" />
      <path d="m21.28 14.5-2.76-1.18" />
      <path d="m16.32 7.68 1.8-2.76-4.24-2.8-2.8 4.24" />
      <path d="M18.52 10.68 21.28 9.5l-2.8-4.24-4.24 2.8" />
      <path d="m7.68 7.68-1.8 2.76 2.76 1.18 1.18-2.76" />
      <path d="m5.48 13.32-2.76 1.18 2.8 4.24 4.24-2.8" />
      <path d="M12 12v4.83" />
      <path d="m16.32 16.32-1.8-2.76" />
      <path d="M7.68 16.32 9.48 13.56" />
    </svg>
  );
};
