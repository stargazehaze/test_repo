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
console.log(whoAmI("Sofia", "23"));