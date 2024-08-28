import * as React from 'react';
import { SVGProps } from 'react';
import { SVGRProps } from '.';
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm-1.2-4.5H12v1.8h-1.2v-1.8zm4.5-8c0 .6-.1 1.2-.3 1.8-.3.5-.8 1-1.3 1.4L12.3 13c-.2.4-.4.8-.4 1.2v.6H11c-.1-.3-.2-.7-.2-1 0-.4.2-.9.5-1.2.4-.5.9-1 1.4-1.4.5-.4.9-.8 1.2-1.3.2-.4.3-.9.3-1.4 0-.5-.2-1.1-.6-1.4-.6-.3-1.3-.5-2-.4L9.3 7h-.5v-.8c1-.3 2-.5 3-.5.9-.1 1.9.1 2.7.6.6.6.9 1.4.8 2.2z' />
    </svg>
  );
};
