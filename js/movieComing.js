// mova.html
import { getRatedMovies } from "../routes/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const newMovie = document.querySelector("#new_movie");
  const urlMovie = document.querySelector(".sidebar_header");

  getRatedMovies("upcoming")
    .then((data) => {
      const comeData = data;

      try {
        if (!comeData || !comeData.length) throw new Error("영화 데이터 없음!");

        // 랜덤 영화 데이터
        const randomIdx = Math.floor(Math.random() * comeData.length);
        const randomMovie = comeData[randomIdx];

        // 자세히 보기 a태그
        urlMovie.innerHTML += `
					<a href="detail.html?movieId=${randomMovie.id}" class="plus" id="new_plus">
						자세히 보기 >
					</a>`;

        newMovie.innerHTML = `
					<img
              src = ${
                randomMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`
                  : "asset/img/placehold/placehold_person.png"
              }
							alt="${randomMovie.title}"
            />
          <p class="new_title">${randomMovie.title}</p>
				`;
      } catch (error) {
        console.error("API 오류:", error.message);
      }
    })
    .catch((err) => console.error("네트워크 오류:", err));
});
