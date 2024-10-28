document.querySelectorAll("#calc span").forEach((key) => {
  key.addEventListener("click", function (e) {
    const display = document.querySelector(".display");
    let currentVal = display.innerHTML;
    const buttonVal = this.innerHTML;

    if (buttonVal === "C") {
      display.innerHTML = "";
    } else if (buttonVal === "=") {
      try {
        display.innerHTML = eval(
          currentVal.replace("×", "*").replace("÷", "/")
        );
      } catch {
        display.innerHTML = "Error";
      }
    } else if (buttonVal === "+/-") {
      display.innerHTML = -parseFloat(currentVal) || "";
    } else if (buttonVal === "%") {
      display.innerHTML = parseFloat(currentVal) / 100;
    } else {
      display.innerHTML += buttonVal;
    }
  });
});

document.querySelector("#checkbox").addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
