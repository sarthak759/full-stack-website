import React from 'react';
import MainHeader from './MainHeader';
import {Link} from 'react-router-dom';
import './MainNavigation.css';
import Backdrop from '../UIElements/Backdrop'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import { useState } from 'react';

const MainNavigation= props => {

    const [DrawerIsOpen, setDrawerIsOpen]= useState(false);

    const OpenDrawer= ()=>{
        setDrawerIsOpen(true);
    }

    const CloseDrawer = () => {
        setDrawerIsOpen(false);
    }

    return(
        <React.Fragment>
            {DrawerIsOpen && <Backdrop onClick={CloseDrawer}/>}
            <SideDrawer show={DrawerIsOpen} onClick={CloseDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={OpenDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;