//variable
const btn = document.querySelector(".btn-send");
const input = document.querySelector(".input1");
const spinner = document.querySelector("#spinner");
const moadele1 = document.querySelector("#moadele");
const moadele2 = document.querySelector("#moadele2");
const bbb = document.querySelector("#bbb");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector(".text3");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#moadele3");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#mosh2");
const p5 = document.querySelector(".rr")
const p6 = document.querySelector(".dd")
const g1 = document.querySelector("#g1")
const g2 = document.querySelector("#g2")

// eventlistener
addEventListener();
function addEventListener() {
  btn.addEventListener("click", btnFun);
}
//function

function btnFun() {
  bbb.style.display = "none";
  spinner.style.display = "block";
  setTimeout(() => {
    spinner.style.display = "none";
    bbb.style.display = "block";
  }, 1000);
  const txt = input.value;
  const arr = txt.split("-");
  const number1 = Number( arr[0]);
  const number2 = Number( arr[1]);
 const tagsim = number1/number2;
 const moshtag1 = number1/(number2 * 2)
 const moshtag2 = number2 * 2
 const aa = number1 - number2 * moshtag1


 

  moadele1.innerHTML = `(${input.value} x) \ x  =  ${number1}x \ - \ ${number2}x<sup>2</sup> `;
  text3.innerHTML = `${number1} \ - \ ${number2}x`;
  moadele2.innerHTML = `  ${number1}x \ - \ ${number2}x<sup>2</sup>`;
  p1.innerHTML =`${tagsim}`
  p2.innerHTML =`${tagsim}`
  p3.innerHTML = `${moshtag1}`
  p4.innerHTML =`- \ ${moshtag2}`
  p5.innerHTML = `R ( ${moshtag1})` 
  p6.innerHTML =`${number1} \ - \ ${number2} (${moshtag1}) \ = ${aa} `
  g1.innerHTML = aa
  g2.innerHTML =  moshtag1

}
