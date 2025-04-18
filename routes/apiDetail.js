// import config from "/MOVA_movie/config.js";
import config from "../config.js";
const { API_KEY } = config;

export function getDetailMovie(dataNum) {
  // 8966 / 26662 / 27205
  return fetch(
    `https://api.themoviedb.org/3/movie/${dataNum}?api_key=${API_KEY}&language=ko-KR&region=KR&append_to_response=images,casts`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${res.status}`);
      }
      return res.json(); // 데이터 반환
    })
    .catch((err) => {
      console.error("API 요청 실패:", err);
      return null; // 오류 발생 시 null 반환해서 undefined 방지
    });
}
