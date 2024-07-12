import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between">
    <img className="bg-cover h-10 w-16 m-4"  src="d5389cc06b9d40c646878c60ac4bf7ed.png" alt="" />
    <div className=' flex justify-around w-[500px] m-4'>
        <p>MENU</p>
        <p>LOCATION</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
    </div>
    <button className=' h-10 w-20 bg-red-900 text-white rounded-lg m-3'>Login</button>

</div>
  )
}

export default Navbar