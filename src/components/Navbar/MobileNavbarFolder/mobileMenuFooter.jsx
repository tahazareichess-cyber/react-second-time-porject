function MobileMenuFooter ({active}){
    
    return (
        <div className={`menu-footer ${active ? "active" : ""}`}>
            <a href="#" className="mobile-callus-btn-footer">
                <ion-icon name="call"></ion-icon>
                تلفن تماس
            </a>
            <a href="#" className="mobile-enter-btn-footer">
                ورود به پنل
            </a> 
        </div>
    );
}

export default MobileMenuFooter