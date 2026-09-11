

function MobileServerBuy ({ active, goToPage }){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="mobile-server-buy" data-parent="mobile-all-pro">
            <button className="menu-btn-item" data-target="mobile-privite-server"
            onClick={() => goToPage("mobile-privite-server")}
            >
                سرور اختصاصی
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            <button className="menu-btn-item" data-target="mobile-online-server"
            onClick={() => goToPage("mobile-online-server")}
            >
                سرور مجازی
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            <a href="#">سرور ابری</a>
        </div>
    );
}

export default MobileServerBuy