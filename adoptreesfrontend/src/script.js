const images = document.querySelectorAll('.banner_img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 7000);

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav_cont');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle button functionality
        function setTab(tab) { 
            const buttons = document.querySelectorAll('.btn-toggle');
            buttons.forEach(btn => {
                if (btn.textContent.toLowerCase().includes(tab)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            

            compRightBottom.classList.remove('d-none');
            compRightTop.classList.remove('d-none');
            compLeftBottom.classList.remove('d-none');
            compLefttop.classList.remove('d-none');

            indLeftBottom.classList.add('d-none');
            indLefttop.classList.add('d-none');
            indRightBottom.classList.add('d-none');
            indRightTop.classList.add('d-none');
        }

//mobile sec

            const compRightBottom = document.getElementById('compRightBottom');
            const compRightTop = document.getElementById('compRightTop');
            const compLeftBottom = document.getElementById('compLeftBottom');
            const compLefttop = document.getElementById('compLefttop');

            const indRightBottom = document.getElementById('indRightBottom');
            const indRightTop = document.getElementById('indRightTop');
            const indLeftBottom = document.getElementById('indLeftBottom');
            const indLefttop = document.getElementById('indLefttop');

            const indBtn = document.getElementById('indBtn');
            const compBtn = document.getElementById('compBtn');

            compBtn.addEventListener('click', () => {
                compRightBottom.classList.remove('d-none');
                compRightTop.classList.remove('d-none');
                compLeftBottom.classList.remove('d-none');
                compLefttop.classList.remove('d-none');

                indLeftBottom.classList.add('d-none');
                indLefttop.classList.add('d-none');
                indRightBottom.classList.add('d-none');
                indRightTop.classList.add('d-none');
            });

            indBtn.addEventListener('click', () => {
                compRightBottom.classList.add('d-none');
                compRightTop.classList.add('d-none');
                compLeftBottom.classList.add('d-none');
                compLefttop.classList.add('d-none');

                indLeftBottom.classList.remove('d-none');
                indLefttop.classList.remove('d-none');
                indRightBottom.classList.remove('d-none');
                indRightTop.classList.remove('d-none');
            });


// nav menu: plant and gift
const plantAndGiftMenu = document.getElementById('plantAndGiftMenu');
const plantAndGiftBtn = document.getElementById('plantAndGiftBtn');

// Keep menu positioned right below the navbar to avoid pointer gaps
const navbar = document.querySelector('.nav_cont');
function updateMenuTop() {
  if (navbar && plantAndGiftMenu) {
    const h = navbar.offsetHeight || 100;
    plantAndGiftMenu.style.top = h + 'px';
  }
}
updateMenuTop();
window.addEventListener('resize', updateMenuTop);

// show/hide with hover flag + small delay to tolerate tiny gaps
let hoverTimer = null;
let isHovering = false;
function showMenu() {
  plantAndGiftMenu.classList.remove('d-none');
}
function hideMenuNow() {
  plantAndGiftMenu.classList.add('d-none');
}

function onEnter() {
  isHovering = true;
  if (hoverTimer) {
    clearTimeout(hoverTimer);
    hoverTimer = null;
  }
  showMenu();
}

function onLeave() {
  isHovering = false;
  if (hoverTimer) clearTimeout(hoverTimer);
  // small delay to allow moving between button and menu
  hoverTimer = setTimeout(() => {
    if (!isHovering) hideMenuNow();
  }, 120);
}

// Use mouseenter/mouseleave to avoid event bubbling complexities
if (plantAndGiftBtn && plantAndGiftMenu) {
  plantAndGiftBtn.addEventListener('mouseenter', onEnter);
  plantAndGiftMenu.addEventListener('mouseenter', onEnter);
  plantAndGiftBtn.addEventListener('mouseleave', onLeave);
  plantAndGiftMenu.addEventListener('mouseleave', onLeave);
}
//---------------------------------------------------------------------------------------------------------------
//about us menu
const aboutusBtn = document.getElementById('aboutusBtn');
const aboutusMenu = document.getElementById('aboutusMenu');

// Keep menu positioned right below the navbar to avoid pointer gaps
const abtnavbar = document.querySelector('.nav_cont');
function abtupdateMenuTop() {
  if (abtnavbar && aboutusMenu) {
    const h = abtnavbar.offsetHeight || 100;
    aboutusMenu.style.top = h + 'px';
  }
}
abtupdateMenuTop();
window.addEventListener('resize', abtupdateMenuTop);

// show/hide with hover flag + small delay to tolerate tiny gaps
let abthoverTimer = null;
let abtisHovering = false;
function showMenuAbt() {
  aboutusMenu.classList.remove('d-none');
}
function hideMenuNowAbt() {
  aboutusMenu.classList.add('d-none');
}

function onEnterAbt() {
  abtisHovering = true;
  if (abthoverTimer) {
    clearTimeout(abthoverTimer);
    abthoverTimer = null;
  }
  showMenuAbt();
}

function onLeaveAbt() {
  abtisHovering = false;
  if (abthoverTimer) clearTimeout(abthoverTimer);
  // small delay to allow moving between button and menu
  abthoverTimer = setTimeout(() => {
    if (!abtisHovering) hideMenuNowAbt();
  }, 120);
}

// Use mouseenter/mouseleave to avoid event bubbling complexities
if (aboutusBtn && aboutusMenu) {
  aboutusBtn.addEventListener('mouseenter', onEnterAbt);
  aboutusMenu.addEventListener('mouseenter', onEnterAbt);
  aboutusBtn.addEventListener('mouseleave', onLeaveAbt);
  aboutusMenu.addEventListener('mouseleave', onLeaveAbt);
}
//----------------------------------------------------------------------------------------------------------------
// company menu
const companyMenu = document.getElementById('companyMenu');
const companyBtn = document.getElementById('companyBtn'); 

// Keep menu positioned right below the navbar to avoid pointer gaps
const compnavbar = document.querySelector('.nav_cont');
function compupdateMenuTop() {
  if (compnavbar && companyMenu) {
    const h = compnavbar.offsetHeight || 100;
    companyMenu.style.top = h + 'px';
  }
}
compupdateMenuTop();
window.addEventListener('resize', compupdateMenuTop);

// show/hide with hover flag + small delay to tolerate tiny gaps
let comphoverTimer = null;
let compisHovering = false;
function showMenuComp() {
  companyMenu.classList.remove('d-none');
}
function hideMenuNowComp() {
  companyMenu.classList.add('d-none');
}

function onEnterComp() {
  compisHovering = true;
  if (comphoverTimer) {
    clearTimeout(hoverTimer);
    comphoverTimer = null;
  }
  showMenuComp();
}

function onLeaveComp() {
  compisHovering = false;
  if (comphoverTimer) clearTimeout(comphoverTimer);
  // small delay to allow moving between button and menu
  comphoverTimer = setTimeout(() => {
    if (!compisHovering) hideMenuNowComp();
  }, 120);
}

// Use mouseenter/mouseleave to avoid event bubbling complexities
if (companyBtn && companyMenu) {
  companyBtn.addEventListener('mouseenter', onEnterComp);
  companyMenu.addEventListener('mouseenter', onEnterComp);
  companyBtn.addEventListener('mouseleave', onLeaveComp);
  companyMenu.addEventListener('mouseleave', onLeaveComp);
}




