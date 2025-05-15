// //Primitive Types
// let myString = "This is a string!"; //This is of type String
// document.write(typeof myString);
// document.write("<br>");

// let myBoolean = true; //This of type Bool
// document.write(typeof myBoolean);
// document.write("<br>");

// let myNumber = 100; //This is of type Number
// document.write(typeof myNumber);
// document.write("<br>");

// let myStringTwo = "500"; //This is of type String
// document.write(typeof myNumber);
// document.write("<br>");

// let undefinedVar; //This is not assigned anything yet - hence undefined
// document.write(typeof undefinedVar);
// document.write("<br>");

// let myNull = null;
// document.write(typeof myNull);
// document.write("<br>");

// let mySymbol = Symbol("id"); //Symbol (unique value)
// document.write(typeof mySymbol);
// document.write("<br>");

// //Non-Primitive Types
// let myArray = [1, 2, 3];
// document.write(typeof myArray);
// document.write("<br>");

// let myObject = {name:'King Mudassar', age:'23'};
// document.write(typeof myObject);
// document.write("<br>");
// document.write("<br>");

// //Type Conversions (Explicit)
// let conversionONE = String(myNumber);
// document.write(typeof conversionONE);
// document.write("<br>");
// document.write(conversionONE)
// document.write("<br>");
// document.write("<br>");

// let conversionTWO = Boolean(myNumber);
// document.write(typeof conversionTWO);
// document.write("<br>");
// document.write(conversionTWO)
// document.write("<br>");
// document.write("<br>");

// let conversionTHREE = Number(myString);
// document.write(typeof conversionTHREE);
// document.write("<br>");
// document.write(conversionTHREE)
// document.write("<br>");
// document.write("<br>");

// let conversionFOUR = Number(myStringTwo);
// document.write(typeof conversionFOUR);
// document.write("<br>");
// document.write(conversionFOUR)
// document.write("<br>");
// document.write("<br>");

// //Type Conversions (Implicit) (Also known as coercive)
// let implicitTest = "5" + 1;
// document.write(typeof implicitTest);
// document.write("<br>");
// document.write(implicitTest);
// document.write("<br>");
// document.write("<br>");


// let var1 = "this is a string"
// let var2 = 6
// let var3 = String(var2)

// document.write(var2 == var3)
// document.write("<br>");
// document.write("<br>");

// //A little bit of conditional test
// if ("5" == 5)
// {
//     document.write("FIRST loop worked");
//     document.write("<br>");
// }
// else
// {
//     document.write("SECOND loop worked");
//     document.write("<br>");
// }

// document.write("<br>");
// if ("5" === 5)
// {
//     document.write("FIRST loop worked");
//     document.write("<br>");
// }
// else
// {
//     document.write("SECOND loop worked");
//     document.write("<br>");
// }

// let var4 = "abc";
// document.write("<br>");
// if (var4 + 5)
// {
//     document.write("FIRST loop worked");
//     document.write("<br>");
// }
// else
// {
//     document.write("SECOND loop worked, okay?");
//     document.write("<br>");
// }


// document.write("<br>");
// document.write("<br>");
// // Start
// function countdown() {
//     startingValue = 10;
    
//     return function countingDown()
//     {
//       return startingValue -= 1;
//     }
//   }
  
//   const countingDown = countdown();
  
//   document.write(countingDown());
//   document.write(countingDown());
//   document.write(countingDown());

// function greet(name, callback){
//     document.write("Ello " + name);
//     document.write("<br>");
//     callback();
//     document.write("<br>");
// }

// function bubyee(){
//     document.write("Bubyee nigga");
// }

// greet("Mudassar", bubyee);

// function anonymousFunction(name, anon) {
//     document.write("Ello " + name);
//     document.write("<br>");
//     anon();
// };

// anonymousFunction("Keeng Moody", function(){
// document.write("Testing anonymous callbacc!");
// })

const myArray = []

const element1 = {
    text: 'Muhammad',
    age: 23
}

const element2 = {
    text: 'Mudassar',
    age: 24
}

const element3 = {
    text: 'Latif'
}

const element4 = {
    age: '6'
}

const element5 = {
  age: '7'
}

const element6 = {
  text: '8'
}

const element7 = {
  text: '9'
}




// myArray[0] = element1;
// myArray[1] = element2;
// myArray[2] = element3;
// myArray[3] = element4;
// let count = 0;


// for (let i=0; i < myArray.length; i++){
//     if (!myArray[i].age || !myArray[i].text){
//         count++;
//         continue;
//     }

//     document.write("Name: " + myArray[i].text + "<br>");
//     document.write("Age: " + myArray[i].age + "<br><br>");
// }

// document.write("Arrays skipped: " + count);

// const temperatures = [
//     { degrees: 69, isRecordTemp: false },
//     { degrees: 82, isRecordTemp: true },
//     { degrees: 73, isRecordTemp: false },
//     { degrees: 64, isRecordTemp: false }
//   ];
  
//   const newTemps = temperatures.map(temperature => {
//      temperature.isRecordTemp = true; 
//      return temperature;
//   });
//   document.write(JSON.stringify(newTemps));

const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  const newTemps = temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
  );
  document.write(JSON.stringify(newTemps));

  document.write("<br>");
  document.write("<br>"); 
  