gsap.from(".hero-img", {
    transform: "translateX(40%)",
  });
  
gsap.to(".hero-img", {
  transform: "translateX(-5%)",
});

// img cursor
const imgContainer = document.querySelector(".img-container");
const img = document.querySelector(".hero-img");

imgContainer.addEventListener("mousemove",(e)=>{
  const x = e.clientX - imgContainer.offsetLeft;
  const y = e.clientY - imgContainer.offsetTop;
  img.style.transform = `translate(-${x/20}px, -${y/20}px)`;  
})
imgContainer.addEventListener("mouseleave",()=>{
  img.style.transition = `all 0.1s ease-in-out`
  img.style.transform = `translate(0px, 0px)`;  
})


// automatic carousel
let heroSectionImages = ["/assets/chocolate-shake.png", "/assets/IMG_4508.png", "/assets/IMG_4542.png"];
let currentIndex = 0;
let imgElement =  document.querySelector(".hero-img");
const carousel = document.querySelector(".img-container");

setInterval(() => {
  imgElement.src = heroSectionImages[currentIndex];
  imgElement.style.transition = "all 0.2s ease-in-out";
  imgElement.style.transform = "scale(1.1)";
  setTimeout(() => {
    imgElement.style.transform = "scale(1)";
  }, 300);
  currentIndex = (currentIndex + 1) % heroSectionImages.length;
}, 5000);