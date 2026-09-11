

function MobileAllPro ({ active, goToPage }){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="mobile-all-pro" data-parent="main-menu">
                <button className="menu-btn-item" data-target="mobile-server-buy"
                onClick={() => goToPage("mobile-server-buy")}
                >
                    خرید سرور
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <button className="menu-btn-item" data-target="mobile-host-buy"
                onClick={() => goToPage("mobile-host-buy")}
                >
                    خرید هاست
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <a href="#">خرید CDN</a>
                <button className="menu-btn-item" data-target="mobile-domain-buy"
                onClick={() => goToPage("mobile-domain-buy")}
                >
                    خرید دامنه
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
                <a href="#">خرید SSL</a>
                <a href="#">خرید فضای ابری</a>
                <button className="menu-btn-item" data-target="mobile-other-services"
                onClick={() => goToPage("mobile-other-services")}
                >
                    سایر خدمات
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
    );
}

export default MobileAllPro