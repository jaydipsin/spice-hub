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

const addressesContainer = [
  "Vaishnodevi, Ahmedabad",
  "Himmatnagar",
  "Sindhu Bhavan, Arista, Ahmedabad",
  "Aaron Spectra, Rajpath Road, Ahmedabad",
  "South Bopal, Ahmedabad",
  "Opp. L.J. College, Sarkhej, Ahmedabad",
  "Udaipur, Rajasthan",
  "Swarnim University, Kalol",
  "Takshshila Apartment, near Baghban Party Plot, Ahmedabad",
];
const address = document.querySelector(".location");

async function changeAddressesForever() {
  if (address) {
    const addTextElement = address.querySelector(".add-text");

    while (true) {
      for (const add of addressesContainer) {
        addTextElement.textContent = add;
        await new Promise((resolve) => setTimeout(resolve, 4000));
      }
    }
  }
}

changeAddressesForever();

import { emailKey } from "./../credential.js";

let formSubmit = document.querySelector(".submit-form-access");
if (formSubmit) {
  formSubmit.setAttribute("value", emailKey);
}
fetch("/public/review.json")
  .then((res) => res.json())
  .then((data) => {
    const carouselTrack = document.querySelector(".carousel-track");
    if (!carouselTrack) return;

    // Clear existing content
    carouselTrack.innerHTML = "";

    data.forEach((reviewData) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      // Review text
      const review = document.createElement("span");
      review.classList.add("review");
      review.innerText = reviewData.review;

      cardContent.appendChild(review);

      // Stars container
      const starContainer = document.createElement("div");
      starContainer.classList.add("stars");
      for (let i = 0; i < reviewData.rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");
        starContainer.appendChild(star);
      }

      cardContent.appendChild(starContainer);

      // Customer info container
      const infoContainer = document.createElement("div");
      infoContainer.classList.add("customer-info");

      const name = document.createElement("span");
      name.classList.add("customer-name");
      name.innerText = reviewData.name;

      infoContainer.appendChild(name);

      card.appendChild(cardContent);
      card.appendChild(infoContainer);

      carouselTrack.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading reviews:", error);
  });
