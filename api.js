// Ava's Nutrition Hub — backend integration helper.
// Set API_BASE to the HTTPS URL of the deployed PHP backend.
const API_BASE = window.AVA_API_BASE || "";

async function saveNutritionScreening(payload) {
  if (!API_BASE) {
    throw new Error("Backend is not configured yet. Set window.AVA_API_BASE first.");
  }
  const response = await fetch(`${API_BASE}/api/save_screening.php`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.message || "Unable to save screening.");
  return data;
}

async function loadScreeningDashboard() {
  if (!API_BASE) throw new Error("Backend is not configured yet.");
  const response = await fetch(`${API_BASE}/api/dashboard.php`);
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.message || "Unable to load dashboard.");
  return data;
}
