import React from 'react'
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'

const StudioNavbar = (props: any) => {
    return (
        <>
            <div>
                <div className="text-[#0ACBCB] px-6 py-3 flex items-center justify-between bg-[#1a1a1a]">
                    <Link href={'/'} className='flex'>
                        <ArrowUturnLeftIcon className='h-6 w-6 mr-2' />
                        Go to Website
                    </Link>

                    <div>
                        <a href="https://github.com/GauravBurande">visit GitHub</a>
                    </div>
                </div>
                <>{props.renderDefault(props)}</>
            </div>
        </>
    )
}

export default StudioNavbar