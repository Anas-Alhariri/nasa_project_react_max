import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div id="menu" className={style.menu}>
                <a href="#" className={style.link}>
                    Favorites
                </a>
                <span className={style.dot}> • </span>
                <a href="#" className={style.link}>
                    Load More
                </a>
            </div>
        </div>
    );
};

export default Navbar;
