import React from 'react';

const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-700"
    >
      {children}
    </button>
  );
};

export default Button;
