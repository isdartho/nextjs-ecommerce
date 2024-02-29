"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { UilUser } from '@iconscout/react-unicons';
import { UilShoppingCart } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';

const NavBar = () => {
    return  (
        <header className="bg-graw-900 text-black fixed w-full top-0 z-10">
            <nav className="container mx-auto flex justify-between py-4">
                <div className="flex items-center px-2 mx-4">
                    <a href="#" className="text-xl font-bold mr-4">Your Logo</a>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="/shop" className="hover:text-white">Shop</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="flex items-center mx-2">
                    <ul className="flex space-x-4">
                        <li className="">
                            <form className="flex items-center w-3/4">
                                <input className="appearance-none border-none w-full text-black mr-1 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" />
                                <div className="hover: cursor-pointer hover:text-white"><UilSearch /></div>
                            </form>
                        </li>
                        <li className="hover:cursor-pointer hover:text-white"><Link href="#" ><UilUser /></Link></li>
                        <li className="hover:cursor-pointer hover:text-white"><Link href="#" ><UilShoppingCart /></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;