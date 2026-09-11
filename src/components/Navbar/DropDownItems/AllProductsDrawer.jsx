import React ,{useState} from 'react'

function AllProductsDrawer ({ active }) {

    const [activeMenu, setActiveMenu] = useState(null);
    const [activeServerMenu, setActiveServerMenu] = useState(null);


    return (
        <div className={`mega-drawer drawer-for-all-products all-products main-drawer ${
                            active ? "active" : ""
                        }`}>
            <div className="main-drawer-content">
                <div className="drawer-for-all-products-content">
                    <div className="buy-server submenu-item" data-target="server-buy"
                        onMouseEnter={() => {
                        setActiveMenu("server-buy");
                        setActiveServerMenu(null);
                    }}>
                        <p className="anotherdiv">خرید سرور 
                            <span className="drawer-for-all-products-icon">
                                <ion-icon className="forward-icon" name="chevron-forward-outline"></ion-icon>
                            </span>
                        </p>
                <div
                    className={`mega-drawer server-buy ${
                        activeMenu === "server-buy" ? "active" : ""
                    }`}
                >
                    <div className="server-buy-container">
                        <div className="privite-server submenu-item" data-target="drawer-for-privite"
                        onMouseEnter={() => setActiveServerMenu("private")}>
                    <p>سرور اختصاصی
                        <span className="server-buy-icon">
                            <ion-icon className="drawer-for-server-structure-icon" name="chevron-forward-outline"></ion-icon>
                        </span>
                    </p>
                    <div className={`mega-drawer drawer-for-privite ${
                                     activeServerMenu === "private" ? "active" : ""
                                    }`}>
                        <div className="hybrid-server">
                            <p>هایبرید سرور</p>
                        </div>
                        <div className="macro-server">
                            <p>ماکرو سرور</p> 
                        </div>
                        <div className="bermetal-server">
                            <p>برمتال</p>
                        </div>
                        <div className="iran-server">
                            <p>سرور اختصاصی ایران</p>
                        </div>
                    </div>
                </div>
                <div className="online-server submenu-item" data-target="drawer-buy-online-server"
                onMouseEnter={() => setActiveServerMenu("online")}
                >
                    <p>سرور مجازی
                        <span className="server-buy-icon">
                            <ion-icon className="drawer-for-server-structure-icon" name="chevron-forward-outline"></ion-icon>
                        </span>
                    </p>
                        <div className={`mega-drawer drawer-buy-online-server ${
                            activeServerMenu === "online" ? "active" : ""
                        }`}>
                            <div className="online-trade-server">
                                <p>سرور مجازی ترید</p>
                            </div>
                            <div className="online-iran-server">
                                <p>سرور مجازی ایران</p>
                            </div>
                            <div className="online-linux-server">
                                <p>سرور مجازی لینوکس</p>
                            </div>
                            <div className="online-windows-server">
                                <p>سرور مجازی ویندوز</p>
                            </div>
                            <div className="online-abroad-server">
                                <p>سرور مجازی خارج</p>
                            </div>
                            <div className="online-micro-server">
                                <p>سرور مجازی میکرو تیک</p><span>جدید</span>
                            </div>
                            <div className="online-germany-server">
                                <p>سرور مجازی آلمان</p>
                            </div>
                            <div className="online-turkey-server">
                                <p>سرور مجازی ترکیه</p>
                            </div>
                        </div>
                </div>
                <div className="cloud-server">
                    <p>سرور ابری</p>
                </div>
                </div>
                <div className={`about-server ${
                    activeServerMenu === "private" || activeServerMenu === "online" ? "hidden" : ""
                }`}>
                        <div className="know-about-this-cdn">
                        <p>در رابطه با این محصول بیشتر بدانید</p>
                        </div>
                        <article className="mega-menu-article">
                            <img src="/images/buy server img.jpg" alt="buy server"/>
                            <p>سرور چیست ؟ همه چیز درباره قلب تپنده اینترنت</p>
                            <span>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </article>
                    </div>
                
                    </div>

                    <div className="buy-host submenu-item" data-target="host-buy"
                    onMouseEnter={() => {
                        setActiveMenu("host");
                        setActiveServerMenu(null);
                    }}
                    >
                        <p className="anotherdiv">خرید هاست 
                            <span className="drawer-for-all-products-icon">
                                <ion-icon className="forward-icon" name="chevron-forward-outline"></ion-icon>
                            </span>
                        </p>
                        <div className={`mega-drawer host-buy ${
                            activeMenu === "host" ? "active" : ""
                        }`}
                        >
                            <div className="cloud-host">
                                <p>هاست ابری</p>
                            </div>
                            <div className="download-host">
                                <p>هاست دانلود</p>
                            </div>
                            <div className="wordpress-host">
                                <p>هاست وردپرس</p>
                            </div>
                            <div className="linux-host">
                                <p>هاست لینوکس</p>
                            </div>
                            <div className="privite-host">
                                <p>هاست اختصاصی</p>
                            </div>
                            <div className="popular-host">
                                <p>هاست پر بازدید</p>
                            </div>
                            <div className="iran-host">
                                <p>هاست ایران</p>
                            </div>
                            <div className="administator-host">
                                <p>هاست نمایندگی</p>
                            </div>
                            <div className="wookamrs-host">
                                <p>هاست ووکامرس</p>
                            </div>
                        </div>
                    </div>
                    <div className="buy-cdn-btn submenu-item" data-target="buy-cdn"
                    onMouseEnter={() => setActiveMenu("cdn")}
                    >
                        <p className="anotherdiv">خرید CDN</p>
                        <div className={`mega-drawer buy-cdn ${
                            activeMenu === "cdn" ? "active" : ""
                        }`}
                        >
                            <div className="about-cdn">
                                <p>در رابطه با این محصول بیشتر بدانید</p>
                                </div>
                                <article className="mega-menu-article">
                                    <img src="/images/buy server img.jpg" alt="buy server"/>
                                    <p>cdn چیست و چرا باید از آن استفاده کنید</p>
                                    <span>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="buy-domain submenu-item" data-target="domain-buy"
                    onMouseEnter={() => setActiveMenu("domain")}
                    >
                        <p className="anotherdiv">خرید دامنه
                            <span className="drawer-for-all-products-icon">
                                <ion-icon className="forward-icon" name="chevron-forward-outline"></ion-icon>
                            </span>
                        </p>
                        <div className={`mega-drawer domain-buy ${
                            activeMenu === "domain" ? "active" : ""
                        }`}>
                            <div className="top-domain">
                                <div className="domain-ir">
                                    <p>خرید دامنه ir</p>
                                </div>
                                <div className="domain-com">
                                    <p>خرید دامنهcom</p>
                                </div>
                            </div>
                                <div className="about-domain">
                                    <div className="know-about-this-domain">
                                        <p>در رابطه با این محصول بیشتر بدانید</p>
                                    </div>
                                <article className="mega-menu-article">
                                    <img src="/images/cloud img.jpg" alt="cloud server"/>
                                    <p>دامنه چیست ؟کلید اصلی ورود به دنیای آنلاین تان را بیشتر بشناسید! </p>
                                    <span>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="buy-ssl-btn submenu-item" data-target="buy-ssl"
                    onMouseEnter={() => setActiveMenu("ssl")}
                    >
                        <p className="anotherdiv">خرید SSL</p>
                        <div className={`mega-drawer buy-ssl ${
                            activeMenu === "ssl" ? "active" : ""
                        }`}> 
                            <div className="about-buy-ssl">
                                <div className="know-about-this-buy-ssl">
                                <p>در رابطه با این محصول بیشتر بدانید</p>
                                </div>
                                <article className="mega-menu-article">
                                    <img src="/images/cloud img.jpg" alt="server cloud"/>
                                    <p>SLL چیست و  چرا باید از آن استفاده کنیم؟</p>
                                    <span>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="buy-cloud-space submenu-item" data-target="cloud-space-buy"
                    onMouseEnter={() => setActiveMenu("space")}
                    >
                        <p className="anotherdiv">خرید فضای ابری</p>
                        <div className={`mega-drawer cloud-space-buy ${
                            activeMenu === "space" ? "active" : ""
                        }`}>
                            <div className="about-buy-cloud-space-buy">
                                <div className="know-about-this-buy-cloud-space-buy">
                                <p >در رابطه با این محصول بیشتر بدانید</p>
                                </div>
                                <article className="mega-menu-article">
                                    <img src="/images/cloud img.jpg" alt="cloud img"/>
                                    <p>فضای ابری چیست و چه مزایا و کاربرد هایی دارد؟</p>
                                    <span>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="buy-other-services submenu-item" data-target="other-sevises"
                    onMouseEnter={() => setActiveMenu("other")}
                    >
                        <p className="anotherdiv">سایر خدمات
                        <span className="drawer-for-all-products-icon">
                            <ion-icon className="forward-icon" name="chevron-forward-outline"></ion-icon>
                        </span>
                        </p>
                        <div className={`mega-drawer other-sevises ${
                            activeMenu === "other" ? "active" : ""
                        }`}>
                            <div className="buy-pass">
                                <p>خرید PaaS</p>
                            </div>
                            <div className="buy-privite-cloud">
                                <p>خرید ابر خصوصی</p>
                            </div>
                            <div className="buy-database">
                                <p>کلاستر دیتابیس</p>
                            </div>
                            <div className="buy-orginization-email">
                                <p>ایمل سازمانی</p>
                            </div>
                            <div className="buy-data-center">
                                <p>فضای دیتاسنتر</p>
                            </div>
                            <div className="buy-document">
                                <p>مستندات</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProductsDrawer