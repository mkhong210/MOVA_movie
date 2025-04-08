import { getRatedMovies } from "../routes/api.js";

getRatedMovies("popular")
  .then((data) => {
    // const movies = data?.results || []; // 응답이 없으면 빈 배열로 설정

    try {
      if (!data || !data.results) throw new Error("영화 데이터 없음!");

      data.results.forEach((movie) => {
        // console.log("영화 제목:", movie.title);
      });
    } catch (error) {
      console.error("API 오류:", error.message);
    }
  })
  .catch((err) => console.error("네트워크 오류:", err));
