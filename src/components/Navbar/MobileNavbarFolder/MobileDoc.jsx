import React ,{useState} from 'react';

function MobileDoc ({active}){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="mobile-documents"  data-parent="main-menu">
            <a href="">بلاگ پارس پک</a>
            <a href="">مستندات پارس پک</a>
        </div>
    );
}

export default MobileDoc