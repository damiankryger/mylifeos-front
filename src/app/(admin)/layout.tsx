'use client'

import React, {SVGProps, useState} from "react";
import Link from "next/link";
import {AnimatePresence, motion, SVGMotionProps} from "framer-motion";

const Logo = (props: SVGProps<SVGSVGElement> & SVGMotionProps<SVGSVGElement>) => {
    return <motion.svg whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} {...props} xmlns="http://www.w3.org/2000/svg" width="500"
                zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet"
                version="1.0">
        <defs>
            <clipPath id="41057ead25">
                <path d="M 39.4375 81 L 335.6875 81 L 335.6875 301.679688 L 39.4375 301.679688 Z M 39.4375 81 "
                      clipRule="nonzero"/>
            </clipPath>
        </defs>
        <g clipPath="url(#41057ead25)">
            <path fill="currentColor"
                  d="M 324.503906 173.78125 C 324.503906 223.125 303.730469 251.738281 335.503906 273.417969 L 335.503906 301.316406 C 296.523438 301.316406 264.921875 279.65625 264.921875 240.675781 L 264.921875 225.085938 C 277.75 227.402344 297.875 222.347656 304.785156 212.316406 C 305.542969 211.222656 305.164062 210.042969 303.878906 210.589844 C 294.292969 214.761719 275.8125 216.890625 256.914062 204.5625 C 253.5 202.078125 248.96875 200.625 243.640625 200.625 C 237.128906 200.625 232.03125 202.730469 228.617188 206.144531 C 224.972656 209.832031 222.949219 215.308594 222.949219 221.609375 L 222.949219 301.316406 L 152.050781 301.316406 L 152.050781 265.960938 C 152.050781 259.808594 149.921875 254.394531 146.214844 250.664062 L 146.234375 250.640625 C 142.714844 247.144531 137.511719 244.976562 131.066406 244.976562 C 124.449219 244.976562 119.160156 247.125 115.621094 250.640625 C 111.871094 254.351562 109.761719 259.785156 109.761719 265.960938 L 109.761719 301.316406 L 39.496094 301.316406 L 39.496094 173.78125 C 39.496094 148.222656 49.230469 125.152344 65.894531 108.546875 C 82.097656 92.410156 104.683594 82.527344 131.066406 82.527344 C 144.867188 82.527344 157.675781 85.625 169.054688 91.144531 C 171.351562 92.261719 173.582031 93.484375 175.753906 94.8125 C 155.96875 116.089844 153.207031 146.683594 189.449219 169.523438 C 174.257812 153.003906 156.855469 117.207031 186.265625 88.636719 C 199.960938 73.679688 213.617188 86.574219 224.71875 84.570312 C 230.851562 83.476562 237.128906 82.527344 243.617188 82.527344 C 295.683594 82.527344 324.503906 121.570312 324.503906 173.78125 Z M 324.503906 173.78125 "
                  fillOpacity="1" fillRule="evenodd"/>
        </g>
    </motion.svg>
}

const LinkButton = (props) => {
    return <motion.button aria-current={props.isActive ? 'page' : undefined} whileHover={props.isActive ? {} : {scale: 1.1}} whileTap={props.isActive ? {} : {scale: 0.9}} className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 ${props.isActive ? 'bg-gray-900' : 'hover:bg-gray-700 hover:text-white'}`} type={'button'}>{props.children}</motion.button>
}

const ProfileDropdown = (props) => {
    const [isToggled, setToggle] = useState(false)

    const toggle = () => {
        setToggle(prevState => !prevState)
    }

    return <div className={'relative ml-3'}>
        <motion.button
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            type="button"
                className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true"
            onClick={() => toggle()}
        >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full"
                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                 alt=""/>
        </motion.button>

        <AnimatePresence>
            {
                isToggled ? <motion.div
                    initial={{scaleY: 0}}
                    animate={{scaleY: 1}}
                    exit={{scaleY: 0}}
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    <Link href={'/profile'}>
                        <ProfileDropdownLinkButton>Profil</ProfileDropdownLinkButton>
                    </Link>
                    <Link href={'/settings'}>
                        <ProfileDropdownLinkButton>Ustawienia</ProfileDropdownLinkButton>
                    </Link>
                    <Link href={'logout'}>
                        <ProfileDropdownLinkButton>Wyloguj się</ProfileDropdownLinkButton>
                    </Link>
                </motion.div> : null
            }
        </AnimatePresence>
    </div>
}

const ProfileDropdownLinkButton = (props) => {
    return <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} type={'button'} className={'origin-left w-full block px-4 py-2 text-left text-sm text-gray-700'}>
        {props.children}
    </motion.button>
}

const MobileLinkButton = (props) => {
    return <motion.button aria-current={props.isActive ? 'page' : undefined} whileTap={props.isActive ? {} : {scale: 0.9}} className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 ${props.isActive ? 'bg-gray-900' : 'hover:bg-gray-700 hover:text-white'}`} type={'button'}>{props.children}</motion.button>
}

const MobileProfileDropdownLinkButton = (props) => {
    return <motion.button whileTap={{scale: 0.9}} type={'button'} className={'origin-left text-left w-full block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'}>
        {props.children}
    </motion.button>
}

export default function Layout({children}: Readonly<{ children: React.ReactNode; }>) {
    const [menuToggled, setMenuToggled] = useState(false);

    const toggleMenu = () => {
        setMenuToggled(prevState => !prevState)
    }

    return (
        <>
            <nav className={'bg-gray-800'}>
                <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                    <div className={'flex h-16 items-center justify-between'}>
                        <div className={'flex items-center'}>
                            <div className={'flex-shrink-0'}>
                                <Link href={'/admin'}>
                                    <Logo className={'size-10 text-gray-200 focus:outline-none'}/>
                                </Link>
                            </div>
                            <div className={'hidden md:block'}>
                                <div className={'ml-10 flex items-baseline space-x-4'}>
                                    <Link href={'/admin'}>
                                        <LinkButton isActive={true}>Dashboard</LinkButton>
                                    </Link>
                                    <Link href={'/tasks'}>
                                        <LinkButton>Zadania</LinkButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={'hidden md:block'}>
                            <div className={'ml-4 flex items-center md:ml-6'}>
                                <motion.button type={'button'}
                                               whileHover={{scale: 1.1}}
                                               whileFocus={{scale: 1.1}}
                                               whileTap={{scale: 0.9}}
                                               className={'relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'}>
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                                    </svg>
                                </motion.button>

                                <ProfileDropdown/>
                            </div>
                        </div>
                        <div className={'-mr-2 flex md:hidden'}>
                            <button type={'button'}
                                    className={'relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'}
                                    aria-controls="mobile-menu" aria-expanded="false"
                                    onClick={() => toggleMenu()}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {
                                    menuToggled ?
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5"
                                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 18 18 6M6 6l12 12"/>
                                        </svg>
                                        :
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5"
                                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                        </svg>
                                }
                            </button>
                        </div>
                    </div>
                </div>

                {
                    menuToggled ?
                        <div id={'mobile-menu'}>
                            <div className={'space-y-1 px-2 pb-3 pt-2 sm:px-3'}>
                                <Link href={'/admin'}>
                                    <MobileLinkButton isActive={true}>Dashboard</MobileLinkButton>
                                </Link>
                                <Link href={'/tasks'}>
                                    <MobileLinkButton>Zadania</MobileLinkButton>
                                </Link>
                            </div>
                            <div className={'border-t border-gray-700 pb-3 pt-4'}>
                                <div className={'flex items-center px-5'}>
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full"
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                    </div>

                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                                        <div
                                            className="text-sm font-medium leading-none text-gray-400">tom@example.com
                                        </div>
                                    </div>

                                    <motion.button type={'button'}
                                                   whileTap={{scale: 0.9}}
                                                   className={'relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'}>
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">View notifications</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                                        </svg>
                                    </motion.button>
                                </div>

                                <div className="mt-3 space-y-1 px-2">
                                    <Link href={'/profile'}>
                                        <MobileProfileDropdownLinkButton>Profil</MobileProfileDropdownLinkButton>
                                    </Link>
                                    <Link href={'/settings'}>
                                        <MobileProfileDropdownLinkButton>Ustawienia</MobileProfileDropdownLinkButton>
                                    </Link>
                                    <Link href={'logout'}>
                                        <MobileProfileDropdownLinkButton>Wyloguj się</MobileProfileDropdownLinkButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </nav>

            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </>
    );
}
