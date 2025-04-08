// mypick.html
import { getDetailMovie } from "../routes/apiDetail.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idNum = parseInt(urlParams.get("id"));

  // fetch("../data/user.json") // live server
  fetch("data/user.json") // 배포
    .then((res) => res.json())
    .then((data) => {
      const userData = data.users.find((u) => u.IdNum === idNum);

      if (!userData) {
        console.error("사용자 정보를 찾을 수 없습니다.");
        return;
      }

      // visual_area title
      const Title = document.querySelector(".title_area");

      Title.innerHTML = `<p class="title">${userData.pick_title}</p>`;

      // tag_area
      const Tags = document.querySelector("#tag_cont");

      Tags.innerHTML = "";

      userData.genres.forEach((genre) => {
        Tags.innerHTML += `
					<div class="tag">
						<div class="img_wrapwrap">
							<div class="img_wrap">
								<img
									src="asset/img/tag/tag_img_${genre.id}.jpg"
									alt="${genre.name_ko}태그이미지"
									class="tag_img"
								/>
							</div>
						</div>
						<p class="tag_desc">${genre.name_en}</p>
					</div>
				`;
      });

      // movie_area
      const Movie = document.querySelector("#movie_cont");

      Movie.innerHTML = "";

      userData.movies.forEach((movie) => {
        getDetailMovie(movie.MId)
          .then((data) => {
            const movieData = data;

            try {
              if (!data) throw new Error("영화 데이터 없음!");

              Movie.innerHTML += `
								<div class="movie cont1">
									<div class="img_wrap">
										<img
											src = ${
                        movieData.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                          : "asset/img/placehold/placehold_poster.png"
                      }
											alt="${movieData.title}영화포스터"
										/>
									</div>
									<div class="desc_wrap">
										<p class="desc_title">${movieData.title}</p>
										<p class="desc_text">
											${movieData.overview}
										</p>
										<div class="sub_button">
											<a href="detail.html?movieId=${movieData.id}">Detail Page</a>
										</div>
									</div>
								</div>
							`;
              // console.log("영화 제목:", movieData.title);
            } catch (error) {
              console.error("API 오류:", error.message);
            }
          })
          .catch((err) => console.error("네트워크 오류:", err));
      });
    });
});
