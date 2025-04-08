import { renderSearch } from "./movieSearch.js";
import { renderPopular } from "./moviePopular.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search_form");
  const input = document.querySelector("#search_movie");
  const popArea = document.querySelector(".popular_area");
  const resultArea = document.querySelector(".search_area");

  // 처음엔 인기영화 보여주기
  renderPopular();
  resultArea.style.display = "none";
  popArea.style.display = "block";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = input.value.trim().toLowerCase();

    if (query) {
      // 검색 결과 렌더
      history.pushState({}, "", `?query=${encodeURIComponent(query)}`);

      popArea.style.display = "none";
      resultArea.style.display = "block";

      renderSearch(query);
    } else {
      // 검색어 없으면 다시 인기영화 보여주기
      history.pushState({}, "", location.pathname);

      resultArea.style.display = "none";
      popArea.style.display = "block";

      renderPopular();

      input.value = "";
    }
  });
});

// 뒤로가기 / 앞으로가기 시 처리
// window.addEventListener("popstate", () => {
//   const query = new URLSearchParams(location.search).get("query")?.trim().toLowerCase();

//   if (query) {
//     renderSearch(query);
//     resultArea.style.display = "block";
//     popArea.style.display = "none";
//     input.value = query; // ⬅ 뒤로가기로 복귀 시 input에 다시 보여줌
//   } else {
//     renderPopular();
//     resultArea.style.display = "none";
//     popArea.style.display = "block";
//     input.value = ""; // ⬅ query 없으면 input도 비움
//   }
// });
