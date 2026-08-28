const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("calorieForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const sex = document.getElementById("sex").value;
  const age = Number(document.getElementById("age").value);
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  const activity = Number(document.getElementById("activity").value);

  // Mifflin-St Jeor equation: educational estimate for adults.
  const bmr = sex === "male"
    ? (10 * weight) + (6.25 * height) - (5 * age) + 5
    : (10 * weight) + (6.25 * height) - (5 * age) - 161;

  const tdee = Math.round(bmr * activity);
  const result = document.getElementById("result");
  result.querySelector(".result-number").textContent = `${tdee.toLocaleString()} kcal/day`;
  result.querySelector("p").textContent = "Estimated daily energy requirement.";
});
