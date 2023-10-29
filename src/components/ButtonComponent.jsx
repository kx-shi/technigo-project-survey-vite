import React from "react";

function ButtonComponent({ buttonText, onClick }) {
  return (
    <button
      style={{ border: "none", padding: "10px 24px", borderRadius: "20px"}}
      onClick={onClick}
    >
      {buttonText}
      
    </button>
  );
}

export default ButtonComponent;
