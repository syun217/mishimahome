

$(function(){
$(window).scroll(function () {
  if ($(this).scrollTop() > 90) {
  $('header').addClass('slide');
  $('nav').addClass('slide');
}
else{
  $('header').removeClass('slide');
  $('nav').removeClass('slide');

}
});
})




$(function(){
  $('#slider').slick({//←定型文
    fade:true,
    autoplay: true,  // 自動再生オン
    autoplaySpeed: 4000, // スライドを3秒で切り替え
    speed:1500,
  })
})




gsap.registerPlugin(ScrollTrigger);

const topTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",//.topというセクション内で
    start: "top top",//最上部から
    end: "+=900",//900pxスクロールするまで
    scrub: true,//スクラブ適用
  },
});

topTl.fromTo(
  ".dashiImg",
  {
    y: 0,
  },
  {  y: -500,
     ease: "Power4.out" }
)

topTl.fromTo(
  ".video",
  {
    y: 0,
  },
  {  y: -500,
     ease: "Power4.out" }
)

topTl.fromTo(
  "#abRight",
  {
    y: 0,
  },
  {  y: 100,
     ease: "Power4.out" }
)



gsap.set(".fadein", {opacity:0,y: 100}); //初期状態をセット

ScrollTrigger.batch(".fadein", {
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0,}),
  start: "top 50%",
  once: true //この指定によって１度だけアニメーションされる
});