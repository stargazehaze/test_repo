function whoAmI(name, age){
    var yearOfBirth = 2018 - age;
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
    console.log("I was born in " + yearOfBirth);
    
}


function howOld(number){
   if(number < 0){
      console.log("Not a valid entry");
    }else{
        console.log(number);
    }
}

console.log(howOld(10));
console.log(whoAmI('Sophia', 23));

function whoAreYou(name, age){
    if(typeof name === 'string' && typeof age === 'number'){
        console.log(`My name is ${name} and I am ${age} years old.`);
    }else{
        console.log('Invalid Entry');
    }
}

console.log(whoAreYou('Rose', 23));

function checkInputs(name, age){
  if(typeof name != 'string' && typeof age != 'number'){
      console.log("Invalid entry, please try again.");
  }else{
      console.log(`I am ${name} & I am ${age} years old.`);
  }
}

console.log(checkInputs(12, "string"));