export const getRating = (data) => {
  return data.vote_average === 0 ? "-" : data.vote_average;
};

