import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex flex-col items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 40"
      width="100"
      height="40"
      aria-label="GM Manutenções Logo"
      {...props}
    >
      <style>{`.heavy { font: bold 30px sans-serif; }`}</style>
      <text x="0" y="30" className="heavy fill-primary">
        G
      </text>
      <path
        d="M 30 5 L 40 20 L 35 20 L 45 35 L 55 20 L 50 20 L 60 5 Z"
        className="fill-accent"
        stroke="hsl(var(--accent))"
        strokeWidth="1"
      />
      <text x="65" y="30" className="heavy fill-primary">
        M
      </text>
    </svg>
    <span className="text-xs font-semibold text-primary -mt-2">
      GM Manutenções
    </span>
  </div>
);

export default Logo;
