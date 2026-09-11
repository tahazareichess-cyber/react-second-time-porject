import React ,{useRef,useState} from 'react';

function MostPopular(){

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const startX = useRef(0); 
    const currentX = useRef(0); 
    
    const totalCards = 11;

    function getCardsPerView() {
        if (window.innerWidth <= 767) { 
            return 1; 
        } if (window.innerWidth <= 1024) { 
            return 2; } 
        return 4; 
    }

    function getMaxSlide() { 
        return Math.max(0, totalCards - getCardsPerView()); 
    }

    function handleNext() { 
        setCurrentSlide(prev => { const maxSlide = getMaxSlide(); 
            return prev >= maxSlide ? 0 : prev + 1; }); 
    }

    function handlePrevious() { 
        setCurrentSlide(prev => { const maxSlide = getMaxSlide(); 
            return prev <= 0 ? maxSlide : prev - 1; 
        }); 
    }

    function handlePointerDown(event) {
        setIsDragging(true);
        startX.current = event.clientX; 
        currentX.current = event.clientX; 
    }

    function handlePointerMove(event) { 
        if (!isDragging) return; 
        currentX.current = event.clientX; 
    }

    function handlePointerUp() { 
        if (!isDragging) return; 
        const difference = currentX.current - startX.current; 
        const threshold = 50; 
        if (difference < -threshold) { 
            handleNext(); 
        } 
        if (difference > threshold) { 
            handlePrevious(); 
        } setIsDragging(false); 
    }

    return(
        <section className="most-popular">
    <div className="popular-wrapper">
        <div className="popular-content">
            <h1>جعبه ابزاری به وسعت کسب و کار شما</h1>
            <p>پرطرفدارترین محصولات پارس‌پک</p>
        </div>
        <div className="popular-slider">
            <button className="popular-btn prev"
            onClick={handlePrevious}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <div className="popular-viewport"
            onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}>
                <div className="popular-grid"
                style={{
                            transform: `translateX(-${currentSlide * 9.1}%)`
                        }}>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/CDN.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید CDN</h2>
                            <p className="offers star">
                                <span>
                                    <ion-icon name="star-outline"></ion-icon>
                                </span>
                                کاربردی و ضروری
                            </p>
                            <p className="popular-text">شبکه توزیع محتوا برای افزایش سرعت بارگذاری وبسایت و کاهش تاخیر</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/PaaS.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید PaaS</h2>
                            <p className="offers fire">
                                <span>
                                    <ion-icon name="flame-outline"></ion-icon>
                                </span>
                                لبه تکنولوژی
                            </p>
                            <p className="popular-text">پلتفرم ابری به عنوان سرویس بستری اماده برای توسعه برنامه های کاربردی</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/com.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید دامنه com</h2>
                            <p className="offers off">
                                <span>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </span>
                                ثبت آنی و مطمعن
                            </p>
                            <p className="popular-text">ثبت آنی دامنه uk. .net .org .com و.....با بهترین قیمت با کوتاه ترین زمان ممکن</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/ir.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید دامنه ir</h2>
                            <p className="offers off">
                                <span>
                                <ion-icon name="checkmark-outline"></ion-icon> 
                                </span>
                                ارزان تر از mic.ir
                            </p>
                            <p className="popular-text">خرید و ثبت دامنه ir درکوتاه ترین زمان ممکن با قیمت مناسب</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/Private-Host.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید هاست اختصاصی</h2>
                            <p className="offers check-round">
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                                تا 19% تخفیف
                            </p>
                            <p className="popular-text">دارای منابع کاملا اختصاصی سخت افزار قدرتمند و پشتیبانی ویژه</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/WP-Host.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید هاست وردپرس</h2>
                            <p className="offers check-round">
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                                تا 19% تخفیف
                            </p>
                            <p className="popular-text">بهینه شده با وردپرس همراه با افزونه های ضروری اورجینال</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/SSL.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید SSL</h2>
                            <p className="offers fire">
                                <span>
                                    <ion-icon name="flame-outline"></ion-icon>
                                </span>
                                قیمت رقابتی
                            </p>
                            <p className="popular-text">افزایش امنیت و رمزگزاری اطلاعات و امکان نصب SSL شخصی</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/Group-1171281927.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید سرور ابری</h2>
                            <p className="offers off">
                                <span>
                                    <ion-icon name="checkmark-outline"></ion-icon> 
                                </span>
                                منعطف و مقیاس پذیر
                            </p>
                            <p className="popular-text">امکان استفاده از یک سرور با استفاده از سیستم عامل دلخواه و افزایش آنی منابع</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/Virtiul-Server.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید سرور مجازی</h2>
                            <p className="offers check-round">
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                                تا 19% تخفیف
                            </p>
                            <p className="popular-text">تحویل آنی با سرعت پرت بالا با منابع تا 72 هسته cpu و 256گیگ RAM</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/Private-Server.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید سرور اختصاصی</h2>
                            <p className="offers check-round">
                                <span>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </span>
                                تا 19% تخفیف
                            </p>
                            <p className="popular-text">نسل جدیدی از یک سرور تمام اختصاصی قدرتمند در دو گروه ماکرو و هایبرید</p>
                        </div>
                    </article>
                    <article className="popular-card">
                        <div className="card-image">
                            <img src="/images/Host-Download.png" alt=""/>
                        </div>

                        <div className="card-content">
                            <h2>خرید هاست دانلود</h2>
                            <p className="offers off">
                                <span>
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </span>
                                پایداری و سرعت بالا
                            </p>
                            <p className="popular-text">امکان به اشتراکگذاری فایل ها با آپ تایم بالا با سرعت دانلود فوقالعاده</p>
                        </div>
                    </article>
                </div>
            </div>
            <button className="popular-btn next"
            onClick={handleNext}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    </div>
</section>
    );
};

export default MostPopular