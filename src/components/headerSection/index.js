import React from 'react';
import logo from '../../assets/logo.svg';
import burgerIcon from '../../assets/icon/burger-list.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="w-full flex relative">
            <Link className="mx-auto">
                <img src={logo} alt="logo" className="text-center w-2/4 sm:w-11/12"/>
            </Link>
            <div className="self-end my-0 cursor-pointer absolute right-0 top-2.5">
                <img src={burgerIcon} alt="burger icon" className="w-2/4 sm:w-11/12" />
            </div>
        </nav>
    )
}

export default Header
