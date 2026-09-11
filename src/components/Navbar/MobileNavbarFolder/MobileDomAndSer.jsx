

function MobileDomAndSer ({activeDom,activeSer}){

    return (
        <>
            <div className={`menu-page ${activeDom ? "active" : ""}`} id="mobile-domain-buy" data-parent="mobile-all-pro">
                <a href="#">خرید دامنه ir</a>
                <a href="#">خرید دامنه com</a>
            </div>
            <div className={`menu-page ${activeSer ? "active" : ""}`} id="mobile-other-services" data-parent="mobile-all-pro">
                <a href="#">خرید PaaS</a>
                <a href="#">خرید ابر  خصوصی</a>
                <a href="#">کلاستر دیتابیس</a>
                <a href="#">ایمیل سازمانی</a>
                <a href="#">فضای دیتاسنتر</a>
                <a href="#">مستندات</a>
            </div>
        </>
    );
}

export default MobileDomAndSer