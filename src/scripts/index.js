import { getUserProfile, getUserRepo } from "./requests.js";

const searchProfile = () => {
  const input = document.querySelector(".search__form input");
  const button = document.querySelector(".search__form > .search__button");

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    const user = input.value;

    const userProfile = await getUserProfile(user);
    const userRepository = await getUserRepo(user);
  });
};

searchProfile();
