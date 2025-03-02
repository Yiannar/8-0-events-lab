// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    main.append(div);
}

// You may write your code here!

// const palette = document.querySelector("#palette")
// palette.addEventListener("click", () => {
//  palette.style
// })

const divColors = document.querySelectorAll(".color")
console.log(divColors)

const currentColor = document.querySelector("#current-color")

divColors.forEach((color) => {
    color.addEventListener("click", () => {
        currentColor.style.backgroundColor = color.style.backgroundColor
    })
})

const cells = document.querySelectorAll("#canvas .cell")

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = currentColor.style.backgroundColor
    })
})