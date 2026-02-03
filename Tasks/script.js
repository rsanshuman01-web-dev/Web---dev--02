// const profile = document.getElementById("profile");
// profile.style.backgroundColor = " lightblue";
// profile.style.padding = "2px";
// profile.style.border = "5px , dashed , red";
// profile.style.textAlign = "center";

//Task 2 

// const imp = document.getElementsByClassName("important");
// console.log(imp.length)

// for(let i=0 ; i<imp.length ; i++){
//     imp[i].style.color = "red";
//     imp[i].style.fontSize = "60px";
    
// }



//Task 3 

// const task3 = document.getElementsByTagName("p");
// console.log(task3)

// for(let i = 0; i<task3.length;i++ ){
//     if(i%2===0){
//         task3[i].style.color = "blue";
//     }
//     else{
//         task3[i].style.color = "red";
//     }
// }

// task3[task3.length-1].style.fontWeight = "bold";


// Task 4 

// const task4 = document.querySelectorAll(".box");
// console.log(task4)
// task4.style.backgroundColor = "red";
// task4.style.color = "blue";

// for(let i=0; i<task4.length;i++){
//     task4[i].style.backgroundColor = "red";
// }
// task4.textContent = "I am first box"


// Task 5 

// const task5 = document.querySelectorAll("#content p")
// for(let i=0; i<task5.length;i++){
//     task5[i].style.color = "purple";
// }

// so in this case we are using the query selector and accessing first id and then the paragrapf as you can see the "#content p" but we can also do this is in another way which is below here:-

const section = document.getElementById("content");
const task5 = section.querySelectorAll("p")
for(let i=0; i<task5.length;i++){
    task5[i].style.color = "purple";
}

// so know we accessing the id first and then the paragraph , as you can see in two const variables.