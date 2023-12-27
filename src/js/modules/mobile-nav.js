function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const nav_btn = document.querySelector('.mobile-btn');
	const hrefNav = document.querySelectorAll('.nav-href');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		navBtn.classList.toggle('mobile-nav-btn-active');
		nav_btn.classList.toggle('mobile-btn-active');
		document.body.classList.toggle('no-scroll');
	};

	nav_btn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		navBtn.classList.toggle('mobile-nav-btn-active');
		nav_btn.classList.toggle('mobile-btn-active');
		document.body.classList.toggle('no-scroll');
	};

	hrefNav.forEach(function(item) {
		item.addEventListener('click', function() {
			nav.classList.toggle('mobile-nav--open');
			navBtn.classList.toggle('mobile-nav-btn-active');
			nav_btn.classList.toggle('mobile-btn-active');
			document.body.classList.toggle('no-scroll');
		});
	
		nav.onclick = offermob;
	});
	
	function offermob () {
		document.body.classList.remove('no-scroll');
	};
}

window.addEventListener('resize', (e) => {
	const width = document.body.clientWidth;
	if (width > 1100) {
		nav.classList.remove('mobile-nav--open');
			navBtn.classList.remove('mobile-nav-btn-active');
			nav_btn.classList.remove('mobile-btn-active');
			document.body.classList.remove('no-scroll');
	}
});

export default mobileNav;