"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LightLogo from "../../public/images/logo/logo-light.png"
import DarkLogo from "../../public/images/logo/logo-dark.png"
import { useRouter } from 'next/router'

const MainNavbar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };


    const handleNavLinkClick = (event) => {
        event.preventDefault();
        setShowDropdown(!showDropdown)
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 992) {
                const stickyNavbar = document.querySelector('.sticky-navbar');
                if (window.scrollY > 50) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`header   ${isSticky ? 'is-sticky header-light' : 'header-transparent'}`}>
            <div className="navbar navbar-expand-lg sticky-navbar">
                <div className="container">

                    <Link className="navbar-brand" href="/">
                        <Image src={LightLogo} className="logo-light" alt="logo" />
                        <Image src={DarkLogo} className="logo-dark" alt="logo" />
                    </Link>



                    <button className={`navbar-toggler ${showMenu ? 'actived' : ''}`} type="button" onClick={handleToggle}>
                        <span className="menu-lines"><span></span></span>
                    </button>


                    <div className={`collapse navbar-collapse ${showMenu ? 'menu-opened' : ''}`}>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav__item">
                                <Link href="/"
                                    className={router.pathname == "/" ? "active nav__item-link" : "nav__item-link"}
                                >
                                    Home
                                </Link>
                            </li>


                           



                            <li className="nav__item">
                                <Link href="/technology"
                                className={router.pathname == "/technology" ? "active nav__item-link" : "nav__item-link"}
                                >Technology</Link>
                            </li>

                            <li className="nav__item">
                                <Link href="/team"
                                    className={router.pathname == "/team" ? "active nav__item-link" : "nav__item-link"}
                                >
                                    Team
                                </Link>
                            </li>
                            
                            <li className="nav__item">
                                <Link href="/contact"
                                    className={router.pathname == "/contact" ? "active nav__item-link" : "nav__item-link"}
                                >
                                    Contact </Link>
                            </li>


                        </ul>
                    </div>

                    {/* <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
                        <li className="d-none d-xl-block">
                            <Link href="/" className="btn action__btn-contact">Request A Quote</Link>
                        </li>
                    </ul> */}

                </div>
            </div>
        </div>




    )
}

export default MainNavbar