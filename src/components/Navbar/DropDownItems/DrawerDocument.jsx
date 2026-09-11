import React , {useState} from 'react';

function DrawerDocument ({ active }){

    return (
        <div className={`mega-drawer blog-and-document-wraper documents main-drawer ${
                            active ? "active" : ""
                        }`}>
            <div className="main-drawer-content">
                <div className="drawer-for-document">
                    <div className="parspack-blog">
                        <div className="blog-heading">
                            <p>
                                بلاگ پارس پک
                            </p>
                                <span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                        </div>
                            <div className="blog-items">
                                <p  className="blog-top-text"><b>پربازدید ترین های بلاگ</b></p>
                                <p>سریع ترین روش ها برای افزایش سرعت وردپرس</p>
                                <hr/>
                                <p>راهنمای خرید هاست و دامنه;خانه اینترنتی خود را بسازید</p>
                                <hr/>
                                <p>آموزش اتصال به سرور مجازی ویندوز از طریق ریموت دکستاپ(RDC)</p>
                                <hr/>
                                <p>همه چیز درباره انواع خطای SSL و نحوه رفع آن ها</p>
                                <hr/>
                                <p>معرفی راهکارهای اساسی برای رفع خطای عدم اتصال به سرور مجازی</p>
                            </div>
                    </div>
                    <div className="parspack-document">
                        <div className="document-heading">
                            <p>
                                مستندات پارس پک
                            </p>
                                <span>
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </span>
                            
                        </div>
                        <div className="document-items">
                            <p className="document-top-text"><b>کاربردی ترین های مستندات</b></p>                        
                            
                            <p>مستندات api سرور ابری</p>
                            <hr/>
                            <p>اتصال دامنه به هاست دانلود</p>
                            <hr/>
                            <p>تهیه بکاپ از هاست ابری</p>
                            <hr/>
                            <p>مدیریت آبجکت ها</p>
                            <hr/>
                            <p>secret/config در سرویس PaaS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrawerDocument