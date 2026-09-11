import React,{useRef,useState} from 'react';

function HostServer (){
    const sliderRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    function handlePointerDown(event) { 
        const slider = sliderRef.current; 
        if (!slider) return; 
        if (slider.scrollWidth <= slider.clientWidth) { 
            return; 
        }
        setIsDragging(true); 
        startX.current = event.clientX; 
        startScrollLeft.current = slider.scrollLeft; 
        slider.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(event) { 
        if (!isDragging) return; 
        const slider = sliderRef.current; 
        if (!slider) return; 
        event.preventDefault(); 
        const distance = event.clientX - startX.current; 
        slider.scrollLeft = startScrollLeft.current - distance; 
    } 
    
    function handlePointerUp() { 
        const slider = sliderRef.current; 
        setIsDragging(false); if (!slider) return; 
        slider.style.cursor = "grab"; 
    }
    return(
        <div className="server-host-a">
            <div ref={sliderRef} className="server-host-card" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} >
                <a href="#">سرور خارجی</a>
                <a href="#">سرور ایرانی</a>
                <a href="#">سرور لینوکس</a>
                <a href="#">سرور مجازی خارج</a>
                <a href="#">سرور مجازی ایران</a>
                <a href="#">سرور مجازی میکروتک</a>
                <a href="#">هاست ابری</a>
                <a href="#">هاست نمایندگی</a>
                <a href="#">هاست لینوکس</a>
                <a href="#">هاست ایران</a>
            </div>
        </div>
    );
}

export default HostServer