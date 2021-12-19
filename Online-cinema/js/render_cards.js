import { getRating } from "./helper.js";

const otherFilmsList = document.querySelector(".other-films__list");
const otherFilmTmp = document.querySelector(".other-films__item-template");

export const renderCards = (dataArr) => {
  dataArr.length = 12;
  otherFilmsList.innerHTML = "";
  const cards = dataArr.map((data) => {
    const otherFilmCloned = otherFilmTmp.content.cloneNode(true);

    const translatedFilmName = data.title ?? data.name;

    //rating
    const otherFilmRating = otherFilmCloned.querySelector(
      ".other-films__link[data-rating]"
    );
    otherFilmRating.dataset.rating = getRating(data);

    //background image
    const otherFilmBackground =
      otherFilmCloned.querySelector(".other-films__img");
    otherFilmBackground.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`;
    otherFilmBackground.alt = `Постер ${translatedFilmName}`;

    return otherFilmCloned;
  });

  otherFilmsList.append(...cards);
};
