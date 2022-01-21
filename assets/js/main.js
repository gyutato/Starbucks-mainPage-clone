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
