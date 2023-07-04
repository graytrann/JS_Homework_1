function ex1() {
  let SalaryOfDay = +document.getElementById("input-1DaySalary").value;
  let DayWorking = +document.getElementById("input-DayWorking").value;

  let Salary = document.getElementById("output-Salary");

  Salary.innerHTML = `Tiền Lương Của Nhân Viên Là : ${
    SalaryOfDay * DayWorking
  } $`;
}

function ex2() {
  let num1 = +document.getElementById("input-numberOne").value;
  let num2 = +document.getElementById("input-numberTwo").value;
  let num3 = +document.getElementById("input-numberThree").value;
  let num4 = +document.getElementById("input-numberFour").value;
  let num5 = +document.getElementById("input-numberFive").value;
  let average = document.getElementById("output-Average");

  average.innerHTML = `Trung Bình Của 5 Số Là : ${
    (num1 + num2 + num3 + num4 + num5) / 5
  }`;
}

function ex3() {
  let usd = +document.getElementById("input-usd").value;
  let vnd = parseFloat(23500);

  let moneychange = document.getElementById("output-vnd");
  let result = usd * vnd;

  moneychange.innerHTML = `Tiền USD Sang VNĐ Là : ${result.toLocaleString()} vnđ`;
}

function ex4() {
  let length = +document.getElementById("input-length").value;
  let width = +document.getElementById("input-width").value;
  let perimeter = (length + width) * 2;
  let area = length * width;

  let result = document.getElementById("output-calculate");

  result.innerHTML = `Diện tích là ${area}
  <br>
  Chu vi là ${perimeter}`;
}

function ex5() {
  let number = +document.getElementById("input-number").value;
  let sum = 0;

  sum = number % 10;
  number = Math.floor(number / 10);

  sum += number % 10;

  let result = document.getElementById("output-sum");

  result.innerHTML = `Kết Quả là : ${sum}`;
}
