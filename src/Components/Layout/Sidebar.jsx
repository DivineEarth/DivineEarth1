import "./Sidebar.css";



function Sidebar(){
    return(
        <div class="sidebar_cont">
            <ul class="main-menu">
                <li>Plant and gift <span class="arrow">›</span></li>
                <li>For companies <span class="arrow">›</span></li>
                <li>About us <span class="arrow">›</span></li>
            </ul>

            <button class="gift-btn">Received a gift?</button>

            <div class="accordion">
                <div class="accordion-item">
                    <div class="accordion-header">
                    <span class="icon"></span>
                    <span>Languages</span>
                    <span class="arrow">⌄</span>
                </div>
            </div>

            <div class="accordion-item">
                <div class="accordion-header">
                    <span class="icon"></span>
                    <span>Currency</span>
                    <span class="arrow">⌄</span>
                </div>
            </div>

            <div class="accordion-item">
                <div class="accordion-header">
                    <span class="icon"></span>
                    <span>Customer Care</span>
                    <span class="arrow">⌄</span>
                </div>
            </div>
                </div>
        </div>
    );
}

export default Sidebar;