lasScrTop = 0;
opa = 1;
sca = 5;
$(window).scroll(function () {
  winTop = $(this).scrollTop();
  winMid = $(window).height() / 1 + winTop;
  winBot = $(window).height() + winTop;
  $(".scroll-wrap li").each(function () {
    liHei = $(this).height();
    liOff = $(this).offset();
    liTop = liOff.top;
    liBot = liTop + liHei;
    if (liBot <= winMid || liTop >= winBot) {
      $(this).removeClass("inView");
    } else if (liTop <= winMid) {
      $(this).addClass("inView");
    }
    inViewEq = $(".inView").index() + 1;
    console.log(inViewEq);
    $(".movie")
      .attr("class", "")
      .addClass("movie step-" + inViewEq);
  });
  if (winTop > lasScrTop) {
  } else {
  }
  lasScrTop = winTop;
});


const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 200;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 300)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}


balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, 
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});