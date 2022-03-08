// DROPDOWN MENU

// Select the burger icon, the dropdown menu and the close icon
const btnMobile = document.querySelector('.menu-mobile');
const dropdownMobile = document.querySelector('.dropdown-mobile');
const closeDropdown = document.querySelector('.close-dropdown');

// add a class to the dropdownMobile box
function openMenu() {
  dropdownMobile.classList.add('active');
}

// remove the class from the dropdownMobile box
function closeMenu() {
  dropdownMobile.classList.remove('active');
}


// add an event to the burger icon and to the close icon
btnMobile.addEventListener('click', openMenu);
closeDropdown.addEventListener('click', closeMenu);

// NAV STYLE
