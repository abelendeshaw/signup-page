// ✅ Button.jsx or Button.tsx
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children = "Create Account",
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
    >
      {children}
    </button>
  );
}
