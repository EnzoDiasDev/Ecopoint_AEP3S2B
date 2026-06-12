const TAB_TITLES = {
  inicio: { icon: icon("home", 18), label: "Início" },
  mapa: { icon: icon("map", 18), label: "Mapa" },
  denuncia: { icon: icon("report", 18), label: "Denúncia" },
  perfil: { icon: icon("user", 18), label: "Perfil" },
};

const PINS = {
  central: {
    name: "EcoPonto Central",
    addr: "500 m · Rua das Flores, 142",
    tags: ["Papel", "Plástico", "Vidro", "Metal"],
  },
  eletronicos: {
    name: "Coleta de Eletrônicos",
    addr: "1,4 km · Av. Brasil, 800",
    tags: ["Celulares", "Computadores", "Pilhas"],
  },
  oleo: {
    name: "Descarte de Óleo",
    addr: "1,4 km · Rua do Porto, 55",
    tags: ["Óleo cozinha", "Lubrificantes"],
  },
  norte: {
    name: "EcoPonto Norte",
    addr: "2,2 km · Rua Ipê, 310",
    tags: ["Papel", "Plástico", "Vidro"],
  },
};

function goTab(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const target = document.getElementById("tab-" + id);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === id);
  });

  const info = TAB_TITLES[id];
  if (info) {
    document.getElementById("topbar-title").innerHTML =
      info.icon + " " + info.label;
  }

  closeSidebar();
}

function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("active");
}

function selChip(el) {
  document
    .querySelectorAll(".type-chip")
    .forEach((c) => c.classList.remove("sel"));
  el.classList.add("sel");
}

function submitDenuncia() {
  const toast = document.getElementById("eco-toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    goTab("inicio");
  }, 2200);
}

function selectPin(key) {
  const data = PINS[key];
  if (!data) return;

  document.getElementById("mi-name").textContent = data.name;
  document.getElementById("mi-addr").textContent = data.addr;
  document.getElementById("mi-tags").innerHTML = data.tags
    .map((t) => `<span class="eco-tag me-1">${t}</span>`)
    .join("");
}

function initFilterBtns() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function setTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
  localStorage.setItem("ecopoint-theme", theme);
}

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-btn[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => goTab(btn.dataset.tab));
  });

  const overlay = document.getElementById("sidebar-overlay");
  if (overlay) overlay.addEventListener("click", closeSidebar);

  const hamburger = document.getElementById("hamburger-btn");
  if (hamburger) hamburger.addEventListener("click", openSidebar);

  initFilterBtns();
  initThemeToggle();
});
