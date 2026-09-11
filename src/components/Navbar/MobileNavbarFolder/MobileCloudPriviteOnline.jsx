import React ,{useState} from 'react';

function MobileCloudPriviteOnline ({
    activeCloud,
    activePrivate,
    activeOnline,
}) {

    return (
        <>
            <div
            className={`menu-page ${activeCloud ? "active" : ""}`}
            id="mobile-cloud-structure" data-parent="mobile-cloud-platform">
                <a href="#">سرور ابری</a>
                <a href="#">سرویس PaaS</a>
                <a href="#">privite cloud</a>
                <a href="#">ذخیره سازی ابری</a>
                <a href="#">Backup & Disaster Recovery</a>
            </div>
            <div
            className={`menu-page ${activePrivate ? "active" : ""}`}
            id="mobile-privite-server" data-parent="mobile-server-buy">
                <a href="#">هایبرید سرور</a>
                <a href="#">ماکرو سرور</a>
                <a href="#">برمتال</a>
                <a href="#">سرور اختصاصی ایران</a>
            </div>
            <div
            className={`menu-page ${activeOnline ? "active" : ""}`}
            id="mobile-online-server" data-parent="mobile-server-buy">
                <a href="#">سرور مجازی ترید</a>
                <a href="#">سرور مجازی ایران</a>
                <a href="#">سرور مجازی لینوکس</a>
                <a href="#">سرور مجازی ویندوز</a>
                <a href="#">سرور مجازی خارج</a>
                <a href="#">سرور مجازی میکروتک</a>
                <a href="#">سرور مجازی آلمان</a>
                <a href="#">سرور مجازی ترکیه</a>
            </div>
        </>
    );
}

export default MobileCloudPriviteOnline