
function BackupTypes () {

    return (
        <section className="backup-types">
            <div className="backup-types-container">
                <div className="backup-types-header">
                    <h2>انواع پشتیبانی</h2>
                    <p>همه امکانات و ویژگی‌هایی که به آن‌ها نیاز دارید</p>
                </div>
                <div className="backup-types-cards">
                    <article className="backup-types-card">
                        <span className="backup-types-icon">
                            <ion-icon name="call"></ion-icon>
                        </span>
                        <h3>پشتیبانی تلفنی</h3>
                        <p>امکان تماس تلفنی با کارشناسان برای رفع مشکلات شما.</p>
                    </article>
                    <article className="backup-types-card">
                        <span className="backup-types-icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <h3>پشتیبانی تیکتی</h3>
                        <p>ثبت درخواست کتبی در قالب تیکت و پیگیری آن توسط کارشناسان.</p>
                    </article>
                    <article className="backup-types-card">
                        <span className="backup-types-icon">
                            <ion-icon name="chatbubbles"></ion-icon>
                        </span>
                        <h3>پشتیبانی مسنجری پایه</h3>
                        <p>پاسخ‌دهی سریع در پیام‌رسان توسط تیم پشتیبانی عمومی.</p>
                    </article>
                    <article className="backup-types-card">
                        <span className="backup-types-icon">
                            <ion-icon name="add-sharp"></ion-icon>
                        </span>
                        <h3>پشتیبانی مسنجری پیشرفته</h3>
                        <p>ارتباط مستقیم با کارشناس اختصاصی برای پاسخ‌دهی فوری.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default BackupTypes