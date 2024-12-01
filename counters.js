const countInput = document.getElementById('count');
let count = 0;

 
function changeNumber(number) {
  count += number;
  countInput.innerHTML =
  ` ${count}`;
}




