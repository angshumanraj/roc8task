import React from 'react';

const Select = ({
  label,
  value,
  onChange,
  children
}: {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) => {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={onChange}
        className="mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-sm"
      >
        {children}
      </select>
    </label>
  );
};

export default Select;
