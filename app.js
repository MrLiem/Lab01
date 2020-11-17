const hamburger = document.querySelector(".hamburger");
const profileList = document.querySelector(".profile-list");

hamburger.addEventListener("click", () => {
  if (profileList.classList.contains("menu")) {
    profileList.classList.remove("menu");
  } else {
    profileList.classList.add("menu");
  }
});
