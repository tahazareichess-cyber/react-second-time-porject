import DesktopNavbar from './DesktopNavbar.jsx';
import ProductsDropdown from './ProductsDropdown.jsx';
import MobileNavbar from './MobileNavbar.jsx';
import React, { useEffect, useRef, useState } from 'react';
function Navbar(){ 

    const [openMenu,setOpenMenu] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => { function handleClickOutside(event) {
         if ( menuRef.current && !menuRef.current.contains(event.target) ) {
             setOpenMenu(false); 
            } }
             document.addEventListener("mousedown", handleClickOutside);
              return () => { document.removeEventListener("mousedown", handleClickOutside); }; }, []);
    return (
        <div ref={menuRef}>
            <DesktopNavbar
            openMenu={openMenu} setOpenMenu={setOpenMenu}
            />
            <ProductsDropdown
            openMenu={openMenu} setOpenMenu={setOpenMenu}
            />
            <MobileNavbar/>
        </div> 
    );
}

export default Navbar