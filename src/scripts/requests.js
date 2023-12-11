const baseUrl = "https://api.github.com/users/";

export async function getUserProfile(username) {
  const user = await fetch(`${baseUrl}${username}`, {
    method: "GET",
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      sessionStorage.setItem("profile", JSON.stringify(response));
      return response;
    } else {
      return window.location.replace("./src/pages/error.html");
    }
  });

  return user;
}

export async function getUserRepo(username) {
  const repo = await fetch(`${baseUrl}${username}/repos`, {
    method: "GET",
  }).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      sessionStorage.setItem("repository", JSON.stringify(response));
      window.location.replace("./src/pages/profile.html");
      return response;
    } else {
      return window.location.replace("./src/pages/error.html");
    }
  });

  return repo;
}
