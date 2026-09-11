import React ,{useState} from 'react';

function DrawerRightSide ({ hoveredItem, setHoveredItem }) {


    
    return(
        <div className="drawer-right-side">
            <div className={`menu-item first-row ${ hoveredItem === "all-products" ? "active" : "" }`}
             data-target="all-products"
             onMouseEnter={() => setHoveredItem("all-products")}>
                <h3> 
                    <span className="first-row-icon">
                        <ion-icon  name="basket-outline"></ion-icon>
                    </span>
                    همه محصولات پاس پک
                    <span className="first-row-icon">
                        <ion-icon className="forward-icon"  name="chevron-forward-outline"></ion-icon>
                    </span>
                </h3>
                <p>لیست محصولات و خدمات پارس پک</p>
            </div>
            <div className={`menu-item second-row ${ hoveredItem === "cloud-platform" ? "active" : "" }`} 
            data-target="cloud-platform" onMouseEnter={() => setHoveredItem("cloud-platform")} >
                <h3> 
                    <span className="second-row-icon">
                        <ion-icon name="cloud-outline"></ion-icon>
                    </span>
                    زیر ساخت و پلتفرم ابری
                    <span className="second-row-icon">
                        <ion-icon className="forward-icon"  name="chevron-forward-outline"></ion-icon>
                    </span>
                </h3>
                <p>بستر سرویس های مدرن و مقیاس پذیر</p>
            </div>
            <div className={`menu-item third-row ${ hoveredItem === "wordpress" ? "active" : "" }`} 
            data-target="wordpress" onMouseEnter={() => setHoveredItem("wordpress")} >
                <h3> 
                    <span className="third-row-icon">
                        <ion-icon name="cloud-outline"></ion-icon>
                    </span>
                    مناسب وردپرس
                    <span className="third-row-icon">
                        <ion-icon className="forward-icon"  name="chevron-forward-outline"></ion-icon>
                    </span>
                </h3>
                <p>بهینه شده برای سایت های وردپرسی</p>
            </div>
            <div className={`menu-item fourth-row ${ hoveredItem === "documents" ? "active" : "" }`} 
            data-target="documents" onMouseEnter={() => setHoveredItem("documents")} >
                <h3> 
                    <span className="fourth-row-icon">
                        <ion-icon name="book-outline"></ion-icon>
                    </span>
                        دانشنامه و داکیومنت ها
                    <span className="fourth-row-icon">
                        <ion-icon className="forward-icon" name="chevron-forward-outline"></ion-icon>
                    </span>
                </h3>
                <p>هر آنچه برای یادگیری به آن نیاز دارید</p>
            </div>
        </div>
    );
}

export default DrawerRightSide