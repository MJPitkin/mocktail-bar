import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full bg-slate-500 flex justify-around'>
        <Link href="/" className='hover:text-white'>Home</Link>
        <Link href="/menu" className='hover:text-white'>Menu</Link>
        <Link href="/bartenders" className='hover:text-white'>Bartenders</Link>
    </div>
  )
}
