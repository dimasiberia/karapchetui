function insertDiv() {
  let note = document.getElementById("meters").value;
  let height = document.getElementById("height").value;
  let sample = document.getElementById("sample").value;
  document.body.insertAdjacentHTML(
    "afterend",
    `<div class="div">
    <span>${note}</span>
    <div class="dolomitolite" style="height: ${height}px"></div>
    <div class="sample">
    <div class="square"></div>
      <span>1108-${sample}</span>
      <div class="image-container" >
      <div class="image1108-${sample}"></div>
    </div>
    </div>
  </div>`
  );
  document.querySelector().classList.toggle("show");
}
document.addEventListener("click", (event) => {
  if (
    event.target.nextElementSibling.nextElementSibling.classList.contains(
      "image-container"
    )
  ) {
    event.target.nextElementSibling.nextElementSibling.classList.toggle("show");
    event.target.classList.toggle("red");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") insertDiv();
});
