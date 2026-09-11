

function MobileCloudPlatform ({active,goToPage}){

    return (
        <div className={`menu-page ${active ? "active" : ""}`} id="mobile-cloud-platform" data-parent="main-menu">
            <button className="menu-btn-item" data-target="mobile-cloud-structure"
            onClick={() => goToPage("mobile-cloud-structure")}
            >
                زیرساخت ابری
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            <a href="#">پلتفرم آماده (PaaS)</a>
            <a href="#">DevOps و CI/CD</a>
            <a href="#">سرویس های سازمانی</a>
        </div>
    );
}

export default MobileCloudPlatform