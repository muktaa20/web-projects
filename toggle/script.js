const btn = document.getElementById('btn')

btn.addEventListener("click", () => {
  if (btn.textContent === "ON") {
    btn.textContent = "OFF";
    btn.style.color = "red";
  } else {
    btn.textContent = "ON";
    btn.style.color = "green";
  }
});