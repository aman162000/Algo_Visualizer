const btn = document.getElementById("gen-array");
const container = document.querySelector(".container");
const sort_btn = document.querySelectorAll(".sort_btn");
const bars = [];
let array_slider = document.getElementById("array_range"),
  size_of_array = array_slider.value;

const speed_range = document.getElementById("speed_range");
const bar_value = [];

var speed = 1000;

const updateSpeed = () => {
  switch (parseInt(speed_range.value)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay_time = 10000 / (Math.floor(size_of_array / 10) * speed);
};

speed_range.addEventListener("input", updateSpeed);
console.log(delay_time);
var delay_time = 10000 / (Math.floor(size_of_array / 10) * speed);
var c_delay = 0;

function updateBar(cont, height, color) {
  window.setTimeout(function () {
    // cont.innerHTML = height;
    cont.style =
      " margin:0% " +
      0.1 +
      "%; width:" +
      (100 / size_of_array - 2 * 0.1) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

const generateRandomArray = () => {
  container.innerHTML = "";
  for (let i = 0; i < size_of_array; i++) {
    bar_value[i] =
      Math.floor(
        Math.random() *
          0.6 *
          (parseInt(array_slider.max) - parseInt(array_slider.min) + 1)
      ) + parseInt(array_slider.min);
    bars[i] = document.createElement("div");
    // bars[i].innerHTML = bar_value[i];
    container.appendChild(bars[i]);

    bars[i].style = `margin:0% ${0.1}%; background-color:blue;width:${
      100 / (size_of_array - 0.2)
    }%; height:${bar_value[i]}%;`;
  }
};

const updateArray = (e) => {
  size_of_array = array_slider.value;
  generateRandomArray();
};

window.onload = updateArray;

array_slider.addEventListener("input", updateArray);

const sortAlgo = (e) => {
  switch (e.target.id) {
    case "bubble":
      bubbleSort();
      disableBtn();
      break;

    case "merge":
      MergeSort();
      disableBtn();
      break;

    case "selection":
      selectionSort();
      disableBtn();
      break;

    default:
      break;
  }
};

const disableBtn = () => {
  sort_btn.forEach((ele) => {
    ele.disabled = true;
  });
};

const enableBtn = () => {
  setTimeout(() => {
    sort_btn.forEach((ele) => {
      ele.disabled = false;
    });
  }, (c_delay += delay_time));
};

sort_btn.forEach((ele) => {
  ele.addEventListener("click", sortAlgo);
});
