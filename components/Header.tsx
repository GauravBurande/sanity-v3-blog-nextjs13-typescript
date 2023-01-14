import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold py-5 px-10'>
            <div className='flex items-center space-x-2'>
                <Link href={"/"} >
                    <Image src={"/capton1.png"} className="rounded-full" width={50} height={50} alt="CapTon"/>
                </Link>
                <h1>CAPTON</h1>
            </div>

            <div>
                <Link href={'https://github.com/GauravBurande'} className="px-5 py-3 text-sm md:text-base  bg-gray-700 text-[#0ACBCB] flex items-center rounded-full text-center">Check out my GitHub Profile</Link>
            </div>
        </header>
    )
}

export default Header