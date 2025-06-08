fetch("/menu.json")
  .then((res) => res.json())
  .then((data) => {
    let counter = 1;

    for (let i = 1; i <= 3; i++) {
      const row = document.querySelector(`.menu-row-${i}`);
      if (!row) continue;

      for (let j = 0; j < 7; j++) {
        if (counter > 22) break;

        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = `assets/menu-${counter}.jpeg`;
        card.appendChild(img);
        row.appendChild(card);

        counter++;
      }

      // ✅ Clone cards once for seamless infinite scroll
      const cards = [...row.children];
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        row.appendChild(clone);
      });
    }
  });

const closeMenu = document.querySelector(".fa-solid");

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    window.location.href = "/";
  });
}
