const FAQ = () => {
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }

            document.querySelectorAll('.accordion-header').forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });
}
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
                // const autoscroll = () => {
                //     screen.scrollBy(0, 100)
                // }
                // autoscroll();
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
    mybgimg.style.scale = 1,
    mybgimg.style.left = (dets.x - 160) + "px",
    mybgimg.style.top = (dets.y - 230) + "px"
})
overlay.addEventListener("mouseleave", (dets) => {
    const mybgimg = document.querySelector("#mytextimg");
    mybgimg.style.scale = 0
})