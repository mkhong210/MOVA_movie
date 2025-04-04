import { getDetailMovie } from "./apiDetail.js";

getDetailMovie(27205)
  // 8966 / 26662 / 27205
  .then((data) => {
    // const movies = data?.results || []; // 응답이 없으면 빈 배열로 설정

    console.log(data);
    console.log(data.id);

    const movieData = data;
    try {
      if (!data) throw new Error("영화 데이터 없음!");

      console.log("영화 제목:", movieData.title);
      // data.forEach((movie) => {
      // });
    } catch (error) {
      console.error("API 오류:", error.message);
    }
  })
  .catch((err) => console.error("네트워크 오류:", err));
