// search.html
import { getSearchMovie } from "../routes/apiSearch.js";

// document.addEventListener("DOMContentLoaded", () => {
export function renderSearch(query) {
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("query")?.trim().toLowerCase();

  console.log(query);

  const form = document.querySelector("#search_conts");
  console.log(form);

  getSearchMovie(query)
    .then((data) => {
      form.innerHTML = "";

      if (!data.results.length) {
        form.innerHTML = `<div class="search_li"><p>검색 결과가 없습니다.</p></div>`;
        return;
      }

      console.log(data);
      data.results.forEach((movie) => {
        form.innerHTML += `
					<div class="search_li">
						<a href="detail.html?movieId=${movie.id}" class="search">
							<img src="https://image.tmdb.org/t/p/w400/${movie.poster_path}" alt="${movie.title}" />
							<p class="search_name">${movie.title}</p>
						</a>
					</div>
				`;
      });
    })
    .catch((err) => console.error("네트워크 오류:", err));
}
// });
