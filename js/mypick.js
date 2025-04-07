// mypick.html
import config from "../config.js";
const { API_KEY } = config;

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idNum = parseInt(urlParams.get("id"));

  console.log(idNum);

  fetch("../data/user.json")
    .then((res) => res.json())
    .then((data) => {
      const userData = data.users.find((u) => u.IdNum === idNum);

      if (!userData) {
        console.error("사용자 정보를 찾을 수 없습니다.");
        return;
      }

      console.log(userData);
      userData.movies.forEach((movie) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${movie.MId}?api_key=${API_KEY}&language=ko`
        )
          .then((res) => res.json())
          .then((detail) => {
            console.log(detail);
          });
      });
    });
});
