// import config from "/MOVA_movie/config.js";
import config from "../config.js";
const { API_KEY } = config;

export function getSearchMovie(query) {
  // 8966 / 26662 / 27205
  return (
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=ko-KR&region=KR`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${res.status}`);
        }
        return res.json(); // 데이터 반환
      })
      // .then((data) => {
      //   // 결과가 없는 경우
      //   // if (!data?.results) return [];

      //   // 필터링
      //   const filteredResults = data.results.filter((movie) =>
      //     ["en", "ko"].includes(movie.original_language)
      //   );
      //   console.log(filteredResults);

      //   return filteredResults;
      // })
      .catch((err) => {
        console.error("API 요청 실패:", err);
        return null; // 오류 발생 시 null 반환해서 undefined 방지
      })
  );
}
