let images = document.querySelectorAll(".image-container");
let imageContainer = document.querySelector(".image-container");
let viewImg = document.querySelector(".chosen-img");
let shown = document.querySelector("#shownImg");
let closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  viewImg.style.display = "none";
});
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    viewImg.style.display = "flex";
    shown.src = e.target.src;
  });
});

window.addEventListener("scroll", (e) => {
  let { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;
  if (clientHeight + scrollHeight + 1 >= scrollTop) {
    displayImage(4);
  }
});

async function displayImage(n) {
  for (let i = 0; i < n; i++) {
    let res = await fetch("https://picsum.photos/200/300?random=2");
    let url = res.url;
    let imageChild = document.createElement("img");
    imageChild.src = url;
    imageContainer.appendChild(imageChild);
  }
}
displayImage(10);
