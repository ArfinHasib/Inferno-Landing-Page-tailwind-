const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

// event listeners
navTriggerBtn.addEventListener('click', () => {
   navMenu.classList.toggle('nav-is-open');
});
