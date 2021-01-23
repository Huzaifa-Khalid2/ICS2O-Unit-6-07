document.getElementById('my-btn').addEventListener('click', determiner)
 function determiner() {
  let n1 = document.getElementById('my-text').value
  n1 = parseInt(n1)
  let n2 = document.getElementById('my-text2').value
  n2 = parseInt(n2)
  let ans = 0
  ans = parseInt(ans)
  for (n2, n2 <= 0; n2--;) {
    ans = ans + n1
  }
  alert(ans)
}
