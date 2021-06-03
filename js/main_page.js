// 슬라이드에 필요한 변수 선언
let slides = document.querySelector('.slides'),
slide = document.querySelectorAll('.slides li'),
currentIdx = 0,
slideCount = slide.length,
slideWidth = 200,
slideMargin = 30,
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
for(let i = 0; i<slideCount; i++){
//a.cloneNode() 요소만 복사
//a.cloneNode(true) 요소의 자식까지 복사
let cloneSlide = slide[i].cloneNode(true);
cloneSlide.classList.add('clone');
slides.appendChild(cloneSlide);
}
for(let i = slideCount-1; i>=0; i--){
let cloneSlide = slide[i].cloneNode(true);
cloneSlide.classList.add('clone');
slides.appendChild(cloneSlide);
//a.prepend(b) a 요소 앞에 b 추가해 넣기
slides.prepend(cloneSlide);
}
updateWidth();
setInitialPos();
setTimeout(function(){
slides.classList.add('animated');
},100);

}

function updateWidth(){
let currentSlides = document.querySelectorAll('.slides li');
let newSlideCount = currentSlides.length;

let newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
slides.style.width = newWidth;

}

function setInitialPos(){
let initialTranslateValue = -(slideWidth + slideMargin)*slideCount;

slides.style.transform = `translateX(${initialTranslateValue}px)`;
}

nextBtn.addEventListener('click',function(){
moveSlide(currentIdx + 4);
// 한번 클릭시 4개를 옮김
});
prevBtn.addEventListener('click',function(){
moveSlide(currentIdx - 4);
});


setInterval(function(){
nextBtn.click();
},6000);

function moveSlide(num){
slides.style.left = -num * (slideWidth + slideMargin) + 'px';
currentIdx = num;
console.log(currentIdx, slideCount);

if(currentIdx == slideCount || currentIdx == -slideCount){
// 마지막 페이지에서 다음으로 가거나 
// 제일 앞 부분에서 뒤로 갈 경우
setTimeout(function(){
  slides.classList.remove('animated');
  slides.style.left = '0px';
  currentIdx = 0;

 }, 500);

setTimeout(function(){
  slides.classList.add('animated');
}, 600);
}
}