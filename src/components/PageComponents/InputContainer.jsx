import React from 'react'

function InputContainer({children}) {
  return (
      <div className="flex container mt-[25px] mx-auto flex-col justify-start gap-3">{children}</div>
  )
}

export default InputContainer