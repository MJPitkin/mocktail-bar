import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full bg-slate-500 flex justify-between'>
      <h1>Logo</h1>
        <div className='w-1/2 flex justify-around'>
        
        <Link href="/" className='text-black hover:text-white'>Home</Link>
        <Link href="/menu" className='text-black hover:text-white'>Menu</Link>
        <Link href="/bookings" className='text-black hover:text-white'>Bookings</Link>
        <Link href="/about" className='text-black hover:text-white'>About Us</Link>
        <Link href="/eureka" className='text-black hover:text-white'>Eureka&apos;s Roti</Link>
        </div>
        <div className='w-1/6 flex justify-around'>
        <Link href="/login" className='text-black hover:text-white'>Login</Link>
        <Link href="/signup" className='text-black hover:text-white'>Sign Up</Link>
        </div>
    </div>
  )
}
