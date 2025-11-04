// // gnb > sub 메뉴
// const gnb_w = document.querySelector('.gnb_wrap');
// const gnb = document.querySelector('.gnb_wrap .gnb');

// gnb.addEventListener('mouseenter', function () {
// 	gnb_w.style.height = '260px';
// })
// gnb.addEventListener('mouseleave', function () {
// 	gnb_w.style.height = '40px';
// })

// // gnb > 토글버튼
// const t_btn = document.getElementById('t_btn');
// let n = 0;

// t_btn.addEventListener('click', function () {
// 	if (n == 0) {
// 		gnb_w.style.height = '400px';
// 		n = 1;
// 	} else {
// 		gnb_w.style.height = '40px';
// 		n = 0;
// 	}
// })

$(document).ready(function () {
	// input
	$('input').focusin(function () {
		$(this).css('border-color', '#ffd204');
	})

	$('input').focusout(function () {
		$(this).css('border-color', 'transparent').css('border-bottom-color', '#ccc');
	})

	// gnb > sub 메뉴
	const gnb_w = $('.gnb_wrap');
	const gnb = $('.gnb_wrap .gnb');

	gnb.hover(function () {
		gnb_w.css('height', '260px');
	}, function () {
		gnb_w.css('height', '40px');
	})

	// gnb > 토글버튼
	const t_btn = $('#t_btn');
	let n = 0;

	t_btn.click(function () {
		if (n == 0) {
			gnb_w.css('height', '400px');
			n = 1;
		} else {
			gnb_w.css('height', '40px');
			n = 0;
		}
	})
})
