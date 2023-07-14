/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronLeft1 = ({ color = "#1A1A1A", className }) => {
  return (
    <svg
      className={`chevron-left-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.8536 2.14645C12.0488 2.34171 12.0488 2.65829 11.8536 2.85355L6.20711 8.5L11.8536 14.1464C12.0488 14.3417 12.0488 14.6583 11.8536 14.8536C11.6583 15.0488 11.3417 15.0488 11.1464 14.8536L5.14645 8.85355C4.95118 8.65829 4.95118 8.34171 5.14645 8.14645L11.1464 2.14645C11.3417 1.95118 11.6583 1.95118 11.8536 2.14645Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ChevronLeft1.propTypes = {
  color: PropTypes.string,
};
