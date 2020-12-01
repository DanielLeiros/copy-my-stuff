import React from 'react';
  
  
export default function Button ({msg, func, value}) {

  const buttonClass = "bg-blue-500 text-white font-bold text-sm py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-800 hover:border-blue-700 rounded";
  

  return (
    <div className="px-5">
      <button className={buttonClass} onClick={() => func(value)}>
        {msg}
      </button>
    </div>
  );
}  