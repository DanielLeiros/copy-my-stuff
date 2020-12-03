import React from 'react';
  
  
export default function Button ({msg, func, value, tipo}) {

  const buttonClass = "btn-responsivo text-white font-bold text-sm py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-800 hover:border-blue-700 rounded";
  const bgButtonCopy = "bg-blue-500";
  const bgButtonKey = "bg-green-500";

  return (
    <div className="px-5">
      <button 
        className={`${buttonClass} ${tipo === "copia" ? bgButtonCopy : bgButtonKey }` } 
        onClick={() => func(value)}
      >
        {msg}
      </button>
    </div>
  );
}  