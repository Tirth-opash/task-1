function myFunction(a) {
  let x = document.querySelector(".list2");
  if (x.style.display === "block") {
    a.classList.toggle("change");
    x.style.display = "none";
  } else {
    a.classList.toggle("change");
    x.style.display = "block";
  }
}
