// const drums = document.querySelectorAll(".drum");

// drums.forEach((drum) => {
//   drum.addEventListener("click", () => {
//     if (drum.textContent == "w") {
//     }
//   });
// });
// uy ishi
// 52
// 58
// 59
const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="key">
        ${e.key == " " ? "Space" : e.key}
      <small>event.key</small>    
    </div>
    <div class="key">
        ${e.keyCode}
      <small>event.keyCode</small>    
    </div>
    <div class="key">
        ${e.code}
      <small>event.code</small>    
    </div>
  `;
});
