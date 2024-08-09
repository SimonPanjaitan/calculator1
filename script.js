let display = document.getElementById("display");
let expression = "";

function clickButton(button) {
  let buttonText = button.textContent;
  if (buttonText === "=") {
    try {
      let result = eval(expression);
      if (
        (result === 1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50)
      ) {
        display.value = "wangi baru mandi wkwk";
      } else {
        display.value = result;
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  } else {
    expression += buttonText;
    display.value = expression;
  }
}

function deleteLastChar() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function clearEntry() {
  expression = "";
  display.value = "";
}
