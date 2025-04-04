const API_KEY = "0b5ef5b0a2c9fcd67865f11fbd0a0e16";

export function getDetailMovie(dataNum) {
  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${dataNum}?api_key=${API_KEY}&language=ko-KR`
    )
      // .then((res) => res.json())
      // .then((res) => console.log(res))
      // .catch((err) => console.error(err));
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${res.status}`);
        }
        return res.json(); // 데이터를 반환
      })
      .catch((err) => {
        console.error("API 요청 실패:", err);
        return null; // 오류 발생 시 null 반환해서 undefined 방지
      })
  );
}
