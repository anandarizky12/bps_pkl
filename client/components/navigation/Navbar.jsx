import React from 'react'
import { useRouter } from 'next/router'

import ActiveLink from '../utils/ActiveLink/ActiveLink';

import AccountMenu from '../dropdown/Dropdown';

function Navbar() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    return (
        <div 
            hidden={
                router.asPath === '/login' || router.asPath === '/register'
                ? true
                : false
            }
        >
            <div className="bg-green-400 text-gray-200 w-full fixed z-10 px-5 md:px-24 top-0 inset-x-0">
                <div className="h-14 py-4 container mx-auto flex items-center justify-center">
                    <div x-data="{ open: false }"   className="z-10 flex-1">
                        <div   
                            className={` ${open ?  'flex' : 'hidden'} fixed md:relative top-0 left-0 w-full 
                            md:w-auto h-screen md:h-auto md:flex flex-col md:flex-row items-center 
                            justify-center md:justify-start z-40 bg-green-400 md:bg-transparent 
                            leading-loose font-sans uppercase text-gray-200 text-base md:text-xs 
                            tracking-wider gap-8 `}>
                            <ActiveLink href="/" type="link">Home</ActiveLink>
                            <ActiveLink href="/mysurvey" type="link">My Survey</ActiveLink>
                            <ActiveLink href="/create" type="link">Create Pooling</ActiveLink>
                        </div>
                        <button  type="button"  onClick={()=>setOpen(!open)}  className={` ${open ? 'hidden' : 'block' } block md:hidden text-4xl font-thin`} >＝</button>
                        <button  type="button"  onClick={()=>setOpen(false)} className={` ${!open ? 'hidden' : 'block' } md:hidden absolute top-0 right-0 leading-none p-8 text-xl z-50`}>╳</button>
                    </div>
              
                    <div className="flex-1 flex items-center justify-end text-xs uppercase tracking-wider gap-4">
                        <AccountMenu/>
				    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
