const bubbleSort = () => {
  c_delay = 0;
  for (let i = 0; i < size_of_array - 1; i++) {
    for (var j = 0; j < size_of_array - i - 1; j++) {
      updateBar(bars[j], bar_value[j], "yellow");
      if (bar_value[j] > bar_value[j + 1]) {
        updateBar(bars[j], bar_value[j], "red");
        updateBar(bars[j + 1], bar_value[j + 1], "red");

        let temp = bar_value[j];
        bar_value[j] = bar_value[j + 1];
        bar_value[j + 1] = temp;

        updateBar(bars[j], bar_value[j], "red");
        updateBar(bars[j + 1], bar_value[j + 1], "red");
      }
      updateBar(bars[j], bar_value[j], "blue");
    }
    updateBar(bars[j], bar_value[j], "green");
  }
  updateBar(bars[0], bar_value[0], "green");
  enableBtn();
};

const selectionSort = () => {
  c_delay = 0;
  for (var i = 0; i < size_of_array - 1; i++) {
    updateBar(bars[i], bar_value[i], "red");
    min = i;
    for (let j = i + 1; j < size_of_array; j++) {
      updateBar(bars[j], bar_value[j], "yellow");
      if (bar_value[j] < bar_value[min]) {
        if (min != i) {
          updateBar(bars[min], bar_value[min], "blue");
        }
        min = j;
        updateBar(bars[min], bar_value[min], "red");
      } else {
        updateBar(bars[j], bar_value[j], "blue");
      }
    }
    if (min != i) {
      var temp = bar_value[min];
      bar_value[min] = bar_value[i];
      bar_value[i] = temp;

      updateBar(bars[min], bar_value[min], "red");
      updateBar(bars[i], bar_value[i], "red");
      updateBar(bars[min], bar_value[min], "red");
    }
    updateBar(bars[i], bar_value[i], "green");
  }
  updateBar(bars[i], bar_value[i], "green");
  enableBtn();
};

const MergeSort = () => {
  c_delay = 0;
  merge_sort(0, size_of_array - 1);
  enableBtn();
};

const mergeArray = (start, mid, end) => {
  var p = start,
    q = mid + 1,
    k = 0;
  let Arr = [];
  for (let i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = bar_value[q++];
      updateBar(bars[q - 1], bar_value[q - 1], "red");
    } else if (q > end) {
      Arr[k++] = bar_value[p++];
      updateBar(bars[p - 1], bar_value[p - 1], "red");
    } else if (bar_value[p] < bar_value[q]) {
      Arr[k++] = bar_value[p++];
      updateBar(bars[p - 1], bar_value[p - 1], "red");
    } else {
      Arr[k++] = bar_value[q++];
      updateBar(bars[q - 1], bar_value[q - 1], "red");
    }
  }

  for (let j = 0; j < k; j++) {
    bar_value[start++] = Arr[j];
    updateBar(bars[start - 1], bar_value[start - 1], "green");
  }
};

const merge_sort = (start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);

    updateBar(bars[mid], bar_value[mid], "yellow");

    merge_sort(start, mid);
    merge_sort(mid + 1, end);

    mergeArray(start, mid, end);
  }
};
