function loading() {
  const tl = gsap.timeline();

  tl.to(".loader .yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(".loader .yellow2", {
    top: "100%",
    delay: 0.9,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.to(
    ".loader",
    {
      opacity: 0,
    },
    "anim"
  );

  tl.to(
    ".loader",
    {
      display:"none",
    },
    "anim"
  );

  tl.to(
    ".loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
}
loading();

function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
}

locomotive();