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
/* End Navbar */

/* Start carousel Glider */
new Glider(document.querySelector('.glider'), {
	slidesToShow: 1,
	dots: '#dots',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev',
		next: '.glider-next',
	},
});

/* End Carousel Glider */
