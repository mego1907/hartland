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

//Wow
new WOW().init();

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
new Glider(document.querySelector('.glider2'), {
	slidesToShow: 1,
	dots: '#dots',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev2',
		next: '.glider-next2',
	},
});
new Glider(document.querySelector('.glider3'), {
	slidesToShow: 1,
	dots: '#dots2',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev3',
		next: '.glider-next3',
	},
});
new Glider(document.querySelector('.glider4'), {
	slidesToShow: 1,
	dots: '#dots3',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev4',
		next: '.glider-next4',
	},
});
new Glider(document.querySelector('.glider5'), {
	slidesToShow: 1,
	dots: '#dots4',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev5',
		next: '.glider-next5',
	},
});
new Glider(document.querySelector('.glider6'), {
	slidesToShow: 1,
	dots: '#dots5',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev6',
		next: '.glider-next6',
	},
});
new Glider(document.querySelector('.glider7'), {
	slidesToShow: 1,
	dots: '#dots6',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev7',
		next: '.glider-next7',
	},
});
new Glider(document.querySelector('.glider8'), {
	slidesToShow: 1,
	dots: '#dots7',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev8',
		next: '.glider-next8',
	},
});
new Glider(document.querySelector('.glider9'), {
	slidesToShow: 1,
	dots: '#dots8',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev9',
		next: '.glider-next9',
	},
});
new Glider(document.querySelector('.glider10'), {
	slidesToShow: 1,
	dots: '#dot9',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev10',
		next: '.glider-next10',
	},
});
new Glider(document.querySelector('.glider11'), {
	slidesToShow: 1,
	dots: '#dots10',
	draggable: true,
	video: true,
	arrows: {
		prev: '.glider-prev11',
		next: '.glider-next11',
	},
});

/* End Carousel Glider */
