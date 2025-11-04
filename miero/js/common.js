document.addEventListener('DOMContentLoaded', function () {
  commonInit();
});

function commonInit() {
  gnbFn();
  topBtnFn();
}

function gnbFn() {
  let menu = document.querySelectorAll('.gnb > ul > li');
  let menuSub = document.querySelectorAll('.gnb .sub');
  const menuToggle = document.getElementById('toggle');
  const gnb = document.querySelector('.gnb');

  /* 서브메뉴 열림 */
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function (e) {
      e.stopPropagation();
      let submenu = this.querySelector('.sub');

      // 이미 열려있다면 닫기
      if (submenu && submenu.classList.contains('act')) {
        submenu.classList.remove('act');
      } else {
        // 모든 act 제거
        for (let j = 0; j < menu.length; j++) {
          let otherSub = menu[j].querySelector('.sub');
          if (otherSub) otherSub.classList.remove('act');
        }
        // 클릭한 메뉴만 열기
        if (submenu) submenu.classList.add('act');
      }
    });
  }

  /* main 클릭시 메뉴 닫힘 */
  document.addEventListener('click', function (e) {
    // gnb 영역 외부(main, footer 등)를 클릭했을 때만 실행
    if (!e.target.closest('.gnb')) {
      menuSub.forEach(function (item) {
        item.classList.remove('act');
      });
    }
  });

  /* mo) 토글버튼 클릭시 메뉴 열림 */
  menuToggle.addEventListener('click', function () {
    gnb.classList.toggle('act');

    if (gnb.classList.contains('act') == false) {
      menuSub.forEach(function (item) {
        item.classList.remove('act');
      })
    }
  })
}

function topBtnFn() {
  const topBtn = document.querySelector('#top-btn');

  topBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}