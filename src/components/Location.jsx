import React,{useRef,useState} from 'react';

function Location (){
    const sliderRef = useRef(null); 
    const [isDragging, setIsDragging] = useState(false); 
    const startX = useRef(0); 
    const startScrollLeft = useRef(0);

    function handlePointerDown(event) { 
        const slider = sliderRef.current; 
        if (!slider) return; 
        if (slider.scrollWidth <= slider.clientWidth) { 
            return; 
        } 
        setIsDragging(true); 
        startX.current = event.clientX; 
        startScrollLeft.current = slider.scrollLeft; 
        slider.setPointerCapture(event.pointerId); 
    } 
    function handlePointerMove(event) { 
        if (!isDragging) return; 
        const slider = sliderRef.current; 
        if (!slider) return; 
        event.preventDefault(); 
        const distance = event.clientX - startX.current; 
        slider.scrollLeft = startScrollLeft.current - distance; 
    } 
    function handlePointerUp() { 
        setIsDragging(false); 
    }
    return (
        <section className="locations">
            <div className="location-header">
                <div className="location-header-right">
                    <h2>انواع سرور‌‌‌‌ مجازی در لوکیشن‌های متنوع</h2>
                    <p>VPSهای پرسرعت و قدرتمند در سرتاسر جهان</p>
                </div>
                <div className="location-header-left">
                    <a href="#">
                        مشاهده همه سرور های مجازی
                        <span>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </span>
                    </a>
                </div>
            </div>
            <div 
            ref={sliderRef} 
            className={`location-cards ${ isDragging ? 'dragging' : '' }`} 
            onPointerDown={handlePointerDown} 
            onPointerMove={handlePointerMove} 
            onPointerUp={handlePointerUp} 
            onPointerCancel={handlePointerUp} 
            >
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی ایران</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">سرعت داخلی بینظیر با ترافیک نیم بها; سرور ایران برای سایت های پر ترافیک و خدمات داخلی عالی است</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی آلمان</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">زیرساخت قدرتمند پینگ پایین به اروپا و آپتایم بالا ; انتخاب حرفه ای ها برای میزبانی سریع و امن</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی ترکیه</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">لوکیشن نزدیک سرعت بالا برای کاربران ایرانی; متناسب با سایتهایی با مخاطب فارسی زبان و منطقه ای</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی کانادا</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">پایداری مثال زدنی با قوانین سختگیرانه حفظ حریم خصوصی; مناسب برای میزبانی پروژه های حساس و مطمعن</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی سوئد</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">آپ تایم 99/99% مناسب برای کسب و کارهای درحال توسعه باسرعت بالا و منابع قدرتمند در قلب اروپا</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی انگلیس</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">زیرساخت پایدار و سرعت جهانی ; باسرور های انگلیس همیشه بک قدم جلوتر از رقبا باشید</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی هلند</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">سریع آزاد و انعطاف پذیر با دیتا سنتر های پیشرفته در قلب اروپا برای تجربه ای بدون محدودیت</p>
                </article>
                <article className="location-card">
                    <div className="location-article-header">
                        <img src="/images/canada-server.png" alt=""/>
                        <div className="location-title">
                            <h3>سرور مجازی فرانسه</h3>
                            <p>
                                تا 19% تخففیف
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="location-desc">زیرساختی قدرتمند با پینگ پایین منابع مقیاس پذیر با سرعت و امنیت بالا در دیتاسنتر های پیشرفته و بروز</p>
                </article>
            </div>
        </section>
    );
}

export default Location