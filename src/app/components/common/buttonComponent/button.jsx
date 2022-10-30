import React from "react";

const Button = ({ className, children, onAction }) => {
  return (
    <button onClick={onAction} className={className}>
      {children}
    </button>
  );
};

export default Button;
