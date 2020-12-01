import React from 'react';
import {copy} from '../Servico/core.js'

export default function Card({text, index}) {
  return (
    <div 
        className="cursor-pointer p-10 break-all"
        onClick={() => copy(index)}  
      >
      <div className="pattern-dots-md gray-light">
        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
            <div className="flex-grow">
            <div 
              className="text-white leading-relaxed text-sm text-justify">
              {text}
            </div>
            <input 
              className="hidden"
              type="text"
              defaultValue={text}
              id={`copy-${index}`}                       
            />
          </div>
        </div>
      </div>
    </div>
  )
}