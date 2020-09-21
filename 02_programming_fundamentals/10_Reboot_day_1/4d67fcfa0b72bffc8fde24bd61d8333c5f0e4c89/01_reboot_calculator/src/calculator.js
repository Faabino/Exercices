const calculator = (reader) => {
  let number1 = 0;
  let number2 = 0;
  reader.question("Enter the first number \n> ", (firstNumber) => {
    const parsedNumber = parseInt(firstNumber);
    if (isNaN(parsedNumber)) {
      console.log("Unknown entry");
      return calculator(reader);
    } else {
      number1 = parsedNumber;
    }
    reader.question("Enter the second number \n> ", (secondNumber) => {
      const parsedNumber = parseInt(secondNumber);
      if (isNaN(parsedNumber)) {
        console.log("Unknown entry");
        calculator(reader);
      } else {
        number2 = parsedNumber;
      }
      reader.question("Choose an operation: [ + - * / ]\n> ", (operator) => {
        if (operator === "+") {
          let result = number1 + number2;
          console.log(result);
          calculator(reader);
        } else if (operator === "-") {
          let result = number1 - number2;
          console.log(result);
          calculator(reader);
        } else if (operator === "*") {
          let result = number1 * number2;
          console.log(result);
          calculator(reader);
        } else if (operator === "/") {
          let result = number1 / number2;
          console.log(result);
          calculator(reader);
        } else {
          console.log("Unknown entry");
          calculator(reader);
        }
      });
    });
  });
};

export { calculator };