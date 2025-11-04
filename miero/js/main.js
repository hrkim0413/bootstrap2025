document.addEventListener('DOMContentLoaded', function () {
  mainInit();
});

function mainInit() {
  visual();
  dietaryFiber();
  mieroEvent();
  mieroStory();
}

function visual() {
  const visualSwiper = new Swiper(".visual-swiper", {
    effect: "fade",
    navigation: {
      nextEl: ".visual .swiper-button-next",
      prevEl: ".visual .swiper-button-prev",
    },
    pagination: {
      el: ".visual .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  });
}

function dietaryFiber() {
  let tabMenu = document.querySelectorAll('.dietary-fiber .tab-title li');
  let tabCon = document.querySelectorAll('.dietary-fiber .tab-con li');

  tabMenu.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      tabMenu.forEach(function (item2, idx2) {
        item2.classList.remove('act');
        tabCon[idx2].classList.remove('act');
      })
      this.classList.add('act');
      tabCon[idx].classList.add('act');
    })
  })
}

function mieroEvent() {
  const eventSwiper = new Swiper(".event-swiper", {
    navigation: {
      nextEl: ".miero-event .swiper-button-next",
      prevEl: ".miero-event .swiper-button-prev",
    },
    loop: true,
  });
}

function mieroStory() {
  $('.more-btn').click(function (e) {
    e.preventDefault();

    $.ajax({
      url: 'data/data.json', // 불러올 파일 이름 지정
      type: 'post', // 데이터 전송 방식
      dataType: 'json', // 데이터 파일 형식
      success: function (result) { // 위 과정이 성공이면 아래 함수 내용을 실행한다
        let t = '<ul>';

        $.each(result.product, function (i, e) {
          t += "<li><img src='./images/" + e.path + "' alt='" + e.tit + "'></li>";
        })

        t += '</ul>';

        $('#list').html(t);
      }
    })

    $(this).hide();
  })
}