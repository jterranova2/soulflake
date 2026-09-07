(function () {
  const ITEMS = [
    { cat: "Music", label: "Radiohead" },
    { cat: "Music", label: "Kendrick Lamar" },
    { cat: "Music", label: "Bon Iver" },
    { cat: "Music", label: "Björk" },
    { cat: "Music", label: "FKA twigs" },
    { cat: "Music", label: "Philip Glass" },
    { cat: "Music", label: "Tame Impala" },
    { cat: "Music", label: "Nina Simone" },
    { cat: "Film", label: "Arrival" },
    { cat: "Film", label: "The Social Network" },
    { cat: "Film", label: "Parasite" },
    { cat: "Film", label: "Blade Runner 2049" },
    { cat: "Film", label: "Before Sunrise" },
    { cat: "Film", label: "Whiplash" },
    { cat: "Film", label: "Ex Machina" },
    { cat: "Film", label: "Moonlight" },
    { cat: "Book", label: "Dune" },
    { cat: "Book", label: "Atomic Habits" },
    { cat: "Book", label: "The Creative Act" },
    { cat: "Book", label: "Sapiens" },
    { cat: "Book", label: "Zen & Motorcycle" },
    { cat: "Book", label: "Neuromancer" },
    { cat: "Book", label: "Thinking, Fast & Slow" },
    { cat: "Book", label: "The Left Hand of Darkness" },
    { cat: "Food", label: "Ramen at midnight" },
    { cat: "Food", label: "Omakase sushi" },
    { cat: "Food", label: "Spicy Sichuan" },
    { cat: "Food", label: "Neapolitan pizza" },
    { cat: "Food", label: "Espresso neat" },
    { cat: "Food", label: "Farmers-market cheese" },
    { cat: "Food", label: "Dark chocolate 85%" },
    { cat: "Food", label: "Biryani" },
  ];

  const MIN = 8;
  const MAX = 12;
  const selected = new Set();

  const grid = document.getElementById("chip-grid");
  const countEl = document.getElementById("pick-count");
  const btn = document.getElementById("btn-continue");
  const stepTaste = document.getElementById("step-taste");
  const stepReveal = document.getElementById("step-reveal");

  function render() {
    grid.innerHTML = "";
    ITEMS.forEach((item, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (selected.has(i) ? " selected" : "");
      b.setAttribute("aria-pressed", selected.has(i) ? "true" : "false");
      b.innerHTML = '<span class="cat">' + item.cat + "</span>" + item.label;
      b.addEventListener("click", () => toggle(i));
      grid.appendChild(b);
    });
    updateChrome();
  }

  function toggle(i) {
    if (selected.has(i)) {
      selected.delete(i);
    } else {
      if (selected.size >= MAX) return;
      selected.add(i);
    }
    render();
  }

  function updateChrome() {
    const n = selected.size;
    countEl.textContent = String(n);
    btn.disabled = n < MIN;
  }

  btn.addEventListener("click", () => {
    if (selected.size < MIN) return;
    stepTaste.classList.add("hidden");
    stepReveal.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  render();
})();
