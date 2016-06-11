var navSilder = document.getElementById('navsilder');
var firPage = document.getElementById('first-page');
var secPage = document.getElementById('second-page');
var thPage = document.getElementById('third-page');
var fourPage = document.getElementById('fourth-page');
var fivePage = document.getElementById('fiveth-page');
var height = document.body.clientHeight || window.innerHeight;
var silder = document.getElementById('slider');
/*navSilder.addEventListener('click', function(event) {
	for (var i = 0; i < navSilder.children.length; i++) {
		navSilder.children[i].className = '';
	}
	firPage.style.opacity = 0.2;
	secPage.style.opacity = 0.2;
	thPage.style.opacity = 0.2;
	fourPage.style.opacity = 0.2;
	fivePage.style.opacity = 0.2;
	var tar = event.target;
	var index = parseInt(tar.dataset.index);
	window.scrollTo(0, index * height)

	tar.className = 'active';
	switch (index) {
		case 0:
			firPage.style.opacity = 1;
			break;
		case 1:
			secPage.style.opacity = 1;
			break;
		case 2:
			thPage.style.opacity = 1;
			break;
		case 3:
			fourPage.style.opacity = 1;
			break;
		case 4:
			fivePage.style.opacity = 1;
			break;
	
	}
	console.log(navSilder.children[index].style.opacity)

})*/

$(function () {
	$('#fullpage').find('p').fadeOut();
	$("#fullpage").fullpage(
			{
				continuousVertical: false,
				anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
				menu: '#menu',
				"navigation": false,
				afterLoad: function(achorLink, index) {
					if (index == '1') {
						$('.section1').find('p').fadeOut(1);
						$('.section1').find('p').fadeIn(2000);
					}
					if (index == '2') {
						$('.section2').find('p').fadeOut(1);
						$('.section2').find('p').fadeIn(2000);
					}
					if (index == '3') {
						$('.section3').find('p').fadeOut(1);
						$('.section3').find('p').fadeIn(2000);
					}
					if (index == '4') {
						$('.section4').find('p').fadeOut(1);
						$('.section4').find('p').fadeIn(2000);
					}
					if (index == '5') {
						$('.section5').find('p').fadeOut(1);
						$('.section5').find('p').fadeIn(2000);
					}
				},
				onLeave: function (index, direction) {
					if (index == '1') {
						$('.section1').find('p').fadeOut(2000);
					}
					if (index == '2') {
						$('.section2').find('p').fadeOut(2000);
					}
					if (index == '3') {
						$('.section3').find('p').fadeOut(2000);
					}
					if (index == '4') {
						$('.section4').find('p').fadeOut(2000);
					}
					if (index == '5') {
						$('.section5').find('p').fadeOut(2000);
					}
				}
			}
		);


})
