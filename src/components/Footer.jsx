import React , {useState} from 'react';

function Footer (){

    const [openSlide, setOpenSlide] = useState(null);
    function toggleSlide(index) {
        setOpenSlide(openSlide === index ? null : index);
    }
    
    return (
        <>
        <footer className="footer">
    <div className="footer-container">
        <div className="footer-right">
            <img src="/images/sit-logo-text-white.png" alt="لوگوی پارس پک"/>
            <p>پارس‌پک؛ اولین ارائه دهنده خدمات ابری
                 در ایران، با استفاده از به‌روزترین فناوری‌های 
                دنیا و با کمک تیم پشتیبانی چابک و مسئول خود،‌ خدمات حرفه‌ای با
                 ثبات و مطمئن را به کاربران خود ارائه می‌دهد.</p>
            <div className="footer-right-btns">
                <a href="#" className="persian-golf-btn">حامی خلیج فارس</a>
                <a href="#" className="linux-btn">حامی لینوکس</a>
                <a href="#" className="servises-station">وضعیت سرویس ها</a>
            </div>
        </div>
        <div className="footer-left">
            <div className="footer-column">
                <div className="footer-server-header">
                    <a href="#">سرور</a>
                </div>
                <div className="footer-server-content">
                    <ul>
                        <li><a href="#">سرور ابری</a></li>
                        <li><a href="#">سرور ابری ایران</a></li>
                        <li><a href="#">سرور ابری اروپا</a></li>
                        <li><a href="#">سرور ابری آلمان</a></li>
                        <li><a href="#">سرور ابری ویندوز</a></li>
                        <li><a href="#">سرور ابری لینوکس</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-online-server-header">
                    <a href="#">سرور مجازی</a>
                </div>
                <div className="footer-online-server-content">
                    <ul>
                        <li><a href="#">سرور مجازی ایران</a></li>
                        <li><a href="#">سرور مجازی خارج</a></li>
                        <li><a href="#">سرور مجازی ترید</a></li>
                        <li><a href="#">سرور مجازی میکروتک</a></li>
                        <li><a href="#">سرور مجازی کانادا</a></li>
                        <li><a href="#">سرور مجازی ترکیه</a></li>
                        <li><a href="#">سرور مجازی لینوکس</a></li>
                        <li><a href="#">سرور مجازی ویندوز</a></li>
                        <li><a href="#">سرور مجازی نامحدود</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-host-header">
                    <a href="#">هاست و دامنه</a>
                </div>
                <div className="footer-host-content">
                    <ul>
                        <li><a href="#">خرید دامنه</a></li>
                        <li><a href="#">هاست ابری</a></li>
                        <li><a href="#">هاست لینوکس</a></li>
                        <li><a href="#">هاست وردپس</a></li>
                        <li><a href="#">هاست دانلود</a></li>
                        <li><a href="#">هاست نمایندگی</a></li>
                        <li><a href="#">هاست ایران</a></li>
                        <li><a href="#">هاست اختصاصی</a></li>
                        <li><a href="#">هاست پربازدید</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-privite-server-header">
                    <a href="#">سرور اختصاصی</a>
                </div>
                <div className="footer-privite-server-content">
                    <ul>
                        <li><a href="#">سرور اختصاصی ایران</a></li>
                        <li><a href="#">سرور اختصاصی آلمان</a></li>
                        <li><a href="#">سرور اختصاصی لینوکس</a></li>
                        <li><a href="#">سرور اختصاصی ویندوز</a></li>
                        <li><a href="#">سرور اختصاصی خارج</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-other-header">
                    <a href="#">دیگر خدمات</a>
                </div>
                <div className="footer-other-content">
                    <ul>
                        <li><a href="#">خرید SSL</a></li>
                        <li><a href="#">خرید CDN</a></li>
                        <li><a href="#">خرید فضای ابری</a></li>
                        <li><a href="#">خرید PaaS  ایرانی</a></li>
                        <li><a href="#">پشتیبانی VIP</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-pars-header">
                    <a href="#">پارس پک</a>
                </div>
                <div className="footer-pars-content">
                    <ul>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                        <li><a href="#">دعوت به همکاری</a></li>
                        <li><a href="#">قوانین خرید</a></li>
                        <li><a href="#">باگ بانتی</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-i">
                <img src="/images/super-server.png" alt=""/>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
            <div className="footer-bottom-right">
                <p>کلیه حقوق برای پارس پک محفوظ می باشد.</p>
            </div>
            <div className="footer-bottom-iconts">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>  
            <div className="footer-bottom-left">
                <p>Copyright © 2026 ParsPack Cloud Computing Technology , All Rights Reserved.</p>
            </div>      
        </div>
</footer>
<section className="footer-mobile">
    <div className="footer-left-mobile">
        <div className={`footer-column-mobile ${openSlide === 0 ? "active" : ""}`}>
            <div className={`footer-header-mobile`}>
                <button type="button"
            aria-expanded={openSlide === 0}
            onClick={() => toggleSlide(0)}>
                    <span>سرور</span>
                    <span className="arrow">⌄</span>
                </button>
            </div>
            <div className="footer-content-mobile">
                <ul>
                    <li><a href="#">سرور ابری</a></li>
                    <li><a href="#">سرور ابری ایران</a></li>
                    <li><a href="#">سرور ابری اروپا</a></li>
                    <li><a href="#">سرور ابری آلمان</a></li>
                    <li><a href="#">سرور ابری ویندوز</a></li>
                    <li><a href="#">سرور ابری لینوکس</a></li>
                </ul>
            </div>
        </div>
        <div className={`footer-column-mobile ${openSlide === 1 ? "active" : ""}`}>
            <div className={`footer-header-mobile`}>
                <button type="button"
            aria-expanded={openSlide === 1}
            onClick={() => toggleSlide(1)}>
                    <span>سرور مجازی</span>
                    <span className="arrow">⌄</span>
                </button>
            </div>
            <div className="footer-content-mobile">
                <ul>
                    <li><a href="#">سرور مجازی ایران</a></li>
                    <li><a href="#">سرور مجازی خارج</a></li>
                    <li><a href="#">سرور مجازی ترید</a></li>
                    <li><a href="#">سرور مجازی میکروتک</a></li>
                    <li><a href="#">سرور مجازی کانادا</a></li>
                    <li><a href="#">سرور مجازی ترکیه</a></li>
                    <li><a href="#">سرور مجازی لینوکس</a></li>
                    <li><a href="#">سرور مجازی ویندوز</a></li>
                    <li><a href="#">سرور مجازی نامحدود</a></li>
                </ul>
            </div>
        </div>
        <div className={`footer-column-mobile ${openSlide === 2 ? "active" : ""}`}>
            <div className={`footer-header-mobile`}>
                <button type="button"
            aria-expanded={openSlide === 2}
            onClick={() => toggleSlide(2)}>
                    <span>هاست و دامنه</span>
                    <span className="arrow">⌄</span>
                </button>
            </div>
            <div className="footer-content-mobile">
                <ul>
                    <li><a href="#">خرید دامنه</a></li>
                    <li><a href="#">هاست ابری</a></li>
                    <li><a href="#">هاست لینوکس</a></li>
                    <li><a href="#">هاست وردپس</a></li>
                    <li><a href="#">هاست دانلود</a></li>
                    <li><a href="#">هاست نمایندگی</a></li>
                    <li><a href="#">هاست ایران</a></li>
                    <li><a href="#">هاست اختصاصی</a></li>
                    <li><a href="#">هاست پربازدید</a></li>
                </ul>
            </div>
        </div>
        <div className={`footer-column-mobile ${openSlide === 3 ? "active" : ""}`}>
            <div className={`footer-header-mobile`}>
                <button type="button"
            aria-expanded={openSlide === 3}
            onClick={() => toggleSlide(3)}>
                    <span>سرور اختصاصی</span>
                    <span className="arrow">⌄</span>
                </button>
            </div>
            <div className="footer-content-mobile">
                <ul>
                    <li><a href="#">سرور اختصاصی ایران</a></li>
                    <li><a href="#">سرور اختصاصی آلمان</a></li>
                    <li><a href="#">سرور اختصاصی لینوکس</a></li>
                    <li><a href="#">سرور اختصاصی ویندوز</a></li>
                    <li><a href="#">سرور اختصاصی خارج</a></li>
                </ul>
            </div>
        </div>
        <div className={`footer-column-mobile ${openSlide === 4 ? "active" : ""}`}>
            <div className={`footer-header-mobile`}>
                <button type="button"
            aria-expanded={openSlide === 3}
            onClick={() => toggleSlide(3)}>
                    <span>دیگر خدمات</span>
                    <span className="arrow">⌄</span>
                </button>
            </div>
            <div className="footer-content-mobile">
                <ul>
                    <li><a href="#">خرید SSL</a></li>
                    <li><a href="#">خرید CDN</a></li>
                    <li><a href="#">خرید فضای ابری</a></li>
                    <li><a href="#">خرید PaaS  ایرانی</a></li>
                    <li><a href="#">پشتیبانی VIP</a></li>
                </ul>
            </div>
        </div>
        <div className={`footer-column-mobile ${openSlide === 5 ? "active" : ""}`}>
            <div className={`footer-header-mobile`}>
                <button type="button"
            aria-expanded={openSlide === 5}
            onClick={() => toggleSlide(5)}>
                    <span>پارس پک</span>
                    <span className="arrow">⌄</span>
                </button>
            </div>
            <div className="footer-content-mobile">
                <ul>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">سوالات متداول</a></li>
                    <li><a href="#">دعوت به همکاری</a></li>
                    <li><a href="#">قوانین خرید</a></li>
                    <li><a href="#">باگ بانتی</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-right-btns">
        <a href="#" className="persian-golf-btn">حامی خلیج فارس</a>
        <a href="#" className="linux-btn">حامی لینوکس</a>
        <a href="#" className="servises-station">وضعیت سرویس ها</a>
    </div>
    <div className="footer-bottom-mobile">
        <div className="footer-bottom-right-mobile">
            <img src="/images/sit-logo-text-white.png" alt=""/>
        </div>
        <div className="footer-bottom-iconts-mobile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="footer-bottom-left-mobile">
            <p>کلیه حقوق برای پارس پک محفوظ می باشد.</p>
        </div>  
        
    </div>
</section>
</>
    );
}

export default Footer