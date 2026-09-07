document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Live Malawi clock
  const clock = document.getElementById("liveClock");
  function updateClock() {
    if (!clock) return;
    clock.textContent = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Blantyre", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    }).format(new Date());
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Rotating practical nutrition tips
  const tips = [
    ["Today's practical tip", "Build variety into meals by combining a staple food with vegetables and a protein-rich food."],
    ["Today's practical tip", "Choose fruits and vegetables in a variety of colours when they are available."],
    ["Today's practical tip", "Water is an important part of healthy daily routines. Make it your regular drink."],
    ["Today's practical tip", "Local foods can contribute to balanced meals when different food groups are combined."],
    ["Today's practical tip", "Good nutrition is about overall eating patterns, not one single food or meal."]
  ];
  const tipTitle = document.getElementById("dailyTipTitle");
  const tipText = document.getElementById("dailyTip");
  const tipButton = document.getElementById("newTip");
  let tipIndex = new Date().getDate() % tips.length;
  function showTip() {
    if (tipTitle) tipTitle.textContent = tips[tipIndex][0];
    if (tipText) tipText.textContent = tips[tipIndex][1];
  }
  showTip();
  tipButton?.addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    showTip();
  });
  setInterval(() => {
    tipIndex = (tipIndex + 1) % tips.length;
    showTip();
  }, 12000);

  // Lightweight searchable Malawi food data
  const foods = [
    {name:"Maize", group:"Staple", text:"Commonly used in Malawi, including in nsima."},
    {name:"Nsima", group:"Staple", text:"A maize-based staple that can be paired with vegetables and protein foods."},
    {name:"Rice", group:"Staple", text:"A familiar staple that can be combined with vegetables, legumes or animal-source foods."},
    {name:"Sweet potatoes", group:"Staple", text:"Starchy root foods that can form part of varied meals."},
    {name:"Potatoes", group:"Staple", text:"A locally familiar starchy food that contributes energy to meals."},
    {name:"Beans", group:"Protein", text:"Legumes that can contribute protein and dietary fibre."},
    {name:"Groundnuts", group:"Protein", text:"Nutrient-dense foods providing protein and fats."},
    {name:"Fish", group:"Protein", text:"Provides protein and, depending on type, other important nutrients."},
    {name:"Eggs", group:"Protein", text:"An animal-source food providing protein and several micronutrients."},
    {name:"Leafy vegetables", group:"Vegetables", text:"Can contribute vitamins, minerals, fibre and other beneficial components."},
    {name:"Banana", group:"Fruit", text:"A familiar fruit that can contribute vitamins, minerals and fibre."},
    {name:"Mango", group:"Fruit", text:"A seasonal fruit that can form part of a varied eating pattern."},
    {name:"Papaya", group:"Fruit", text:"A fruit that can contribute vitamins and fibre."}
  ];
  const search = document.getElementById("foodSearch");
  const results = document.getElementById("foodResults");
  function renderFoods(query="") {
    if (!results) return;
    const q = query.trim().toLowerCase();
    const matches = q ? foods.filter(f => `${f.name} ${f.group} ${f.text}`.toLowerCase().includes(q)).slice(0,4) : [];
    if (!q) { results.innerHTML = "<small>Start typing to explore the food guide.</small>"; return; }
    if (!matches.length) { results.innerHTML = "<small>No matching food found. Try maize, beans, mango or fish.</small>"; return; }
    results.innerHTML = matches.map(f => `<div class="food-result"><span class="food-data-icon"></span><div><strong>${f.name} · ${f.group}</strong><small>${f.text}</small></div></div>`).join("");
  }
  search?.addEventListener("input", e => renderFoods(e.target.value));

  // Energy calculator: Mifflin-St Jeor educational estimate for adults
  const form = document.getElementById("calorieForm");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    const sex = document.getElementById("sex")?.value;
    const age = Number(document.getElementById("age")?.value);
    const weight = Number(document.getElementById("weight")?.value);
    const height = Number(document.getElementById("height")?.value);
    const activity = Number(document.getElementById("activity")?.value);
    if (!age || !weight || !height || !activity) return;
    const bmr = sex === "male"
      ? (10 * weight) + (6.25 * height) - (5 * age) + 5
      : (10 * weight) + (6.25 * height) - (5 * age) - 161;
    const tdee = Math.round(bmr * activity);
    const result = document.getElementById("result");
    if (result) {
      result.querySelector(".result-number").textContent = `${tdee.toLocaleString()} kcal/day`;
      result.querySelector("p").textContent = "Estimated daily energy requirement.";
    }
  });

  // Smooth scroll for same-page links and close mobile Bootstrap nav after selection
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav?.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});


  // Animated digital-screen counters
  const counters = document.querySelectorAll(".metric-counter");
  counters.forEach(counter => {
    const target = Number(counter.dataset.target || 0);
    let value = 0;
    const step = Math.max(1, Math.ceil(target / 35));
    const tick = () => {
      value = Math.min(target, value + step);
      counter.textContent = value.toLocaleString();
      if (value < target) requestAnimationFrame(tick);
    };
    setTimeout(tick, 700);
  });

  // Subtle live pulse on the screening demo
  const demo = document.querySelector(".screening-demo");
  if (demo) {
    demo.classList.add("demo-active");
  }
