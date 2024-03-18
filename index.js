const horizontalUnderline = document.getElementById("horizontal-underline");
const horizontalMenus = document.querySelectorAll("nav:first-child a")
// console.log(horizontalUnderline)
// console.log(horizontalMenus)

for(let menu of horizontalMenus) {
  menu.addEventListener("click", (e) => {
    horizontalIndicator(e)
  })
}

const horizontalIndicator = (e) => {
  horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderline.style.top = 
  e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}


const verticalUnderline = document.getElementById("vertical-underline")
const verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

for(let menu of verticalMenus) {
  menu.addEventListener("click", (e) => {
    verticalIndicator(e)
  })
}

const verticalIndicator = (e) => {
  verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  verticalUnderline.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}