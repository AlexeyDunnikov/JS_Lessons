
const items = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание товара 1",
    imageSrc:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    nominals: [
      {
        title: "Товар 1.1",
        price: 1000,
        description: "Описание 1.1",
        imageSrc:
          "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=452&q=80",
      },
      {
        title: "Товар 1.2",
        price: 2000,
        description: "Описание 1.2",
        imageSrc:
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Товар 1.3",
        price: 3000,
        description: "Описание 1.3",
        imageSrc:
          "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        title: "Товар 1.4",
        price: 10000,
        description: "Описание 1.4",
        imageSrc:
          "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1125&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание товара 2",
    imageSrc:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    nominals: [
      {
        title: "Товар 2.1",
        price: 100,
        description: "Описание 2.1",
        imageSrc:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Товар 2.2",
        price: 200,
        description: "Описание 2.2",
        imageSrc:
          "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      },
      {
        title: "Товар 2.3",
        price: 300,
        description: "Описание 2.3",
        imageSrc:
          "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
      },
      {
        title: "Товар 2.4",
        price: 1000,
        description: "Описание 2.4",
        imageSrc:
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
];

const title = document.querySelector(".card__title");
const img = document.querySelector(".card__img");
const description = document.querySelector(".card__description");
const selectList = document.querySelector(".select__options");

const select = document.querySelector(".select");
const selectBtn = document.querySelector(".select__toggle");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const directions = {
  TYPE_NEXT: "next",
  TYPE_PREVENT: "prev",
};

let nowSlide = 0;

function updateSlide(items, nowSlide, direction) {
  if (direction === directions.TYPE_NEXT) {
    nowSlide = nowSlide < items.length - 1 ? ++nowSlide : 0;
  } else if (direction === directions.TYPE_PREVENT) {
    nowSlide = nowSlide > 0 ? --nowSlide : items.length - 1;
  }

  const nowItem = items[nowSlide];

  defaultInfo(nowItem);

  selectList.innerHTML = ``;
  selectBtn.textContent = selectBtn.dataset.startValue;
  select.classList.remove("select--show");

  nowItem.nominals.forEach((item, index) => {
    const option = createOption(item, index);

    selectList.append(option);
  });

  selectList.append(createRange());

  const rangeInput = document.querySelector(".select__range-input");
  const rangeCounter = document.querySelector(".select__range-text");
  updateRange(rangeInput, rangeCounter, nowItem);

  const selectOptions = document.querySelectorAll(".select__option");
  addListenersToOptions(selectOptions);

  return nowSlide;
}

function updateInfo(item, index) {
  title.textContent = item.nominals[index].title;
  img.src = item.nominals[index].imageSrc;
  description.textContent = item.nominals[index].description;
}

function defaultInfo(nowItem) {
  title.textContent = nowItem.name;
  img.src = nowItem.imageSrc;
  description.textContent = nowItem.description;
}

function createRange() {
  let range = document.createElement("div");
  range.classList.add("select__range-box");
  range.innerHTML = `<input class="select__range-input" type="range" id="price" name="price" step="100">
                  <p class="select__range-text">0
                  </p>`;

  return range;
}

function updateRange(input, rangeCounter, item) {
  const values = item.nominals.map((item) => item.price);
  rangeCounter.textContent = values[0];
  input.min = values[0];
  input.max = values[values.length - 1];

  input.addEventListener("input", (evt) => {
    const rangeValue = evt.target.value;
    rangeCounter.textContent = rangeValue;

    const index = getIndexOfValue(rangeValue, values);

    if (index == -1) {
      console.log(items[nowSlide], nowSlide);
      defaultInfo(items[nowSlide]);
    } else {
      updateInfo(item, index);
    }
  });
}

function getIndexOfValue(rangeValue, values) {
  for (let i = 0; i < values.length; i++) {
    if (rangeValue == values[i]) {
      return i;
    }
  }
  return -1;
}

function createOption(item, index) {
  const option = document.createElement("li");
  option.classList.add("select__option");
  option.value = item.price;
  option.textContent = item.price;
  option.dataset.index = index;
  option.dataset.selectList = "option";

  return option;
}

function addListenersToOptions(selectOptions) {
  selectOptions.forEach((selectOption) => {
    selectOption.addEventListener("click", (evt) => {
      selectBtn.textContent = evt.target.value;
      select.classList.remove("select--show");

      updateInfo(items[nowSlide], evt.target.dataset.index);
    });
  });
}

prevBtn.addEventListener("click", () => {
  nowSlide = updateSlide(items, nowSlide, directions.TYPE_PREVENT);
});

nextBtn.addEventListener("click", () => {
  nowSlide = updateSlide(items, nowSlide, directions.TYPE_NEXT);
});

selectBtn.addEventListener("click", (evt) => {
  select.classList.toggle("select--show");
});

window.onload = updateSlide(items, nowSlide);
