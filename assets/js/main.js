/* Start Navabar */
const toggle = document.getElementById('menu-btn');
const NavMenu = document.getElementById('nav-menu');
let show = false;

toggle.addEventListener('click', () => {
	show = !show;
	if (show) {
		NavMenu.style.left = 0;
	} else {
		NavMenu.style.left = '-100%';
	}
});
