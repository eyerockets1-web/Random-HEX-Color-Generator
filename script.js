const color = document.querySelector(".hex-color")
const background = document.body
const button = document.querySelector(".create-color-button")
const copyText = document.querySelector('.copy')
let timerID;
button.addEventListener("click", () => {
const randomNumber = Math.floor(Math.random() * 16777216);
const hex = "#" + randomNumber.toString(16).padStart(6,"0")
background.style.backgroundColor = hex
color.textContent = hex
});
color.addEventListener('click',async () => {
try {
await navigator.clipboard.writeText(color.textContent);
clearTimeout(timerID)
copyText.textContent = "copied!"
timerID = setTimeout(() => {
    copyText.textContent = "^ Click to Copy ^"
}, 600);
} catch {
    clearTimeout(timerID)
copyText.textContent = "failed to copy, please try again"
timerID = setTimeout(() => {
    copyText.textContent = "^ Click to Copy ^"
}, 600);
}
});