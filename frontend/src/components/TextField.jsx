import React/* , { useEffect, useState } */ from "react";

export default function TextField({ value, label, type, icon, onChange }) {
 /*  const [  content  setContent] = useState();

  useEffect(() => {
    if (value) {
      setContent(value);
    }
  }, [value]); */

  return (
    <div className="flex flex-col mb-4">
      <label className="flex item-center">
        {icon}
        {label}
      </label>
      <input
        className="border border-indigo-600 rounded-lg relative  p-2"
        type={type}
        // value={content ? content : null}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
      />
    </div>
  );
}
