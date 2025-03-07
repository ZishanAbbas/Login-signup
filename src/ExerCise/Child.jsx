import React from 'react'

const Child = ({items}) => {
  return (
    <div>

      {items.map((item) => (
          <>
          <p key={item.id}> {item.Name}</p>
          <p>{item.Description}</p>
          </>
        ))}
    </div>
  )
}

export default Child
