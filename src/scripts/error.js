const goToMainPage = () => {
  const button = document.querySelector(".newSearch__button");

  button.addEventListener("click", () => {
    location.replace("../../");
  });
};

goToMainPage();
