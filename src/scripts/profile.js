function renderUserProfile() {
  const user = JSON.parse(sessionStorage.getItem("profile"));
  const profileSection = document.querySelector(".profile__header");

  const profileHeaderContainer = document.createElement("div");
  const infoContainer = document.createElement("div");
  const profileImg = document.createElement("img");
  const profileName = document.createElement("h3");
  const changeProfileButton = document.createElement("button");

  profileImg.src = user.avatar_url;
  profileImg.alt = `Foto de perfil de ${user.name}`;
  profileName.innerText = user.name;
  changeProfileButton.innerText = "Trocar de usuário";
  changeProfileButton.addEventListener("click", changeUser);

  profileHeaderContainer.classList.add("profile--header__container");
  infoContainer.classList.add("profile--info__container");
  profileImg.classList.add("profile--img");
  profileName.classList.add("profile--name");
  changeProfileButton.classList.add("profile--button");

  infoContainer.append(profileImg, profileName);
  profileHeaderContainer.append(infoContainer, changeProfileButton);
  profileSection.appendChild(profileHeaderContainer);

  return profileHeaderContainer;
}

function renderUserRepoCards() {
  const repository = JSON.parse(sessionStorage.getItem("repository"));
  const reposList = document.querySelector(".repos__list");

  repository.forEach((repo) => {
    const cardContainer = document.createElement("li");
    const repoName = document.createElement("h4");
    const repoDescription = document.createElement("p");
    const repoButton = document.createElement("button");

    repoName.innerText = repo.name;
    repoDescription.innerText = repo.description;
    repoButton.innerHTML = `<a href="${repo.html_url}" target="_blank">Repositório</a>`;

    cardContainer.classList.add("repo--card__container");
    repoName.classList.add("repo--name");
    repoDescription.classList.add("repo--description");
    repoButton.classList.add("repo--button");

    cardContainer.append(repoName, repoDescription, repoButton);
    reposList.appendChild(cardContainer);

    return cardContainer;
  });
}

function changeUser() {
  sessionStorage.removeItem("profile");
  sessionStorage.removeItem("repository");
  location.replace("../../");
}

renderUserProfile();
renderUserRepoCards();
