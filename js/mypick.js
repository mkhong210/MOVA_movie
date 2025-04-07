// mypick.html
import { getDetailMovie } from "../routes/apiDetail.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idNum = parseInt(urlParams.get("id"));

  console.log(idNum);

  // fetch("../data/user.json")
  fetch("MOVA_movie/data/user.json")
    .then((res) => res.json())
    .then((data) => {
      const userData = data.users.find((u) => u.IdNum === idNum);

      if (!userData) {
        console.error("사용자 정보를 찾을 수 없습니다.");
        return;
      }

      console.log(userData);
      userData.movies.forEach((movie) => {
        getDetailMovie(movie.MId)
          .then((data) => {
            const movieData = data;

            try {
              if (!data) throw new Error("영화 데이터 없음!");

              console.log("영화 제목:", movieData.title);
              // data.forEach((movie) => {
              // });
            } catch (error) {
              console.error("API 오류:", error.message);
            }
          })
          .catch((err) => console.error("네트워크 오류:", err));
      });
    });
});
