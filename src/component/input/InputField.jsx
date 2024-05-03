import React from 'react'

function InputField( {
        label,
        type,
        name='',
        placeholder,
        value='',
        onChange,
        error="",

       }
      
       ) {
    return (
          <>
        {label && (
            <label htmlFor={name} className="text-base font-medium text-gray-900">
              {label}
            </label>
          )}
            <div className="mt-2">
                <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}

                ></input>
             { error &&  <p className="text-red-700">{error}</p>}
            </div>

        </>
    )
}

export default InputField
