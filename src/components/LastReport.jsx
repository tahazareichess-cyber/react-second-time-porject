import React, { useRef, useState } from 'react';
function LastReport (){

    const [currentSlide, setCurrentSlide] = useState(0); 
    const [isDragging, setIsDragging] = useState(false); 
    const [dragOffset, setDragOffset] = useState(0); 
    const startX = useRef(0); const startOffset = useRef(0); 
    const trackRef = useRef(null); 
    const totalSlides = 3;


    function handlePointerDown(event) { 
        if (!trackRef.current) return; 
        setIsDragging(true); 
        startX.current = event.clientX; 
        startOffset.current = currentSlide * 100; 
        trackRef.current.setPointerCapture(event.pointerId); 
    } 
    
    function handlePointerMove(event) { 
        if (!isDragging) return; 
        const carouselWidth = trackRef.current?.parentElement?.clientWidth || 1; 
        const movement = ((event.clientX - startX.current) / carouselWidth) * 100; 
        setDragOffset(movement); 
    } 
    
    function handlePointerUp() { 
        if (!isDragging) return; 
        const threshold = 20; 
        if (dragOffset < -threshold) { 
            setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1) ); 
        } 
        else if (dragOffset > threshold) { 
            setCurrentSlide(prev => Math.max(prev - 1, 0) ); 
        } setDragOffset(0); setIsDragging(false); 
    } 
    
    function goToSlide(index) { 
        setCurrentSlide(index); 
        setDragOffset(0); 
    }



    return(
        <section className="last-report">
            <div className="last-report-container">
                <div className="last-report-header">
                    <div className="last-report-header-text">
                        <h2>آخرین مقالات بلاگ</h2>
                        <p>دسترسی به هزاران منابع آموزشی در مورد سرویس‌های هاستینگ</p>
                    </div>
                    <div className="last-report-header-btn-container">
                        <a href="#" className="last-report-header-btn">
                            مشاهده بلاگ پارس پک
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </a>
                    </div>
                </div>
                
                <div className="last-report-carousel-wrapper">
                    <div ref={trackRef} 
                    className={`last-report-cards ${ isDragging ? 'dragging' : '' }`} 
                    style={{ transform: ` translateX( calc( -${currentSlide * 100}% + ${dragOffset}% ) ) `, transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }} 
                    onPointerDown={handlePointerDown} 
                    onPointerMove={handlePointerMove} 
                    onPointerUp={handlePointerUp} 
                    onPointerCancel={handlePointerUp} >
                        <article className="last-report-card">
                            <img src="/images/docker-installation-debian.webp" alt=""/>
                            <h3>آموزش جامع نصب داکر در دبیان</h3>
                            <p>در این مقاله به صورت گام‌به‌گام به آموزش جامع نصب داکر در دبیان می‌پردازیم.</p>
                        </article>
                        <article className="last-report-card">
                            <img src="/images/what-is-thunderbird.png" alt=""/>
                            <h3>نرم‌افزار تاندر برد چیست و چگونه کار می‌کند؟</h3>
                            <p>در این مقاله با تاندربرد (Thunderbird) برای مدیریت ایمیل‌ها و مزایا و معایب آن آشنا شوید.</p>
                        </article>
                        <article className="last-report-card">
                            <img src="/images/What-is-Fedora_.webp" alt=""/>
                            <h3>سیستم‌عامل فدورا لینوکس چیست؟</h3>
                            <p>در این مقاله همه نکات درباره سیستم‌عامل فدورا لینوکس را به دقت و با حزئیات بررسی می‌کنیم.</p>
                        </article>
                    </div>
                </div>
                
                <div className="carousel-dots">
                    {Array.from({ length: totalSlides }).map((_, index) => ( 
                        <button key={index} className={`carousel-dot ${ 
                            currentSlide === index ? 'active' : '' 
                            }`} onClick={() => goToSlide(index)} 
                            aria-label={`نمایش مقاله ${index + 1}`} /> 
                            ))}
                </div>
            </div>
        </section>
    );
}

export default LastReport