
function DesktopNavbar ({ openMenu, setOpenMenu }) {

    return(
        <>
            <header>
                <div className="container">
                    <div className="banner">
                        <a href="#"><img src="/images/banner-topbar-desk-041218.jpg" alt="topbar banner"/></a>
                    </div>
                </div>
            </header>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-right">
                        <div className="nav-logo">
                                <a href="/"><img src="/images/pars pack logo.png" alt="logo of the site"/></a>
                            </div>
                        <ul>
                            <li className="has-dropdown">
                                <button className="products-button"
                                onClick={() => setOpenMenu(!openMenu)}>
                                    محصولات
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                </button>
                            </li>
                            <li><a href="#">خرید هاست</a></li>
                            <li><a href="#">خرید سرور </a></li>
                            <li><a href="#">خرید دامنه </a></li>
                            <li><a href="#">وبلاگ </a></li>
                            <li><a href="#">مستندات </a></li>
                        </ul>
                    </div>
                    <div className="nav-left">
                    <a className="callus-btn" href="#"> تلفن تماس  <span className="icon"><ion-icon name="call"></ion-icon></span></a>
                    <a className="enter-btn"  href="#">ورود به پنل </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default DesktopNavbar