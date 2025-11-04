//1. 변수선언
let mnu = document.querySelectorAll('#gnb form>ul>li>a');
const icons = document.querySelectorAll('#gnb>form>ul>li>a>i.fas');

//2. 메인메뉴 클릭 이벤트
for (let i = 0; i < mnu.length; i++) {
  mnu[i].addEventListener('click', function (e) {
    console.log(i); //몇번째 메뉴 인지를 파악한다.
    e.preventDefault(); //새로고침 방지해줌

    // 1) 현재 보이는 서브메뉴 모두 숨긴다.
    let submnu = document.querySelectorAll('#gnb .sub');
    for (let j = 0; j < submnu.length; j++) {
      submnu[j].style.display = 'none';
    }

    // 2) 사용자가 선택한 n번째 메뉴의 다음 요소를 선택(sub메뉴)하여 보이게 한다.
    // mnu[i].nextElementSibling.style.display = 'block';
    // 2-1) 서브메뉴가 없는 메인메뉴도 있기 때문에 아래와 같이 설정해야 함
    let submenu = mnu[i].nextElementSibling;
    if (submenu && submenu.classList.contains('sub')) { // 서브메뉴가 있는 경우에만 나오도록 함
      submenu.style.display = 'block';
    }

    // 3) 모든 아이콘 회전하기 초기화
    for (let k = 0; k < icons.length; k++) {
      icons[k].classList.remove('rotate');
    }

    // 4) 선택한 메뉴의 아이콘만 회전하기
    let icon = mnu[i].querySelector('i.fas');
    if (icon) {
      icon.classList.add('rotate');
    }
  });
}

