// let cars = ['opel','bmw','mersedes', 'lada'];


// console.log(cars[1]);
// for
// let list  = document.getElementById("list");

// let data = "";
// for(let i = 0;i<cars.length; i++){
//     data += `<li> ${cars[i]} </li>`
// }

// list.innerHTML = data;


// for of
// let data = "";
// for(let key of cars){
//     data += `<li> ${key} </li>`
// }
// list.innerHTML = data;


// for in

// let data = "";
// for(let key in cars){
//     data += `<li> ${cars[key]} </li>`
// }
// list.innerHTML = data;


// forEach
// let data = "";
// cars.forEach(function(item){
//     data += `<li> ${item}  </li>`
// })
// list.innerHTML = data;






//let test = " ";


//function say() {
// let sait = ['a', 'e', 'u', 'o', 'i', 'ə', 'ı', 'ü', 'ö'];
///  let text = document.getElementById("text");
// let show = document.getElementById("show");
//  let count = 0;


// for (let i = 0; i < text.value.length; i++) {
//   for (let j = 0; j < sait.length; j++) {
//     if (text.value[i].toLowerCase() == sait[j]) {

//       count++;
//    }
//   }
// }
// show.innerHTML = count;

//}




function say() {
  let show = document.getElementById("show");
  let text = document.getElementById("text");
  let count = 1;

  for (let i = 0; i < text.value.length; i++) {
    if (text.value[i] == " " && text.value[i + 1] !== " ") {
      count++;
    }
  }
  show.innerHTML = count;
}


//ev tapshirigi

//let teg = " "

//function check() {

 // let teg = document.getElementById("teg");

  //teg.value = teg.value.toLowerCase();

//}


//let exam = " "

//function text() {

  //let exam = document.getElementById("exam");

 // exam.value = exam.value.toUpperCase();

//}