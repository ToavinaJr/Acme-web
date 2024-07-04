const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toogleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    hamburgerBtn.addEventListener('click', toogleMenu);
    mobileMenu.addEventListener('click', toogleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);