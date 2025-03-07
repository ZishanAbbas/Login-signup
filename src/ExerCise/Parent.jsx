import React from 'react'
import Child from './Child'

const items=[{id:1,url:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",Name:"Ravi",Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, accusantium."},
{id:2,url:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",Name:"Rahul",Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, accusantium."},{id:3,url:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",Name:"Priya",Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, accusantium."},{id:4,url:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",Name:"Suresh",Description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, accusantium."}]

const Parent = () => {
  return (
    <div>
      <Child items={items}/>
      <button>Click me</button>
    </div>
  )
}

export default Parent
