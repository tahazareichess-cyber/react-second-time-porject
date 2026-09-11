import React ,{useState} from 'react';

function DrawerCloudStructure ({ active }) {
    
    const [activeMenu, setActiveMenu] = useState("")
    return(
        <div className={`mega-drawer drawer-for-server-structure cloud-platform main-drawer ${
                            active ? "active" : ""
                        }`}>
            <div className="main-drawer-content">
                <div className="cloud-structure submenu-item" data-target="drawer-cloud-structure"
                onMouseEnter={() => setActiveMenu("cloud")}
                >
                        <p>
                            زیرساخت ابری
                            <span className="drawer-for-server-structure-icon">
                                <ion-icon className="forward-icon" name="chevron-forward-outline"></ion-icon>
                            </span>
                        </p>
                        <div className={`mega-drawer drawer-cloud-structure ${
                            activeMenu === "cloud" ? "active" : ""
                        }`}>
                            <div className="cloud-servise">
                                <p>سرویس ابری</p>
                            </div>
                            <div className="paas-servise">
                                <p>سرویس PaaS</p>
                            </div>
                            <div className="privite-cloud">
                                <p>privite cloud</p>
                            </div>
                            <div className="cloud-storage">
                                <p>ذخیره سازی ابری</p>
                            </div>  
                            <div className="backup-recovery">
                                <p>backup & diaster recovery</p>
                            </div>
                        </div>
                    <div className="ready-platforms">
                        <p>پلتفرم های آماده (PaaS)</p>
                    </div>
                    <div className="devops-soon">
                        <p>Devops و CI / CD</p><span>بزودی</span>
                    </div>
                    <div className="Organization-servise">
                        <p>سرویس های سازمانی</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrawerCloudStructure