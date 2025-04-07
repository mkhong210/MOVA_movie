// mova.html
document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/user.json") // 또는 './data/user.json', 경로 맞게 조절
    .then((res) => {
      if (!res.ok) throw new Error("유저 데이터 불러오기 실패!");
      return res.json();
    })
    .then((data) => {
      const userList = data.users;
      const userSection = document.getElementById("feed");

      if (!feed) return console.error("feed 요소 X");
      console.log(userList.genres);
      userSection.innerHTML = userList
        .map(
          (userItem) => `
				<div class="post">
					<div class="post_title">
						<p class="user_name">${userItem.userName}</p>
						<div class="post_plus">
							<a href="mypick.html?id=${userItem.IdNum}">더보기 ></a>
						</div>
					</div>
					<div class="caption">
						<p class="">${userItem.pick_title}</p>
					</div>
					<div class="tags">
						${userItem.genres
              .map(
                (genre) => `
							<span class="tag">${genre.name_en}</span>
						`
              )
              .join("")}
					</div>
	
					<div class="movie_list">
						${userItem.movies
              .map(
                (movie) => `
							<div class="movie">
								<img src="https://image.tmdb.org/t/p/w500${movie.Mposter}" alt="${movie.Mname}" />
								<p class="move_title">${movie.Mname}</p>
							</div>
						`
              )
              .join("")}
						</div>
					</div>
				</div>
			`
        )
        .join("");
    })
    .catch((err) => console.error(err));
});
