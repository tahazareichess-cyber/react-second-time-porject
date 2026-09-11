

function MobileHostBuy ({active}){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="mobile-host-buy" data-parent="mobile-all-pro">
            <a href="#">هاست ابری</a>
            <a href="#">هاست دانلود</a>
            <a href="#">هاست وردپرس</a>
            <a href="#">هاست لینوکس</a>
            <a href="#">هاست اختصاصی</a>
            <a href="#">هاست پربازدید</a>
            <a href="#">هاست ایران</a>
            <a href="#">هاست نمایندگی</a>
            <a href="#">هاست ووکامرس</a>
        </div>
    );
}

export default MobileHostBuy 