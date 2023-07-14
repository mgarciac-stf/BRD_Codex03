/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LanguageSwitch = ({ state }) => {
  return (
    <div className="language-switch">
      <div className={`text-wrapper ${state}`}>RO</div>
      <div className="div">/</div>
      <div className={`EN-2 state-${state}`}>EN</div>
    </div>
  );
};

LanguageSwitch.propTypes = {
  state: PropTypes.oneOf(["EN", "RO"]),
};
