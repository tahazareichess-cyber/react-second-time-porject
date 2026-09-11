import React,{useState,useRef} from 'react';

function Comment (){


    const [currentSlide, setCurrentSlide] = useState(0); 
    const [isDragging, setIsDragging] = useState(false); 
    const [dragOffset, setDragOffset] = useState(0); 
    const startX = useRef(0); const trackRef = useRef(null); 
    const totalSlides = 7;


    function handlePointerDown(event) { 
        setIsDragging(true); 
        startX.current = event.clientX; 
        if (trackRef.current) { 
            trackRef.current.style.transition = 'none'; 
        } 
    } 
    
    function handlePointerMove(event) { 
        if (!isDragging) return; 
        const difference = event.clientX - startX.current; 
        setDragOffset(difference); 
    } 
    
    function handlePointerUp() { 
        if (!isDragging) return; 
        const track = trackRef.current; 
        if (track) { 
            track.style.transition = 'transform 0.45s ease'; 
        } 
        const slideWidth = trackRef.current?.parentElement?.clientWidth || 1; 
        const threshold = slideWidth * 0.25; 
        if (dragOffset < -threshold) { 
            setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1) ); 
        } else if (dragOffset > threshold) { 
            setCurrentSlide(prev => Math.max(prev - 1, 0) ); 
        } setDragOffset(0); setIsDragging(false); 
    } 
    
    function handlePointerCancel() { 
        setDragOffset(0); 
        setIsDragging(false); 
        if (trackRef.current) { 
            trackRef.current.style.transition = 'transform 0.45s ease'; 
        } 
    } 
    
    function goToSlide(index) { 
        setCurrentSlide(index); 
        setDragOffset(0); 
    }

    return (
        <section className="comments">
            <div className="comments-container">
                <div className="comments-decoration">
                    <img src="/images/porsline.png" className="comment-img img-1" alt=""/>
                    <img src="/images/porsline.png" className="comment-img img-2" alt=""/>
                    <img src="/images/porsline.png" className="comment-img img-3" alt=""/>
                    <img src="/images/porsline.png" className="comment-img img-4" alt=""/>
                    <img src="/images/porsline.png" className="comment-img img-5" alt=""/>
                    <img src="/images/porsline.png" className="comment-img img-6" alt=""/>
                </div>
                <div className="comments-content">
                    <h2>نظر تعدادی از مشتریان ما در 17 سال گذشته</h2>
                    <p>قدردان اعتمادتان هستیم و منسجم‌تر از دیروز تلاش می‌کنیم</p>
                </div>
                <div className="comment-slides">
                    <div ref={trackRef} 
                    className={`comment-track ${ isDragging ? 'dragging' : '' }`} 
                    style={{ transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`, transition: isDragging ? 'none' : 'transform 0.45s ease' }} 
                    onPointerDown={handlePointerDown} 
                    onPointerMove={handlePointerMove} 
                    onPointerUp={handlePointerUp} 
                    onPointerCancel={handlePointerCancel} >
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">همراهی ماندگار در کنار خدمات باکیفیت</a>
                                <p>تعامل و پشتیبانی همیشگی در کنار سرویس با کیفیت و متنوع باعث شده که سال ها 
                                    از پارس‌پک برای زیر ساخت موبونیوز استفاده کنیم و همکاری ما تبدیل شده به یک رفاقت کاری!</p>
                                <div className="profile">
                                    <img src="/images/mehdi-shoja.png" alt=""/>
                                    <div className="profile-name">
                                        <h3>مهدی شجاری</h3>
                                        <p>موبونیوز</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">مقیاس‌پذیر برای کسب‌و‌کارهای کوچک و بزرگ</a>
                                    <p>پارس پک از اول راه یعنی ۸ سال پیش همراه ایوند بوده‌است؛ از روز اول که بودجه زیادی نداشتیم و یک سرور ساده خریداری کردیم تا امروز که از انواع و اقسام سرویس‌های ابری پارس‌پک با پشتیبانی عالی و در لحظه بهره‌مند هستیم.</p> 
                                <div className="profile"> 
                                    <img src="/images/hamidreza-ahmedi.png" alt=""/> 
                                    <div className="profile-name"> 
                                        <h3>حمیدرضا احمدی</h3> 
                                        <p>ایوند</p> 
                                    </div> 
                                </div> 
                            </article>
                        </div>
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">ستونی محکم برای ساختمان هر کسب‌و‌کار</a>
                                    <p>پارس‌پک با ارائه خدمات و پشتیبانی حرفه‌ای، ضامنی برای اعتماد و رشد ویرگول
                                        در ۲ سال اخیر بوده است. همکاری با پارس‌پک در این دو سال به دلیل پشتیبانی لحظه‌ای و عملکرد بی‌نقص سرورها مانند ستونی محکم برای ساختمان ویرگول بوده است.</p> 
                                <div className="profile"> 
                                    <img src="/images/ali-ajodnia.png" alt=""/> 
                                    <div className="profile-name"> 
                                        <h3>علی آجودانیان</h3> 
                                        <p>ویرگول</p> 
                                    </div> 
                                </div> 
                            </article>
                        </div>
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">شریک مورد ‌اعتماد با پشتیبانی بی‌نظیر</a>
                                    <p>ما از سال ۹۶ با استفاده از خدمات پارس‌پک، توانستیم بدون دغدغه‌ زیرساخت،
                                        تمام تمرکز خود را روی مسائل کسب‌وکاری بگذاریم. پشتیبانی بی نظیر در کنار ارتقای منابع و شبکه‌ای مورد نیاز ما، باعث شده تا پارس‌پک همواره شریک مورد اعتماد ما باشد.</p> 
                                <div className="profile"> 
                                    <img src="/images/hamidreza-nazari.png" alt=""/> 
                                    <div className="profile-name"> 
                                        <h3>حمیدرضا نظری</h3> 
                                        <p>پرس لاین</p> 
                                    </div> 
                                </div> 
                            </article>
                        </div>
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">هم‌تراز با سرویس‌دهندگان بین‌المللی</a>
                                    <p>آن‌چه باعث شد جستجوی طولانی ما در همکاری با شرکت‌های مشابه به پایان برسد و یک دهه با پارس‌پک بمانیم،
                                        پشتیبانی عالی و همراهی بسیار صمیمانه بود. پارس‌پک در مقایسه با سرویس‌دهندگان بین‌المللی، نمونه‌ای امیدوارکننده و رضایت‌‌بخش است.</p> 
                                <div className="profile"> 
                                    <img src="/images/mohammadreza.png" alt=""/> 
                                    <div className="profile-name"> 
                                        <h3>محمد رضا شعبانعلی</h3> 
                                        <p>متمم</p> 
                                    </div> 
                                </div> 
                            </article>
                        </div>
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">زیرساخت قوی و تیم فنی حرفه‌ای</a>
                                    <p>زیرساخت قوی و تیمی حرفه‌ای؛ دو عامل مهمی که در شریک زیرساختی خود باید دنبالش باشید
                                        و پارس‌پک هر دو را دارد. سرورهای قابل اطمینان پارس‌پک تضمین می‌کنند که وب‌سایت ما حتی در اوج ترافیک نیز بدون مشکل در دسترس باشد.</p> 
                                <div className="profile"> 
                                    <img src="/images/mani-ghasemi.png" alt=""/> 
                                    <div className="profile-name"> 
                                        <h3>مانی قاسمی</h3> 
                                        <p>دیجیاتو</p> 
                                    </div> 
                                </div> 
                            </article>
                        </div>
                        <div className="slide">
                            <article className="comment-slide">
                                <a href="#">تکیه‌گاه فنی مطمئن و خدمات باکیفیت</a>
                                    <p>پارس‌پک برای زومیت همواره تکیه‌گاه‌ فنی مطمئن بوده است. در طول بیش از ۱۰ سال میزبانی 
                                        از سرویس‌های ما، پارس‌پک همواره برای بهبود کیفیت ارائه خدمات به میلیون‌ها بازدیدکننده زومیت نقش موثر داشته است.</p> 
                                <div className="profile"> 
                                    <img src="/images/massod.png" alt=""/> 
                                    <div className="profile-name"> 
                                        <h3>مسعود یوسف نژاد</h3> 
                                        <p>زومیت</p> 
                                    </div> 
                                </div> 
                            </article>
                        </div>
                    </div>
                </div>
                <div className="comments-dots">
                    {Array.from({ length: totalSlides }).map((_, index) => ( 
                        <button 
                        key={index} className={ currentSlide === index ? 'active' : '' } 
                        onClick={() => goToSlide(index)} aria-label={`نمایش نظر ${index + 1}`} >
                        </button>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Comment