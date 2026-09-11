

function MobileMainMenu ({ active, goToPage }){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="main-menu">
                <button className="menu-btn-item" data-target="mobile-all-pro"
                onClick={() => goToPage("mobile-all-pro")}
                >

                    <div className="menu-content">
                        <span className="title">همه محصولات پارس پک</span>
                        <div className="lower-text">
                            لیست محصولات و خدمات پارس پک
                        </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <button className="menu-btn-item" data-target="mobile-cloud-platform"
                onClick={() => goToPage("mobile-cloud-platform")}
                >

                    <div className="menu-content">
                        <span className="title">زیرساخت و پلتفرم ابری</span>
                        <div className="lower-text">
                            بستر سرویس های مدرن و مقیاس پذیر
                        </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <button className="menu-btn-item" data-target="mobile-wordpress"
                onClick={() => goToPage("mobile-wordpress")}
                >

                    <div className="menu-content">
                        <span className="title">مناسب وردپرس</span>
                        <div className="lower-text">
                            بهینه شده برای سایت های وردپرسی
                        </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <button className="menu-btn-item" data-target="mobile-documents"
                onClick={() => goToPage("mobile-documents")}
                >

                    <div className="menu-content">
                        <span className="title">دانشنامه و داکیومنت ها</span>
                        <div className="lower-text">
                            هر آنچه برای یادگیری به آن نیاز دارید
                        </div>
                    </div>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
    );
}

export default MobileMainMenu