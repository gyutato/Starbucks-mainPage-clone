const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() { // search 라는 클래스를 가진 요소(div)를 클릭하면
    searchInputEl.focus(); // search의 input요소에 focus를 준다.
    console.log(searchEl); // <div class="search">...</div>
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간(s), 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0, 
            /* 요소를 시각적으로 사라지게 했을 뿐 구조상으로 사라지지 않음 
            하지만 opcity와 같이 값을 숫자로 입력하는 속성들은 transition 속성이나 gsap 라이브러리 등을 통해 요소의 전/후 상태를 자연스럽게 전환할 수 있지만,
            display처럼 값이 숫자가 아닌 속성은 중간값이라는 것이 존재하지 않기 때문에 자연스러운 전환을 적용할 수 없음.
            우선 opacity 값을 0으로 서서히 안보이게 한 다음, display 속성을 사용해 아예 구조상으로 사라지게 하는 방법을 사용함. */
            display: 'none'
        })
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300)); 
// _.throttle(함수, 시간(ms))
// 함수의 실행에 시간만큼의 부하를 줌

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 인덱스+1을 곱해주지 않으면 순차적이라는 의미가 없음. 이에 따라 각 요소가 .7초의 간격으로 순차적 출력.
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', { 
    /* 강사님 화면에는 Swiper가 초록색으로 뜨는데 나는 일반 메소드? 처럼 뜬다. 그리고 overflow-hidden 적용이 안된다... 
    내가 컨테이너 부분에 가서 직접 해줘야함 뭐지 */
    direction: 'vertical',
    autoplay: true,
    loop: true
});
// new Swiper(선택자, 옵션)
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal', /* 기본값 */
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 요소 번호 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion // false였으면 true로, true였으면 false로 즉 기존 값의반대값으로!
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});