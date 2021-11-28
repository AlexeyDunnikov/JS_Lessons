const slider = document.querySelector("#slider");
const thumb = document.querySelector(".thumb");

const sliderCoord = slider.getBoundingClientRect();

thumb.addEventListener("mousedown", (evt) => {
  evt.preventDefault();

  let shiftX = evt.clientX - thumb.getBoundingClientRect().left;

  thumb.style.position = "absolute";
  thumb.style.zIndex = 1000;
  document.body.append(thumb);

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUpWindow);

  moveAt(evt.pageX);

  function moveAt(pageX) {
    let left = pageX - shiftX;

    if (left > sliderCoord.right - thumb.clientWidth) {
      left = sliderCoord.right - thumb.clientWidth;
    } else if (left < sliderCoord.left) {
      left = sliderCoord.left;
    }

    thumb.style.left = `${left}px`;

    thumb.style.top = `${
      sliderCoord.top - (thumb.clientHeight - slider.clientHeight) / 2
    }px`;
  }

  function onMouseMove(evt) {
    moveAt(evt.pageX);
  }

  function onMouseUpWindow(evt) {
    document.removeEventListener("mouseup", onMouseUpWindow);
    document.removeEventListener("mousemove", onMouseMove);
  }
});

thumb.addEventListener("dragstart", (evt) => {
  return false;
});
