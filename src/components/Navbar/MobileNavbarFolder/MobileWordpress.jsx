

function MobileWordpress ({active}){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="mobile-wordpress" data-parent="main-menu">
                <div className="wordpress-hosts">

                    <div className="wordpress-card">

                        <div className="wordpress-card-header">
                            <h3>هاست وردپرس</h3>
                            <p>مناسب برای سایت های پر بازدید وردپرسی</p>
                        </div>

                        <div className="wordpress-spec">
                            <div className="wordpress-spec-icon">
                                <span><ion-icon name="barcode-outline"></ion-icon></span>
                            </div>
                            <div className="wordpress-spec-info">
                                <p>up to</p>
                                <p>10000 MB HDD</p>
                            </div>
                        </div>

                        <div className="wordpress-spec">
                            <div className="wordpress-spec-icon">
                                <span><ion-icon name="desktop-outline"></ion-icon></span>
                            </div>
                            <div className="wordpress-spec-info">
                                <p>up to</p>
                                <p>4 vCPU</p>
                            </div>
                        </div>

                        <div className="wordpress-spec">
                            <div className="wordpress-spec-icon">
                                <span><ion-icon name="bug-outline"></ion-icon></span>
                            </div>
                            <div className="wordpress-spec-info">
                                <p>up to</p>
                                <p>4000 MB RAM</p>
                            </div>
                        </div>

                        <div className="wordpress-price">
                            <p>
                                شروع قیمت از <br/>
                                <b>610,000</b><br/>
                                تومان / ماهانه
                            </p>
                        </div>

                        <span className="wordpress-card-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>

                    </div>

                    <div className="wordpress-card">

                        <div className="wordpress-card-header">
                            <h3>هاست اختصاصی</h3>
                            <p>مناسب برای پروژه بزرگ وردپرسی</p>
                        </div>

                        <div className="wordpress-spec">
                            <div className="wordpress-spec-icon">
                                <span><ion-icon name="barcode-outline"></ion-icon></span>
                            </div>
                            <div className="wordpress-spec-info">
                                <p>up to</p>
                                <p>50000 MB HDD</p>
                            </div>
                        </div>

                        <div className="wordpress-spec">
                            <div className="wordpress-spec-icon">
                                <span><ion-icon name="desktop-outline"></ion-icon></span>
                            </div>
                            <div className="wordpress-spec-info">
                                <p>up to</p>
                                <p>12 vCPU</p>
                            </div>
                        </div>

                        <div className="wordpress-spec">
                            <div className="wordpress-spec-icon">
                                <span><ion-icon name="bug-outline"></ion-icon></span>
                            </div>
                            <div className="wordpress-spec-info">
                                <p>up to</p>
                                <p>24000 MB RAM</p>
                            </div>
                        </div>

                        <div className="wordpress-price">
                            <p>
                                شروع قیمت از <br/>
                                <b>4,960,000</b><br/>
                                تومان / ماهانه
                            </p>
                        </div>

                        <span className="wordpress-card-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default MobileWordpress