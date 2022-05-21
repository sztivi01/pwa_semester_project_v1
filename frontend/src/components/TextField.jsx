import React  from "react";

export default function TextField({ value, label, type, icon, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="flex item-center">
        {icon}
        {label}
      </label>
      <input
        className="border border-indigo-600 rounded-lg relative  p-2"
        type={type}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
      />
    </div>
  );
}
