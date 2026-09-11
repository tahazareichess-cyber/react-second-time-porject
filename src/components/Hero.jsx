import React,{useState,useRef} from 'react'

function Hero (){

const [currentSlide, setCurrentSlide] = useState(0);

const [isDragging, setIsDragging] = useState(false);

const startX = useRef(0);
const currentX = useRef(0);

const totalSlides = 4;

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

    // Minimum drag distance
    const threshold = 50;

    if (difference < -threshold) {
        // Drag left → next slide
        setCurrentSlide(prev =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    }

    if (difference > threshold) {
        // Drag right → previous slide
        setCurrentSlide(prev =>
            prev === 0 ? totalSlides - 1 : prev - 1
        );
    }

    setIsDragging(false);
}



    return (
        <section className="hero-section">
    <div className="hero-wrapper">
        <div className="hero-content">
            <h1>پارس‌پک،<br/>
            فناوری ابری به سادگی
            </h1>
            <p>از یک استارت‌آپ کوچک تا سازمانی بزرگ، پشتیبانتان هستیم.</p>
            <div className="hero-buttons">
                <a href="#" className="btn-primary">
                    شروع کنید
                </a>
                <a href="#" className="btn-secondary">
                    مشاوره رایگان
                    <span>
                        <ion-icon name="headset-outline"></ion-icon>
                    </span>
                </a>
            </div>
        </div>
        <div className="hero-carousel">
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                <div className="carousel-slide">
                    <div className="carousel-image">
                        <img src="/images/hero-servers.png" alt=""/>
                    </div>
                    <div className="carousel-content">
                        <h2>انواع سرور های ابری,اختصاصی و مجازی</h2>
                        <p>متنوع ترین پلن های سرور,همراه با بروز ترین سخت افزار های روز دنیاو منابع مقیاس پذیر</p>
                        <a href="#" className="carousel-link">
                            خرید سرور
                            <span>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="carousel-slide">
                    <div className="carousel-image">
                        <img src="/images/hero-cloud-hosting.png" alt=""/>
                    </div>
                    <div className="carousel-content">
                        <h2>انواع هاستینگ از اشتراکی تا اختصاصی</h2>
                        <p>انواع هاست ابری,وردپرس, پربازدید و اختصاصی متناسب با نیاز و بودجه شما در موقعیت های ایران و خارج</p>
                        <a href="#" className="carousel-link">
                            خرید هاست
                            <span>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="carousel-slide">
                    <div className="carousel-image">
                        <img src="/images/hero-cloud-storage.png" alt=""/>
                    </div>
                    <div className="carousel-content">
                        <h2>فضای ذخیره سازی ابری</h2>
                        <p>پر سرعت ترین هارد های SSD و HDD برای ذخیره سازی اطلاعات در موقعیت های ایران و اروپا</p>
                        <a href="#" className="carousel-link">
                            خرید فضای ابری
                            <span>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="carousel-slide">
                    <div className="carousel-image">
                        <img src="/images/hero-domian.png" alt=""/>
                    </div>
                    <div className="carousel-content">
                        <h2>متنوع ترین TLD ها برای انتخاب دامنه</h2>
                        <p>بیش از 100 نوع پسوند دامنه مختلف از معتبر ترین رجیسترارهای جهان با قیمت های مناسب و تخفیف دار </p>
                        <a href="#" className="carousel-link">
                            خرید دامنه
                            <span>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="carousel-controls">
                <button className={currentSlide === 0 ? "active" : ""}
                onClick={() => setCurrentSlide(0)} aria-label="Slide 1" >
                </button> 
                <button className={currentSlide === 1 ? "active" : ""} 
                onClick={() => setCurrentSlide(1)} aria-label="Slide 2" >
                </button> 
                <button className={currentSlide === 2 ? "active" : ""} 
                onClick={() => setCurrentSlide(2)} aria-label="Slide 3" >
                </button> 
                <button className={currentSlide === 3 ? "active" : ""} 
                onClick={() => setCurrentSlide(3)} aria-label="Slide 4" >
                </button>
            </div>
        </div>
    </div>
</section>
    );    
}

export default Hero