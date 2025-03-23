import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  color?: string;
  textColor?: string;
  fontSize?: string;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  color,
  textColor,
  fontSize,
}: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: color || (variant === 'primary' ? '#646cff' : '#f4f4f4'),
    color: textColor || (variant === 'primary' ? 'white' : '#333'),
    fontSize: fontSize || '1rem',
  };

  return (
    <button
      className={`button ${variant}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
