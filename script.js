let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon"
    : "Good evening";
container.innerHTML = `<h1>${greeting}</h1>`;


function showAlert() {
    alert("hehe, kalo sudah pagi, ayo bangun. kalau siang, jangan lupa makan. kalau malam, jangan begadang.");
}