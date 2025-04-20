import React from "react";
import "../Css/CusBut.css";

const CusButt = ({ label = "Button 56", onClick, size = "md" }) => {
  return (
    <button
      className={`button-56 ${size !== "md" ? size : ""}`}
      role="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CusButt;
