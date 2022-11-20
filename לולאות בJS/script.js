let a = [];
for (let i = 0; i < 10; i++) {
  a.push(prompt("insert a sentence"));
}

function manu(x) {
  console.log(x);
}
a.forEach(manu);
