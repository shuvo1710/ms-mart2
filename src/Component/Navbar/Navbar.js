
import React from 'react';
import { Link } from
    'react-router-dom';
import { FcMenu } from "react-icons/fc"
import { BiSearch } from "react-icons/bi"
import { BsBag } from "react-icons/bs"
import { BsBookmark } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { GrFormClose } from "react-icons/gr"


const Navbar = () => {
    const Links = [
        { name: "HOME", link: '/' },
        { name: "PAGES", link: '/' },
        { name: "SHOP", link: '/' },
        { name: "PORTFOLIO", link: '/' },
        { name: "BLOG", link: '/' }
    ]


    return (
        <div className='shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

                <div className='md:hidden font-bold text-2xl absolute right-8 top-6 cursor-pointer flex'>
                    <span className='text-3xl text-green-800 mr-1 pt-2 '>
                        <FcMenu></FcMenu>
                    </span>
                    <span className='text-3xl text-green-800 mr-1 pt-2 '> <GrFormClose></GrFormClose> </span>
                </div>
                <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  '>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 text-xl ' key={link.name}  > <a className='text-gray-800 hover:underline duration-500' href={link.link}>{link.name} </a> </li>
                        ))
                    }
                </ul>
                <div>Logo</div>



                <div className='font-bold flex'>
                    <div className='flex items-center ml-4'>
                        <h6>SEARCH</h6>
                        <span className='text-3xl text-green-800 mr-1 pt-2 '>
                            <BiSearch></BiSearch>
                        </span>
                    </div>

                    <div className='flex items-center ml-4'>
                        <h6>CART</h6>
                        <span className='text-3xl text-green-800 mr-1 pt-2 '>
                            <BsBag></BsBag>
                        </span>
                        <small>0</small>
                    </div>

                    <div className='flex items-center ml-4'>
                        <span className='text-3xl text-green-800 mr-1 pt-2 '>
                            <BsBookmark></BsBookmark>
                        </span>
                        <small>0</small>

                    </div>
                    <div className='flex items-center ml-4'>
                        <span className='text-3xl text-green-800 mr-1 pt-2 '>
                            <CiUser></CiUser>
                        </span>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default Navbar;