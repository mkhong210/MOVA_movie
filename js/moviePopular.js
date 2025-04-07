// search.html
import { getRatedMovies } from "../routes/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const popList = document.getElementById("popular_conts");

  getRatedMovies()
    .then((data) => {
      // console.log("인기 영화 목록:", data.);
      console.log(popList);
      try {
        if (!data || !data.results) throw new Error("영화 데이터 없음!");

        data.results.forEach((movie, idx) => {
          if (idx >= 10) return;

          // console.log(idx);
          // console.log("영화 제목:", movie.title);

          popList.innerHTML += `
						<li class="popular_li">
              <a href="detail.html?movieId=${movie.id}" class="popular">
								<div class="left">
									<img
										src="https://image.tmdb.org/t/p/w200${movie.backdrop_path}"
										alt="영화 이미지"
									/>
									<p id="popular_movie">${movie.title}</p>
								</div>
								<div class="right">
									<p>></p>
								</div>
							</a>
            </li>
          `;
        });
      } catch (error) {
        console.error("API 오류:", error.message);
      }
    })
    .catch((err) => console.error("네트워크 오류:", err));
});
