const house = document.querySelector("#house");

let tooltip;

house.addEventListener("mouseover", (evt) => {
  let target = evt.target.closest("[data-tooltip]");

  if (!target) return;

  tooltip = showTooltip(target);
});

house.addEventListener("mouseout", (evt) => {
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
});

function showTooltip(activeEl){
    let tooltipEl = document.createElement('div');
    tooltipEl.classList.add('tooltip');
    tooltipEl.innerHTML = activeEl.dataset.tooltip;

    document.body.append(tooltipEl);

    activeElCoord = activeEl.getBoundingClientRect();

    let left =
      activeElCoord.left + (activeElCoord.width - tooltipEl.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = activeElCoord.top - tooltipEl.offsetHeight - 5;
    if (top < 0) {
      top = activeElCoord.top + activeEl.offsetHeight + 5;
    }

    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;

    return tooltipEl;
}
