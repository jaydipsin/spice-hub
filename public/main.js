async function loadHTML(id, file, callback, scriptFilePath) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
  if (typeof callback === "function") {
    callback(); // ensure your nav logic runs AFTER load
  }

  if (scriptFilePath) {
    const script = document.createElement("script");
    script.src = scriptFilePath;
    script.type = "module";

    document.body.appendChild(script);
  }
}

loadHTML(
  "header",
  "./../src/components/header/header.html",
  () => {
    const nav = document.querySelector("#header nav");
    if (!nav) {
      console.warn("Nav not found!");
      return;
    }

    window.addEventListener("scroll", () => {
      if (scrollY >= 0 && scrollY < 5) {
        nav.style.boxShadow = "0px 0px 0px transparent";
        nav.style.backgroundColor = "transparent";
      } else {
        nav.style.backgroundColor = "#fff";
        nav.style.transition = "all 0.1s ease-in-out";
        nav.style.boxShadow =
          "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)";
      }
    });
  },
  "./../src/components/header/header.js"
);

// Load other sections normally
loadHTML("main-content", "./../src/pages/home.html", null, "./../src/pages/home.js");
loadHTML(
  "footer",
  "./../src/components/footer/footer.html",
  null,
  "./../src/components/footer/footer.js"
);