import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM15.417 3c.107 1.019-.296 2.015-.89 2.758-.614.721-1.589 1.293-2.564 1.209-.127-.976.36-2.015.912-2.65.614-.744 1.674-1.274 2.543-1.317ZM13.13 7.664c.633-.25 1.416-.558 2.278-.507.55.043 2.135.212 3.15 1.713a.836.836 0 0 1-.034.022c-.26.17-1.847 1.209-1.827 3.256.02 2.44 2.01 3.354 2.275 3.476a.245.245 0 0 1 .029.014l-.006.019a9.416 9.416 0 0 1-1.177 2.413c-.719 1.058-1.459 2.095-2.643 2.116-.557.01-.933-.151-1.324-.319-.41-.175-.837-.358-1.508-.358-.703 0-1.15.188-1.581.37-.372.157-.73.308-1.23.328-1.142.042-2.008-1.122-2.727-2.18-1.48-2.135-2.6-6.026-1.078-8.65.74-1.31 2.093-2.135 3.55-2.157.637-.011 1.247.23 1.778.44.404.16.764.301 1.056.301.265 0 .61-.136 1.019-.297Z'
        fill='#000'
      />
    </svg>
  );
};
