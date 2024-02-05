const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const icons = document.querySelectorAll('.icon.animated-icon');
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('clicked');
  });
});

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
	  // Menghapus elemen salju setelah animasi selesai
  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
  });
  
  document.body.appendChild(snowflake);
}

// Membuat efek salju turun secara terus-menerus
function createSnowfall() {
  setInterval(() => {
    createSnowflake();
  }, 200);
}

// Memanggil fungsi untuk memulai efek salju
createSnowfall();

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
