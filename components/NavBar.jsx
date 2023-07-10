import React from 'react';
import Link from "next/link";
import styles from './NavBar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const NavBar = () => {

    return (
        <nav className={styles['menu-navegation']} >
            {
                menuItems.map(it => (
                    <Link key={it.href} className={styles['menu-navegation-link']} href={it.href}>{it.text}</Link> ))
            }
        </nav>
    );
};

export default NavBar;