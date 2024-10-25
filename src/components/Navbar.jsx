import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import urlList from '../../data/UI.layout/urlList.json'

const navList = Object.keys(urlList).map(i => {
    return urlList[i]
})
// const navList = [
//     {
//         li: 'Giới thiệu',
//         url: '/gioi-thieu'
//     },
//      ...
// ]
function Navbar(props) {
    return (
        <nav className='shadow shadow-gray-800'>
            <div className="container mx-auto py-5">

                <div className='flex justify-between'>
                    <Logo />
                    <NavUl />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

function NavUl() {
    const [active, setActive] = useState(-1);

    return (
        <ul className='hidden lg:flex flex-wrap justify-between content-center gap-8'>
            {navList.map((e, i) => {
                const isActive = active === e.li ? true : false;
                return (
                    <NavLi to={e.url} isActive={isActive} onClick={ev => setActive(e.li)} key={e.li}>
                        {e.li}
                    </NavLi>)
            })}
        </ul>
    )
}

function NavLi({ to, isActive, children, ...props }) {

    return (
        <li className={`${isActive ? 'text-main font-bold' : ''} hover:text-main`} {...props}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )

}

