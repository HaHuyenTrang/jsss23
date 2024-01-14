//bai1
//  nhập vào một số nguyên dương
var numbers = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(numbers) || numbers <= 0) {
    console.log(" không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
    // In ra các số nguyên dương từ 1 đến số vừa nhập
    for (var i = 1; i <= numbers; i++) {
        console.log(i);
    }
}



//bai2
// nhập vào một số nguyên dương
var number = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(number) || number <= 0) {
    console.log("Số bạn nhập không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {

    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    // In 
    console.log("Giai thừa của " + number + " là: " + factorial);
}


//bai3
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//bai4
// nhập vào hai số nguyên dương a và b
let a = parseInt(prompt("Nhập số nguyên dương a:"));
let b = parseInt(prompt("Nhập số nguyên dương b:"));


if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("không hợp lệ. Vui lòng nhập các số nguyên dương.");
} else {
    
    for (var i = 1; i <= a; i++) {
        if (i % b === 0) {
            console.log(i);
        }
    }
}


//bai5
// Vòng lặp cho phép nhập lại cho đến khi số nhập vào khớp với số ngẫu nhiên
while (!isCorrect) {
    // nhập vào một số
    var userInput = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));


    //  từ 1 đến 10
var randomNum = Math.floor(Math.random() * 10) + 1;

// Biến kiểm tra xem số nhập vào có khớp với số ngẫu nhiên không
var isCorrect = false;


    // Kiểm tra số nhập vào và cung cấp thông báo tương ứng
    if (userInput === randomNum) {
        console.log("Đúng");
        isCorrect = true;
    } else if (userInput > randomNum) {
        console.log("Lớn hơn");
    } else if (userInput < randomNum) {
        console.log("Nhỏ hơn");
    } else {
        console.log("Số bạn nhập không hợp lệ.");
    }
}



//bai7
const num = prompt("Nhập vào một số: ");
const numb = parseInt(num);


function isPerfectNumber(numb) {
    let sum = 0;
  
    for (let i = 1; i < numb; i++) {
      if (numb % i === 0) {
        sum += i;
      }
    }
  
    if (sum === numb) {
      return true;
    } else {
      return false;
    }
  }
  
  
  // Kiểm tra và in kết quả
  if (isPerfectNumber(numb)) {
    console.log(numb + " là số hoàn hảo.");
  } else {
    console.log(numb + " không phải là số hoàn hảo.");
  }






  //bai8
  const useInput = prompt("Nhập vào một số nguyên dương: ");
  const number1 = parseInt(useInput);



  function isPrime(number1) {
    if (number1 < 2) {
      return false;
    }
  
    for (let i = 2; i < number1; i++) {
      if (number1 % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  

  console.log("Các số nguyên tố nhỏ hơn " + number1 + ":");
  for (let i = 2; i < number1; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }





  //bai9
  // từ khóa const được sử dụng để khai báo một biến với giá trị không thay đổi 
   const userInput = prompt("Nhập vào một số nguyên dương: ");
   const number = parseInt(userInput);


function fibonacciSequence(limit) {
    let sequence = [0, 1];
    let sum = 1;
  
    while (sum < limit) {
      let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNum);
      sum += nextNum;
    }
  
    return sequence;
  }
  
  
  // In dãy Fibonacci sao cho tổng giá trị nhỏ hơn số vừa nhập
  console.log("Dãy Fibonacci sao cho tổng giá trị nhỏ hơn " + number + ":");
  const fibSequence = fibonacciSequence(number);
  for (let i = 0; i < fibSequence.length; i++) {
    console.log(fibSequence[i]);
  }




//bai10
// nhập vào một số nguyên dương
const userInput = prompt("Nhập vào một số nguyên dương: ");
const number = parseInt(userInput);

// In tam giác vuông góc trái
console.log("Tam giác vuông góc trái:");
for (let i = 1; i <= number; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

// In tam giác vuông góc phải
console.log("Tam giác vuông góc phải:");
for (let i = 1; i <= number; i++) {
  let row = '';
  for (let j = 1; j <= number - i; j++) {
    row += ' ';
  }
  for (let k = 1; k <= i; k++) {
    row += '*';
  }
  console.log(row);
}




//bai6
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + (i * j));
  }
  console.log(''); // In ra một dòng trống để phân tách giữa các bảng cửu chương
}