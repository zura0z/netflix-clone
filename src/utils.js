export const navActive = (e) => {
  let elems = document.getElementsByClassName("nav-elem");
  for (let i = 0; i < elems.length; i++) {
    const element = elems[i];
    element.classList.remove("active");
  }
  e.target.classList.add("active");
};

export const onSearch = () => {
  const searchDiv = document.getElementById("search-div");
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  searchDiv.classList.remove("blank");

  searchIcon.classList.remove("right");
  searchIcon.classList.add("left");
  searchIcon.style.pointerEvents = "none";

  searchInput.style.animationName = "search";
  searchInput.style.animationTimingFunction = "ease-in-out";
  searchInput.style.animationDuration = "300ms";
};

export const removeInput = () => {
  document.getElementById("body").addEventListener("click", (e) => {
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.getElementById("search-input");
    if (e.target.id !== "search-input" || e.target.id === "search-icon") {
      searchInput.style.animationName = "search-reverse";
      searchInput.style.animationTimingFunction = "ease-in";
      searchInput.style.animationFillMode = "forwards";
      searchInput.style.animationDuration = "200ms";

      searchIcon.style.pointerEvents = "all";
      searchIcon.classList.remove("left");
      searchIcon.classList.add("right");
    }
  });
};

export const desc = (text) => {
  if (text) return text.substr(0, text.lastIndexOf(".", 250)) + ".";
};

export const getGenre = (genreId, count) => {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  let arr = [];
  let genreStr = "";

  if (genreId) {
    for (let i = 0; i <= genreId.length; i++) {
      for (let j = 0; j < genres.length; j++) {
        if (genreId[i] === genres[j]["id"]) {
          arr = [...arr, genres[j]["name"]];
        }
      }
    }
  }
  if (count === 3) {
    for (let i = 0; i <= 2; i++) {
      if (arr[i]) genreStr += " • " + arr[i];
    }
    return genreStr.slice(3);
  } else if (count === "all") {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i]) genreStr += ", " + arr[i];
    }
    return genreStr.slice(2);
  }
};
