document.getElementById('my-btn').addEventListener('click', determiner)
function determiner() {
  let num1 = document.getElementById('my-text').value
  num1= parseInt(num1)
  let num2 = document.getElementById('my-text2').value
  let ans=0
  ans = parseInt(ans)  
  for (num2= document.getElementById('my-text').value num2 > 0; num2--) {
  ans=ans+num1
}
if (num2===0) {
  alert (ans)
}
}