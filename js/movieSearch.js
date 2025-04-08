// search.html
import { getSearchMovie } from "../routes/apiSearch.js";

// document.addEventListener("DOMContentLoaded", () => {
export function renderSearch(query) {
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("query")?.trim().toLowerCase();

  const form = document.querySelector("#search_conts");

  getSearchMovie(query)
    .then((data) => {
      form.innerHTML = "";

      if (!data.results.length) {
        form.innerHTML = `<div class="search_li"><p>검색 결과가 없습니다.</p></div>`;
        return;
      }

      const searchResult = data;

      searchResult.results.forEach((movie) => {
        form.innerHTML += `
					<div class="search_li">
						<a href="detail.html?movieId=${movie.id}" class="search">
							<img 
								src = ${
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "asset/img/placehold/placehold_poster.png"
                } 
								alt="${movie.title}" />
							<p class="search_name">${movie.title}</p>
						</a>
					</div>
				`;
      });
    })
    .catch((err) => console.error("네트워크 오류:", err));
}
// });
