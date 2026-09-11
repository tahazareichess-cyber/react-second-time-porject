import React ,{useState} from 'react';
import DrawerRightSide from './DropDownItems/DrawerRightSide.jsx';
import AllProductsDrawer from './DropDownItems/AllProductsDrawer.jsx';
import DrawerCloudStructure from './DropDownItems/DrawerCloudStructure.jsx';
import DrawerWordpress from './DropDownItems/DrawerWordpress.jsx';
import DrawerDocument from './DropDownItems/DrawerDocument.jsx';
import MegamenuFooter from './DropDownItems/MegamenuFooter.jsx';
function ProductsDropdown({ openMenu }){


    const [hoveredItem, setHoveredItem] = useState("all-products");

    return (
        <div className={`products-container ${openMenu ? 'show' : ''}`} id="products-dropdown"
        >
            <DrawerRightSide 
            hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
            <AllProductsDrawer active={hoveredItem === "all-products"} />
            <DrawerCloudStructure active={hoveredItem === "cloud-platform"} />
            <DrawerWordpress active={hoveredItem === "wordpress"} /> 
            <DrawerDocument active={hoveredItem === "documents"} />
            <MegamenuFooter/>
        </div>
    );
}

export default ProductsDropdown