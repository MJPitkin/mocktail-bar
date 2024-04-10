import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full bg-slate-500 flex justify-around'>
        <Link href="/" className='hover:text-white'>Home</Link>
        <Link href="/menu" className='hover:text-white'>Menu</Link>
        <Link href="/bookings" className='hover:text-white'>Bookings</Link>
        <Link href="/about" className='hover:text-white'>About Us</Link>
        <Link href="/eureka" className='hover:text-white'>Eureka's Roti</Link>
        <Link href="/login" className='hover:text-white'>Login</Link>
        <Link href="/signup" className='hover:text-white'>Sign Up</Link>
    </div>
  )
}
