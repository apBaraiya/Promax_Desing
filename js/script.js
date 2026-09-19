gsap.registerPlugin(ScrollTrigger);
// gsap animation
var tl = gsap.timeline();

tl.from(".navbar-brand, .nav-item", {
  y: -100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".hero_left h1 , .hero_left h1 span", {
  y: 80,
  opacity: 0,
  stagger: 0.5,
});
tl.from(".hero_left p", {
  y: 50,
  opacity: 0,
});
tl.from(".hero_left .btn", {
  x: -50,
  opacity: 0,
});
gsap.from(".banner_img", {
  scrollTrigger: {
    trigger: ".banner_img",
  },
  opacity: 0,
  y: 50,
});
gsap.from(".promax_title h2, .promax_title p", {
  scrollTrigger: {
    trigger: ".promax_title h2",
    start: "top 100%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.5,
});

const FAQ = () => {
  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle("active");

      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }

      document.querySelectorAll(".accordion-header").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.style.maxHeight = 0;
        }
      });
    });
  });
};
FAQ();

const phone = document.querySelector("#mobile");
const hand = document.querySelector("#hand");
const screen = document.querySelector(".screen_img");

const newspaperSpinning = [
  { left: "100%", transform: "translate(-30%,-50%)" },
  { left: "90%", transform: "translate(-50%,-50%)" },
];

const newspaperTiming = {
  duration: 3000,
  iterations: 1,
};

window.onload = function () {
  var phonloction = phone.getBoundingClientRect();
  var finalloction = phonloction.x;
  var handloction = hand.getBoundingClientRect();
  var moveloction = handloction.x;
  setTimeout(() => {
    if (moveloction >= finalloction) {
      hand.animate(newspaperSpinning, newspaperTiming);
      setTimeout(() => {
        const screen = document.querySelector(".screen_img");
        screen.style.opacity = "1";
      }, 3500);
    } else {
      alert("sorry move animation not work");
    }
  }, 2000);
};

// overlay
const main_contant = document.querySelector("#main_contant");
const overlay = document.querySelector("#overlay1");

overlay.addEventListener("mousemove", (dets) => {
  const mybgimg = document.querySelector("#mytextimg");
  ((mybgimg.style.scale = 1), (mybgimg.style.left = dets.x - 160 + "px"), (mybgimg.style.top = dets.y - 230 + "px"));
});
overlay.addEventListener("mouseleave", (dets) => {
  const mybgimg = document.querySelector("#mytextimg");
  mybgimg.style.scale = 0;
});


