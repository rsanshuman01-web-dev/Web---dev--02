Q-1. What is hoisting?
Ans. The variable declaration and function declaration will move to the top of scope.Hoisting will be applicable for var variable only not for let and const.

Q-2. What is temporal dead zone(TDZ)?
Ans. When we declare the variable with let and const without its proper initialization then the variable lies in temporal dead zone until its proper initialization.

Q-3. Take a array with length 10 and keep ten different student marks in between 0 to 40 and check which student marks is pass or fail.(below 16)
Ans. let arr = [22,33,21,2,3,4,12,13,23,33]
     let arr2 = arr.filter((x)=>{
        if(x>=16){
            console.log(x,"pass")
        }
        else{
            console.log(x;"fail")
        }
     })

Q-4. Find the sum of all the elements inside an array with for loop?