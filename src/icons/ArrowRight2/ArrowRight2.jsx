/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRight2 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-right-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645L13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.8536 11.8536C10.6583 12.0488 10.3417 12.0488 10.1464 11.8536C9.95118 11.6583 9.95118 11.3417 10.1464 11.1464L12.7929 8.5L10.1464 5.85355C9.95118 5.65829 9.95118 5.34171 10.1464 5.14645Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M2 8.5C2 8.22386 2.22386 8 2.5 8L13 8C13.2761 8 13.5 8.22386 13.5 8.5C13.5 8.77614 13.2761 9 13 9L2.5 9C2.22386 9 2 8.77614 2 8.5Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M1 8.5C1 8.22386 1.22386 8 1.5 8L13.2929 8L10.1464 4.85355C9.95118 4.65829 9.95118 4.34171 10.1464 4.14645C10.3417 3.95118 10.6583 3.95118 10.8536 4.14645L14.8536 8.14645C15.0488 8.34171 15.0488 8.65829 14.8536 8.85355L10.8536 12.8536C10.6583 13.0488 10.3417 13.0488 10.1464 12.8536C9.95118 12.6583 9.95118 12.3417 10.1464 12.1464L13.2929 9H1.5C1.22386 9 1 8.77614 1 8.5Z"
        fill="black"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M1 8.5C1 8.22386 1.22386 8 1.5 8L13.2929 8L10.1464 4.85355C9.95118 4.65829 9.95118 4.34171 10.1464 4.14645C10.3417 3.95118 10.6583 3.95118 10.8536 4.14645L14.8536 8.14645C15.0488 8.34171 15.0488 8.65829 14.8536 8.85355L10.8536 12.8536C10.6583 13.0488 10.3417 13.0488 10.1464 12.8536C9.95118 12.6583 9.95118 12.3417 10.1464 12.1464L13.2929 9H1.5C1.22386 9 1 8.77614 1 8.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowRight2.propTypes = {
  color: PropTypes.string,
};
