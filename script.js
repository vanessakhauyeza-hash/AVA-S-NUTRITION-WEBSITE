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

// Interactive live features
const tips = [
  "Build variety into meals by combining staple foods with vegetables and a protein-rich food.",
  "Choose fruits and vegetables in a variety of colours when they are available.",
  "Water is an important part of healthy daily routines. Make it your regular drink.",
  "Local foods can contribute to balanced meals when different food groups are combined.",
  "Good nutrition is about overall eating patterns, not one single food or meal."
];
const tipEl=document.getElementById("dailyTip");
const newTip=document.getElementById("newTip");
let tipIndex=new Date().getDate()%tips.length;
function showTip(){ if(tipEl) tipEl.textContent=tips[tipIndex]; }
newTip?.addEventListener("click",()=>{tipIndex=(tipIndex+1)%tips.length;showTip();});
showTip();

const clockEl=document.getElementById("liveClock");
function updateClock(){ if(clockEl){clockEl.textContent=new Intl.DateTimeFormat("en-GB",{timeZone:"Africa/Blantyre",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(new Date());}}
updateClock(); setInterval(updateClock,1000);

const foodData={
  staples:{title:"Staples",emoji:"🍚",items:"Nsima, rice, potatoes and sweet potatoes",message:"Staples are important sources of energy. Pair them with vegetables and protein-rich foods for more variety."},
  protein:{title:"Protein foods",emoji:"🥚",items:"Beans, peas, eggs, fish and chicken",message:"Protein-rich foods help support growth and maintenance of body tissues."},
  vegetables:{title:"Vegetables",emoji:"🥬",items:"Leafy greens and other locally available vegetables",message:"Vegetables can provide vitamins, minerals, fibre and other useful nutrients."},
  fruit:{title:"Fruit",emoji:"🍌",items:"Bananas, mangoes, papaya and other seasonal fruits",message:"Fruit can be part of a varied eating pattern and contributes vitamins, minerals and fibre."}
};
const explorer=document.getElementById("foodExplorer");
function renderFood(key){const d=foodData[key]; if(explorer) explorer.innerHTML=`<div class="icon">${d.emoji}</div><h3>${d.title}</h3><p><strong>Examples:</strong> ${d.items}</p><p>${d.message}</p>`;}
document.querySelectorAll(".food-tab").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".food-tab").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderFood(btn.dataset.food);}));
renderFood("staples");
