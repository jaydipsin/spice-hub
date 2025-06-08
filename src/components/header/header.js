const hamburgericon = document.querySelector(".hamburger-icon");
let hamburgerButtonClick = false;

if (hamburgericon) {
  hamburgericon.addEventListener("click", () => {
    hamburgerButtonClick = !hamburgerButtonClick;

    const parentcontainer = document.createElement("div");
    parentcontainer.classList.add("hamburger-container");

    const close = document.createElement("div");
    close.classList.add("close");
    close.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    parentcontainer.appendChild(close);

    const categorySm = document.createElement("div");
    categorySm.classList.add("category-sm");
    categorySm.innerHTML = `
      <a class="fs-12" href="#about">ABOUT US</a>
      <a class="fs-12" href="public/menu.html">MENU</a>
      <a class="fs-12" href="#form">CONTACT US</a>
    `;
    parentcontainer.appendChild(categorySm);

    document.body.append(parentcontainer);

    gsap.from(".hamburger-container", {
      opacity: 0,
      x: 100,
      duration: 0.3,
      ease: "power2.out",
    });

    close.addEventListener("click", () => {
      hamburgerButtonClick = false;
      gsap.to(parentcontainer, {
        opacity: 0,
        x: 100,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => parentcontainer.remove(),
      });
    });

    // Optional: Remove menu on clicking any link
    categorySm.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerButtonClick = false;
        gsap.to(parentcontainer, {
          opacity: 0,
          x: 100,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => parentcontainer.remove(),
        });
      });
    });
  });
}
