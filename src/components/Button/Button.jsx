/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowRight2 } from "../../icons/ArrowRight2";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import "./style.css";

export const Button = ({
  type,
  leadingIcon,
  trailIcon,
  icon = <ChevronLeft1 className="arrow-right" color="#C73640" />,
  text = "secondary",
  className,
  text1 = "Primary",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    leadingIcon: leadingIcon,

    trailIcon: trailIcon,
  });

  return (
    <div
      className={`button ${state.type} trail-icon-${state.trailIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.leadingIcon && <>{icon}</>}

      <div className="primary-2">
        {["primary-hover", "primary"].includes(state.type) && <>{text1}</>}

        {["secondary-hover", "secondary"].includes(state.type) && <>{text}</>}

        {["tertiary-hover", "tertiary"].includes(state.type) && <>tertiary</>}
      </div>
      {state.trailIcon && (
        <ArrowRight2 className="arrow-right" color={state.type === "primary" ? "white" : "#C73640"} />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.leadingIcon === false && state.trailIcon === false && state.type === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          trailIcon: false,
          type: "primary-hover",
        };
    }
  }

  if (state.leadingIcon === false && state.trailIcon === false && state.type === "primary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          trailIcon: false,
          type: "primary",
        };
    }
  }

  if (state.leadingIcon === false && state.trailIcon === false && state.type === "secondary") {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          trailIcon: false,
          type: "secondary-hover",
        };
    }
  }

  if (state.leadingIcon === false && state.trailIcon === false && state.type === "secondary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          trailIcon: false,
          type: "secondary",
        };
    }
  }

  if (state.leadingIcon === false && state.trailIcon === false && state.type === "tertiary") {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          trailIcon: false,
          type: "tertiary-hover",
        };
    }
  }

  if (state.leadingIcon === false && state.trailIcon === false && state.type === "tertiary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          trailIcon: false,
          type: "tertiary",
        };
    }
  }

  if (state.leadingIcon === true && state.trailIcon === false && state.type === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          trailIcon: false,
          type: "primary-hover",
        };
    }
  }

  if (state.leadingIcon === true && state.trailIcon === false && state.type === "primary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          trailIcon: false,
          type: "primary",
        };
    }
  }

  if (state.leadingIcon === true && state.trailIcon === false && state.type === "secondary") {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          trailIcon: false,
          type: "secondary-hover",
        };
    }
  }

  if (state.leadingIcon === true && state.trailIcon === false && state.type === "secondary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          trailIcon: false,
          type: "secondary",
        };
    }
  }

  if (state.leadingIcon === true && state.trailIcon === false && state.type === "tertiary") {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          trailIcon: false,
          type: "tertiary-hover",
        };
    }
  }

  if (state.leadingIcon === true && state.trailIcon === false && state.type === "tertiary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          trailIcon: false,
          type: "tertiary",
        };
    }
  }

  return state;
}

Button.propTypes = {
  type: PropTypes.oneOf(["tertiary", "tertiary-hover", "secondary", "primary-hover", "primary", "secondary-hover"]),
  leadingIcon: PropTypes.bool,
  trailIcon: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
