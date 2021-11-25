const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", (evt) => {
      clearActiveClasses(slides);

      evt.target.classList.add("active");
    });
  });

  const clearActiveClasses = (slides) => {
    slides.forEach((item) => item.classList.remove("active"));
  };
};

slidesPlugin();
