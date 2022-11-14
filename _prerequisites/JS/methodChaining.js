var answer;

// 1. the quick brown fox를 camelCase로 작성하시오:
theQuickBrownFox

/* 2. let fruits = ['Apple', 'Banana', 'Cherry']; 
위 데이터를 활용해 Banana를 콘솔 출력하시오: */
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]);

// 3. 불린 데이터에서 거짓을 의미하는 데이터는?:
answer = 'false'

// 4. 값이 의도적으로 비어있음을 의미하는 데이터는?:
answer = 'null'

/* 5. let obj = {abc: 123}; console.log(obj.xyz);
위 코드를 통해 콘솔 출력될 값(데이터)은? */
answer = 'undefined'

// 6. 값을 재할당할 수 없는 변수 선언 키워드로 값 10을 갖는 식별자 foo를 선언하시오:
const foo = 10;

/* 7. function sum(a, b) {
    return a+b;
}
위 함수 선언의 a, b와 같이 함수 호출에서 전달받은 인수를 함수 내부로 전달하기 위한 변수는?: */
answer = '매개변수'

// 8. 이름이 없는 함수를 무엇이라 하는가?:
answer = '익명함수'

// 9. hello 이름의 함수 표현을 작성하고 호출하시오:
const hello = function(){};
hello();

// 10. 가져온 JS 파일을 HTML 문서 분석 이후에 실행하도록 지시하는 HTML 속성은?
answer = 'defer'

/* 11. <div class="box">Box!!</div>
위 HTML 요소의 내용을 콘솔 출력하시오 */

let el = document.getElementsByClassName('box');
console.log(el); // 나의 오답

const BoxEl = document.querySelector('box');
console.log(BoxEl.textContent);

// 12. 값을 재할당할 목적의 변수 선언 키워드는?
answer = 'let'

/* 13. const boxEl = document.querySelector('.box');
위 코드의 boxEl 요소에 클릭(click) 이벤트를 추가해, 클릭 시 'Hello'를 콘솔 출력하시오 */
const boxEl = document.querySelector('.box');

boxEl.addEventListener('click', function() {
    console.log('Hello')
});

/* 14. 
<div>1</div>
<div>2</div>
위 2개의 div 요소에 js로 class="hello" 를 추가하시오 */
els = document.querySelectorAll("div")
els.forEach(function(divEl) {
    divEl.classList.add('hello')
});

/* 15.
const boxEl = document.querySelector('.box');
위 코드의 boxEl 요소에 HTML 클래스 속성의 값으로 'active'가 포함되어 있으면, '포함됨!'을 콘솔 출력하시오 */
const boxEl = document.querySelector('.box');
if (boxEl.classList.contains('active')) {
    console.log('포함됨!')
}