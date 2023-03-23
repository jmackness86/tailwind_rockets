const initApp = () => {

    const hanmburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () =>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hanmburgerBtn.classList.toggle('toggle-btn')

    }

   hanmburgerBtn.addEventListener('click', toggleMenu)
   mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)