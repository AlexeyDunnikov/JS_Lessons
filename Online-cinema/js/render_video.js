import { getTrends, getPopular, getTop } from "./services.js";
import { renderCards } from "./render_cards.js";
import { getRating } from "./helper.js";

const filmWeek = document.querySelector(".film-week");
const filmWeekTmp = document.querySelector(".film-week-template");

const renderWeekVideo = (data) => {
  const originalFilmName = data.original_title ?? data.original_name;
  const translatedFilmName = data.title ?? data.name;

  const filmWeekCloned = filmWeekTmp.content.cloneNode(true);

  //original title
  const filmWeekOriginalTitle = filmWeekCloned.querySelector(
    ".film-week__title_origin"
  );
  filmWeekOriginalTitle.innerHTML = originalFilmName;

  //translated title
  const filmWeekTitle = filmWeekCloned.querySelector(".film-week__title");
  filmWeekTitle.innerHTML = translatedFilmName;

  //rating
  const filmWeekRating = filmWeekCloned.querySelector(
    ".film-week__container[data-rating]"
  );
  
  filmWeekRating.dataset.rating = getRating(data);

  //background image
  const filmWeekBackground = filmWeekCloned.querySelector(".film-week__poster");
  filmWeekBackground.src = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`;
  filmWeekBackground.alt = `Постер ${translatedFilmName}`;

  filmWeek.innerHTML = "";
  filmWeek.append(filmWeekCloned);
};



export const renderVideo = async () => {
  const data = await getTrends({
    type: "movies",
    period: "day",
    page: 1,
  });

  const [firstCard, ...otherCard] = data.results;

  renderWeekVideo(firstCard);

  renderCards(otherCard);
};
