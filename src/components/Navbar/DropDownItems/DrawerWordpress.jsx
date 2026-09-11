

function DrawerWrodpress ({ active }){

    return (
        <div className={`mega-drawer drawer-wordpress-container wordpress main-drawer ${
                            active ? "active" : ""
                        }`}>    
            <div className="drawer-wordpress">
                <div className="wordpress-intial">
                    <h3>هاست وردپرس</h3>
                    <p>مناسب برای سایت های پر بازدید وردپرسی</p>
                </div>
                <div className="wordpress-items">
                    <div className="wordpress-first-item">
                        <span><ion-icon name="barcode-outline"></ion-icon></span>
                        <p>up to</p>
                        <p>10000 MB HDD</p>
                    </div>
                </div>
                <div className="wordpress-items">
                    <div className="wordpress-second-item">
                        <span><ion-icon name="desktop-outline"></ion-icon></span>
                        <p>up to</p>
                        <p>4 vCPU</p>
                    </div>
                </div>
                <div className="wordpress-items">
                    <div className="wordpress-third-item">
                        <span><ion-icon name="bug-outline"></ion-icon></span>
                        <p>up to</p>
                        <p>4000 MB RAM</p>
                    </div>
                </div>
                <div className="wordpress-payment">
                    <p>
                        شروع قیمت از <br/> <b>610,000</b> <br/> تومان / ماهانه
                    </p>
                </div>
                <span className="arrow-to-left">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
            </div>
            <div className="drawer-wordpress">
                <div className="wordpress-intial">
                    <h3>هاست اختصاصی</h3>
                    <p>مناسب برای پروژه بزرگ وردپرسی</p>
                </div>
                <div className="wordpress-items">
                    <div className="wordpress-first-item">
                        <span><ion-icon name="barcode-outline"></ion-icon></span>
                        <p>up to</p>
                        <p>50000 MB HDD</p>
                    </div>
                </div>
                <div className="wordpress-items">
                    <div className="wordpress-second-item">
                        <span><ion-icon name="desktop-outline"></ion-icon></span>
                        <p>up to</p>
                        <p>12 vCPU</p>
                    </div>
                </div>
                <div className="wordpress-items">
                    <div className="wordpress-third-item">
                        <span><ion-icon name="bug-outline"></ion-icon></span>
                        <p>up to</p>
                        <p>24000 MB RAM</p>
                    </div>
                </div>
                <div className="wordpress-payment">
                    <p>
                        شروع قیمت از <br/> <b>4,960,000</b> <br/> تومان / ماهانه
                    </p>
                </div>
                <span className="arrow-to-left">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
            </div>
        </div>
    );
}

export default DrawerWrodpress