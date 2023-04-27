import React from 'react'

export const DialogueCard: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className="relative bg-white drop-shadow-md w-[50%] mx-auto p-12 rounded-2xl">
        {children}
      </div>
    </>
  )
}
