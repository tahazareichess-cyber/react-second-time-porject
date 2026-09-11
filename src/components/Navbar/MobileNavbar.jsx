import React , {useState} from 'react';
import MobileMainMenu from './MobileNavbarFolder/MobileMainMenu.jsx';
import MobileAllPro from './MobileNavbarFolder/MobileAllPro.jsx';
import MobileCloudPlatform from './MobileNavbarFolder/MobileCloudPlatform.jsx';
import MobileWordpress from './MobileNavbarFolder/MobileWordpress.jsx';
import MobileDoc from './MobileNavbarFolder/MobileDoc.jsx';
import MobileServerBuy from './MobileNavbarFolder/MobileServerBuy.jsx';
import MobileHostBuy from './MobileNavbarFolder/MobileHostBuy.jsx'
import MobileDomAndSer from './MobileNavbarFolder/MobileDomAndSer.jsx';
import MobileCloudPriviteOnline from './MobileNavbarFolder/MobileCloudPriviteOnline.jsx';
import MobileMenuFooter from './MobileNavbarFolder/mobileMenuFooter.jsx';
function MobileNavbar () {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const [pageHistory, setPageHistory] = useState(["main-menu"]);

const activePage = pageHistory[pageHistory.length - 1];

function goToPage(page) {
    setPageHistory(prev => [...prev, page]);
}

function goBack() {
    setPageHistory(prev => {
        if (prev.length <= 1) {
            return prev;
        }

        return prev.slice(0, -1);
    });
}

return(
    <>
    <nav className="mobile-navbar">

    <div className="navbar-top">

        <div className="navbar-right">
            <button className="menu-btn"
            onClick={() => {
                if (!mobileMenuOpen) {
                     setPageHistory(["main-menu"]); 
                     setMobileMenuOpen(true); 
                     return;
                     } 
                     if (pageHistory.length === 1) {
                        setMobileMenuOpen(false);
                        setPageHistory(["main-menu"]); 
                        return;
                     } 
                        goBack();
            }}>
                <ion-icon name={ !mobileMenuOpen ? "menu-outline" : pageHistory.length === 1 ? "close-outline" : "arrow-back-outline" } ></ion-icon>
            </button>
        </div>

            <div className="navbar-title">
                همه محصولات
            </div>

        <div className="navbar-left">

            <a href="#" className={`mobile-callus-btn ${(mobileMenuOpen) ? "hidden" : ""}`}>
                <ion-icon name="call"></ion-icon>
            </a>

            <a href="#" className={`mobile-enter-btn ${(mobileMenuOpen) ? "hidden" : ""}`}>
                ورود به پنل
            </a>
            
            <img src="images/pars pack mobile logo.png" alt="Logo"/>

        </div>

    </div>

</nav>
<div
    className={`overlay ${ mobileMenuOpen ? "active" : "" }`} onClick={() => { setMobileMenuOpen(false); setPageHistory(["main-menu"]); }}
></div>

<nav
    className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
>
        <div className="menu-pages">
            <MobileMainMenu 
            active={activePage === "main-menu"}
            goToPage={goToPage}/>
            <MobileAllPro 
            active={activePage === "mobile-all-pro"}
            goToPage={goToPage}/>  
            <MobileCloudPlatform
            active={activePage === "mobile-cloud-platform"}
            goToPage={goToPage}
            />
            <MobileWordpress
            active={activePage === "mobile-wordpress"}
            />
            <MobileDoc
            active={activePage === "mobile-documents"}
            />
            <MobileServerBuy 
            active={activePage === "mobile-server-buy"}
            goToPage={goToPage}/>
            <MobileHostBuy
                active={activePage === "mobile-host-buy"}
            />
            <MobileDomAndSer
                activeDom={activePage === "mobile-domain-buy"}
                activeSer={activePage === "mobile-other-services"}
            />
            <MobileCloudPriviteOnline
                activeCloud={activePage === "mobile-cloud-structure"}
                activePrivate={activePage === "mobile-privite-server"}
                activeOnline={activePage === "mobile-online-server"}
            />
        </div>
        <MobileMenuFooter
        active={mobileMenuOpen}
        />
    </nav>
    </>
    )
};

export default MobileNavbar