/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Send3 } from "../../icons/Send3";
import "./style.css";

export const InputForm = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`input-form ${state.state} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["active", "default"].includes(state.state) && (
        <div className="type-your-question">Type your question here...</div>
      )}

      {state.state === "active" && <Send3 className="send" color="#C73640" opacity="0.64" />}

      {state.state === "state-3" && <p className="how-do-i-block-my">How do I block my card?</p>}

      {["default", "state-3"].includes(state.state) && (
        <Send3 className="send" color={state.state === "state-3" ? "#C73640" : "#ACACAC"} />
      )}

      {["active", "state-3"].includes(state.state) && <div className="element">|</div>}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "click":
        return {
          state: "active",
        };
    }
  }

  if (state.state === "active") {
    switch (action) {
      case "click":
        return {
          state: "state-3",
        };
    }
  }

  return state;
}

InputForm.propTypes = {
  stateProp: PropTypes.oneOf(["state-3", "active", "default"]),
};
