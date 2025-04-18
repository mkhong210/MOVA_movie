import { getDetailMovie } from "../routes/apiDetail.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idNum = parseInt(urlParams.get("movieId"));

  const loading = document.getElementById("loading");
  const detail = document.getElementById("movieDetail");

  loading.style.display = "block";
  detail.style.display = "none";

  getDetailMovie(idNum)
    // 8966 / 26662 / 27205
    .then((data) => {
      // const movies = data?.results || []; // 응답이 없으면 빈 배열로 설정
      try {
        if (!data) throw new Error("영화 데이터 없음!");

        const movieData = data;
        console.log(data);

        loading.style.display = "none";
        detail.style.display = "block";

        detail.innerHTML += `
					<div class="inner">
						<div class="movie_cont_top">
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
								<!-- original_title -->
								<p class="desc_title">${movieData.title}</p>
								<div class="tag_area">
									${movieData.genres.map((tag) => `<p class="tag">${tag.name}</p>`).join("")}
								</div>
								<p class="desc_text">
									${movieData.overview ? movieData.overview : "한국어 줄거리 정보가 없습니다."}
								</p>
								<p class="release">출시일 : ${movieData.release_date}</p>
							</div>
						</div>
						<div class="movie_cont_btm">
							<div class="cast_area">
								<p class="cast_title">CAST</p>
								<div class="cast_desc">
									${movieData.casts.cast
                    .slice(0, 6)
                    .map(
                      (person) => `
												<div class="casts">
													<img
														src = ${
                              person.profile_path
                                ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                                : "asset/img/placehold/placehold_person.png"
                            }
														alt="${person.name} 인물 이미지"
														class="cast_img"
													/>
													<p class="cast_name">${person.name}</p>
													<p class="cast_char">${person.character} 역</p>
												</div>
											`
                    )
                    .join("")}
								</div>
							</div>
						</div>
					</div>
				`;
      } catch (error) {
        console.error("API 오류:", error.message);
      }
    })
    .catch((err) => console.error("네트워크 오류:", err));
});
