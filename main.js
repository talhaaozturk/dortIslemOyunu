var number1,
  number2,
  operator,
  result,
  answer,
  True = 0,
  False = 0;

number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
operator = document.getElementById("operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
True = document.getElementById("True");
False = document.getElementById("False");

function randomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * max + min);
  return randomNumber;
}

//oyun başlangıcında veya soru tahmını sonraso yeni soru oluşturma

function newQuestion() {
  var operation = ["+", "-", "/", "*"];
  operator.textContent = operation[randomNumber(0, 4)];
  number1.textContent = randomNumber(0, 50);
  number2.textContent = randomNumber(0, 50);

  if (operator.textContent == "/") {
    while (true) {
      number2.textContent = randomNumber(0, 50);
      if (number1.textContent % number2.textContent == 0) {
        break;
      }
    }
  }
  if (operator.textContent == "-") {
    while (true) {
      number1.textContent = randomNumber(0, 50);
      number2.textContent = randomNumber(0, 50);
      if (Number(number1.textContent) > Number(number2.textContent)) {
        break;
      }
    }
  }
  if (operator.textContent == "*") {
    while (true) {
      number1.textContent = randomNumber(0, 10);
      number2.textContent = randomNumber(0, 10);
      break;
    }
  }
}

//sayfa yüklendiğinde yeni soru soran fonksiyon
window.onload = newQuestion();

answer.onclick = function () {
  var ans, n1, n2;
  n1 = Number(number1.textContent);
  n2 = Number(number2.textContent);
  switch (operator.textContent) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    default:
      break;
  }
  if (result.value == ans) {
    True.textContent = Number(True.textContent) + 1;
  } else if (result.value == "") {
    window.alert("Lütfen değer giriniz");
  } else if (result.value != ans) {
    False.textContent = Number(False.textContent) + 1;
  }

  newQuestion();
};
