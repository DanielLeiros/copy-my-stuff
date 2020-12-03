import React from 'react';
import {copy} from '../Servico/core.js'

export default function Card({text, index, setAlert, setAlertMessage}) {
  return (
    <div 
        className="cursor-pointer p-10 break-all"
        onClick={() => copy(index, setAlert, setAlertMessage)}  
      >
      <div className="pattern-dots-md gray-light">
        <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
            <div className="flex-grow">
            <div 
              className="text-white leading-relaxed text-sm text-justify">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" className="svg-inline--fa fa-copy fa-w-14 copy-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
    
              <span className="card-text">{text}</span>              
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