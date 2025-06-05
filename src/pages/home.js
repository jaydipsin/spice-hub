  gsap.from(".hero-img", {
    transform: "translateX(40%)",
  });

  gsap.to(".hero-img", {
    transform: "translateX(-5%)",
  });
  

  // img cursor
  const imgContainer = document.querySelector(".img-container");
  const img = document.querySelector(".hero-img");

  imgContainer.addEventListener("mousemove", (e) => {
    const x = e.clientX - imgContainer.offsetLeft;
    const y = e.clientY - imgContainer.offsetTop;
    img.style.transform = `translate(-${x / 20}px, -${y / 20}px)`;
  });
  imgContainer.addEventListener("mouseleave", () => {
    img.style.transition = `all 0.1s ease-in-out`;
    img.style.transform = `translate(0px, 0px)`;
  });

  // automatic carousel
  let heroSectionImages = [
    "/assets/pulav.png",
    "/assets/pizza-slice.png",
    "/assets/cup-modal.png",
  ];
  let currentIndex = 0;
  let imgElement = document.querySelector(".hero-img");
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


  // carousel address
  
const addressesContainer = ['Vaishnodevi','Himmatnagr', 'Sindhubhawan , arista','aaron spectra , rajpath',' South bopal ','Opp. L.J Clg , sarkhe','Udaipur , rajshthan','Swarrnim university, kalol','Taksshila appt , nr. baghban'];
 const address = document.querySelector(".location");

 async function changeAddressesForever() {
   if (address) {
     const addTextElement = address.querySelector(".add-text");
     
     while (true) {
       for (const add of addressesContainer) {
         addTextElement.textContent = add;
         await new Promise(resolve => setTimeout(resolve, 4000));
       }
     }
   }
 }

 changeAddressesForever();
