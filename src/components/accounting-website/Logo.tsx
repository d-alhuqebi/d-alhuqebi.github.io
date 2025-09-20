import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="200"
    height="80"
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Professional background circle */}
    <circle cx="25" cy="40" r="20" fill="currentColor" opacity="0.1" />
    
    {/* Accounting symbol - calculator */}
    <rect x="10" y="25" width="30" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="15" y="30" width="5" height="5" fill="currentColor" />
    <rect x="22.5" y="30" width="5" height="5" fill="currentColor" />
    <rect x="30" y="30" width="5" height="5" fill="currentColor" />
    <rect x="15" y="37.5" width="5" height="5" fill="currentColor" />
    <rect x="22.5" y="37.5" width="5" height="5" fill="currentColor" />
    <rect x="30" y="37.5" width="5" height="5" fill="currentColor" />
    <rect x="15" y="45" width="5" height="5" fill="currentColor" />
    <rect x="22.5" y="45" width="5" height="5" fill="currentColor" />
    <rect x="30" y="45" width="5" height="5" fill="currentColor" />
    <rect x="15" y="52.5" width="20" height="5" rx="2" fill="currentColor" />
    
    {/* Arabic word "سعد" */}
    <text
      x="50"
      y="45"
      fontFamily="Tajawal, sans-serif"
      fontWeight="800"
      fontSize="36"
      fill="currentColor"
    >
      سعد
    </text>

    {/* English text "SAAD CPA" */}
    <text
      x="50"
      y="65"
      fontFamily="Arial, sans-serif"
      fontWeight="700"
      fontSize="12"
      fill="currentColor"
    >
      SAAD CPA
    </text>

    {/* Decorative elements */}
    <path d="M150 20 L160 10 L170 20" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M160 10 L160 40" stroke="currentColor" strokeWidth="2" />
    <circle cx="160" cy="45" r="3" fill="currentColor" />
    
    <path d="M175 30 L185 20 L195 30" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M185 20 L185 50" stroke="currentColor" strokeWidth="2" />
    <circle cx="185" cy="55" r="3" fill="currentColor" />
  </svg>
);
