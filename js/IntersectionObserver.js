let observer = new IntersectionObserver((e) => {
  // 감시 중 태그가 화면에 등장하면 여기 코드가 실행됨
  // <section> 태그의 애니메이션을 추가하면 됨
  e.forEach((box) => {
    // 애니메이션은 그냥 css transition 쓰면 됨
      // 실은 감시중인 태그가 '등장 & 퇴장'시 싷행 됨
    if (box.isIntersecting) {
      // box.isIntersecting: 박스가 화면에 보이면 true 아니면 fasle

      box.target.classList.add("show");
    } else {
      // 감시중인 박스가 퇴장시 실행할 코드
      // box.target.style.opacity = 0;

      box.target.classList.remove("show");
    }
  });
});

let hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
// observer.observe(el); html요소가 화면에 등장하는지 감시해줌


/*
    box.target.style.opacity = 1; box가 화면에 보일 떄 1로 증가(transition때문에 서서히 증가)
    box.target.style.transform = 'rotate(0deg)'; dynamic action
    console.log(box.intersectionRatio); 박스가 반쯤 보이면 0.5 출력
*/