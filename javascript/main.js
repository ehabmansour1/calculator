// vibrate ===================================================
let allButts = document.querySelectorAll(".buttons button");
allButts.forEach((e) => {
  e.addEventListener("click", function () {
    navigator.vibrate(15);
  });
});
// Nums============================================================
let mainDiv = document.querySelector(".maindiv");
allNums = document.querySelectorAll(".num");
allNums.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (mainDiv.innerHTML.length < 10) {
      mainDiv.innerHTML = `${mainDiv.innerHTML}${e.currentTarget.getAttribute(
        "data-num"
      )}`;
    }
  });
});
// clear============================================================
let clear = document.querySelector(".clear");
clear.onclick = function () {
  mainDiv.innerHTML = "";
};
// backspace=========================================================
let backSpace = document.querySelector(".backspace");
backSpace.onclick = function () {
  let arr = mainDiv.innerHTML.split("");
  arr[arr.length - 1] = "";
  mainDiv.innerHTML = arr.join("");
};
//operators =========================================================
alloperators = document.querySelectorAll(".operator");
alloperators.forEach((e) => {
  e.addEventListener("click", function () {
    if (mainDiv.innerHTML.length < 10) {
      let finalLetter = mainDiv.innerHTML[mainDiv.innerHTML.length - 1];
      if (!isNaN(+finalLetter) || finalLetter === ".") {
        mainDiv.innerHTML = `${mainDiv.innerHTML}${e.innerHTML}`;
      } else {
        let arr = mainDiv.innerHTML.split("");
        arr[arr.length - 1] = "";
        mainDiv.innerHTML = arr.join("");
        mainDiv.innerHTML = `${mainDiv.innerHTML}${e.innerHTML}`;
      }
    }
  });
});
//calc =========================================================
let equal = document.querySelector(".equal");
equal.onclick = function () {
  for (var i = 0; i < mainDiv.innerHTML.length; i++) {
    if (
      isNaN(mainDiv.innerHTML[i]) &&
      !["+", "-", "/", "*", "%", "**", "."].includes(mainDiv.innerHTML[i])
    ) {
      return NaN;
    }
  }

  try {
    if (eval(mainDiv.innerHTML).toString().length > 6) {
      mainDiv.innerHTML = eval(mainDiv.innerHTML).toFixed(5);
    } else {
      mainDiv.innerHTML = eval(mainDiv.innerHTML);
    }
  } catch (e) {
    if (e.name !== "SyntaxError") throw e;
    return NaN;
  }
};
//percent =========================================================
let percent = document.querySelector(".percent");
percent.onclick = function () {
  for (var i = 0; i < mainDiv.innerHTML.length; i++) {
    if (
      isNaN(mainDiv.innerHTML[i]) &&
      !["+", "-", "/", "*", "%", "**", "."].includes(mainDiv.innerHTML[i])
    ) {
      return NaN;
    }
  }
  try {
    mainDiv.innerHTML = eval(mainDiv.innerHTML) / 100;
  } catch (e) {
    if (e.name !== "SyntaxError") throw e;
    return NaN;
  }
};
