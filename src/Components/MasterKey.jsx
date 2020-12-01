
import React from 'react';

export default function MasterKey({mKey}) {
  return (
        <div>
            <div className="key-input">
                <label>Chave ativa:</label>
                <output 
                name="personal-key" 
                className="b-border h-5 px-5 pr-10 bg-gray-300 text-xs focus:outline-none">
                    {mKey}
                </output>
                    
            </div>
        </div>
  )
}