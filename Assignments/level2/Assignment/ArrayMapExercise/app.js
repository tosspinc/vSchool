//1. Take an array of numbers and double them.
const doubleNumbers = [2, 5, 100]; //declares doubleNumbers as a constant variable and assigns the array of 3 number to it.
const arr = doubleNumbers; //declares arr as a const variable and assigns the array value of doubleNumbers() to arr.
//const result = arr.map(function(){});

const result = arr.map(num => num * 2); //declares result as a constant variable and assigns the array doubleNumbers to result. takes the numbers in the arr and uses a callback parameter and assigns each number to num individually storing the number in memory and then mulitplies each number by 2. 
  
  console.log(result); //displays the following result in the console. => [4, 10, 200] 
  
  //2. Take an array of numbers and make them into a string.
  const stringItUp = [2, 5, 100];   //declares stringItUp as a constant variable and assigns the value of the array to it.
  const results = stringItUp.toString(); //toString() is a built in method and does not accept any arguments. 
  console.log(results);

  //part 3 of  this assignment is to capitalize the first letter of each word and have all remaining text lower case letters.
  const capitalizeNames = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];

const capitalizeArray = capitalizeNames.map(name => {
  const lowerCaseName = name.toLowerCase();
  const capitalizedFirstLetter = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
  return capitalizedFirstLetter;
});

console.log(capitalizeArray);

//4. Make an Array of string of the names.
function namesOnly(arr){   //declares namesOnly as a function and passes the parameter or objext arr to it.
    let name = arr.map(names => names.name.toString());  //declares name as a variable and assigns it the data from the array called names. converts each name to a string. does not affect the age as it is a number.
    return name;    //returns the variable of name with its assigned string data.
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));  //prints out only the name of each person as it has been converted from an array into a string. the age is stored in memory and can be called at a later time.

  //5. make a string of the names and tell if they can go to the matrix.
  function makeStrings(arr){    //declares makeStrings as a function and passes the data for arr to makeStrings. 
    const approved = arr.map(verify => {    //declares approved as a constant variable and assigns arr to approved.
        if (verify.age >= 18) { //validates the age and determines if number is equal to or great than 18.
            return verify.name + " can go to The Matrix" //this runs and adds "can go to the Matrix" to the end of the name of the person who's age has been validated to be equal to or greater than 18.
        } else {
            return verify.name + " is under age!!" //this runs and adds "is under age!!" to the end of the name of the person who's age has been validated to be less than 18.
        };
    });
    return approved;  //returns the data assign in memory to approved
  }
  
  console.log(makeStrings([ //prints string of information in the console and does nothing with the age parameter as it is a number.
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));

  //6. make an array of names that display as a h1 and the ages display as a h2.
  const readyToPutInTheDom = [ //declares readyToPutInTheDom as a constant variable and passes the array with peoples names and ages to it.
    {Name: 'Angelina Jolie', Age: 80},  //Angelina Jolie is a string, 80 is a number collected in the .map method below.
    {Name: 'Eric Jones', Age: 2},       //Eric Jones is a string, 2 is a number collected in the .map method below.
    {Name: 'Paris Hilton', Age: 5},     //Paris Hilton is a string, 5 is a number collected in the .map method below.
    {Name: 'Kanye West', Age: 16},      //Kanye West is a string, 16 is a number collected in the .map method below.
    {Name: 'Bob Ziroll', Age: 100}      //Bob Ziroll is a string, 100 is a number collected in the .map method below.
  ];

  const nameAndAgeHeaders = document.getElementById  ('nameAndAgeHeaders'); //declares nameAndAgeHeaders as a constant variable and retrieves the HTML element with the id of nameAndAgeHeaders.

  const namesAndAges = readyToPutInTheDom.map(person => { //declares namesAndAges as a constant variable and uses .map to iterate over elements of the readyToPutInTheDom array.  
    const nameHeader =  `<h1>Name: ${person.Name}</h1>`; //declares nameHeader as a constant variable and uses the string literal to assign the name property of the correlated person object to it and the name of the person is assigned to the h1 format in the html document.
    const ageHeader = `<h2>Age: ${person.Age}</h2>`; //declares ageHeader as a constant variable and uses the string literal to assign the age property of the correlated person object to it and the age of the person is assigned to the h2 format in the html document.  
    return nameHeader + ageHeader;  //returns the value or data of nameHeader and ageHeader.
  });

  nameAndAgeHeaders.innerHTML = namesAndAges.join('');